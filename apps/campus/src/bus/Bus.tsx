import React, { forwardRef, useState, useEffect } from "react";

import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import {
  faClock,
  faAngleDoubleRight,
  faSearch,
  faCalendarAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { busSchedule } from "@app/constants/busSchedule";
import { ThemeContext } from "@app/utils/theme-context";

const wasedaNishiwasedaBusUri =
  "https://www.waseda.jp/fsci/assets/uploads/2020/09/20200925_waseda_nishiwaseda-1.pdf";

const InfoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 2em 20em;
  ${media.desktop`padding: 2em;`}
`;

const StyledAnchor = styled("a")`
  margin: 1.5rem 0px;
  font-size: 1.8rem;
  font-weight: 400;
  text-decoration: underline;
`;

const BusStatus = styled("article")`
  margin: 1.5rem 0px;
`;

const StyledSubHeading = styled("h2")`
  align-self: flex-start;
  margin-top: 0px;
  margin-bottom: 1rem;
  border-width: 3px 6px;
  font-size: 2.5rem;
  font-weight: 300;
  color: #ffffff;
  ${media.phone`font-size: 2rem;`}
`;

const Status = styled("section")`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Remark = styled("section")`
  font-size: 1.5rem;
`;

const DatetimeSelection = styled("div")`
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const DatePickerSpan = styled("span")`
  display: inline-block;
  width: 38%;
`;

const DatePickerButton = styled("button")`
  padding: 0.5em 0.8em;
  border: none;
  width: 100%;
  background: #efefef;
  &:hover {
    outline: none;
    background: #ddd;
  }
  ${media.phone`padding: 0.5em 0.3em;`}
  ${media.phoneMini`font-size: 0.9em;`}
`;

const DatetimeClearButton = styled("button")`
  padding: 0.5em 0.8em 0.5em 0.4em;
  border: none;
  border-radius: 0 5px 5px 0;
  width: 24%;
  background: #efefef;
  &:hover {
    outline: none;
    background: #ddd;
  }
  &:focus {
    outline: none;
  }
  ${media.phone`padding: 0.5em 0.3em;`}
  ${media.phoneMini`font-size: 0.9em;`}
`;

interface PropsType {
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const binarySearch = (value, arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) {
      return true;
    }
    if (arr[mid] > value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return false;
};

const getSchduleType = (month, date, day) => {
  const monthString = month.toString();
  const { outOfService, weekdaySchedule, saturdaySchedule, specialSchedule } =
    busSchedule.exceptions;

  if (
    monthString in outOfService &&
    binarySearch(date, outOfService[monthString])
  ) {
    return "noSchedule";
  }
  if (
    monthString in weekdaySchedule &&
    binarySearch(date, weekdaySchedule[monthString])
  ) {
    return "weekday";
  }
  if (
    monthString in saturdaySchedule &&
    binarySearch(date, saturdaySchedule[monthString])
  ) {
    return "saturday";
  }
  if (
    monthString in specialSchedule &&
    binarySearch(date, specialSchedule[monthString])
  ) {
    return "special";
  }
  if (day === 0) {
    return "noSchedule";
  }
  if (day === 6) {
    return "saturday";
  }

  return "weekday";
};

const binarySearchSchedule = (totalMins, schedule) => {
  let start = 0;
  let end = schedule.length - 1;
  let ans = 0;
  let index = 0;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (schedule[mid] === totalMins) {
      ans = schedule[mid];
      index = mid;
      break;
    } else if (schedule[mid] > totalMins) {
      end = mid - 1;
      index = mid;
    } else {
      start = mid + 1;
      index = mid + 1;
    }
  }
  if (ans !== 0) {
    return ans;
  }
  // Return value -1 if totalMins is larger than all bus schedule values,
  // meaning no service.
  return index >= schedule.length ? -1 : schedule[index];
};

const totalMinsToTimeStr = (totalMins) => {
  const hours = Math.floor(totalMins / 60);
  const minutes = totalMins - hours * 60;
  const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
  const minsString = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${hoursString}:${minsString}`;
};

// TODO Fix mixing different return types
const getBusStatus = (totalMins, occurrences, remarks, t) => {
  const nextTotalMins = binarySearchSchedule(totalMins, occurrences);
  // If there is there exists a subsequent bus schedule on the same day
  if (nextTotalMins !== -1) {
    const remark =
      nextTotalMins in remarks ? remarks[nextTotalMins.toString()] : "";
    const nextTimeString = totalMinsToTimeStr(nextTotalMins);

    return {
      departIn: nextTotalMins - totalMins,
      timeString: nextTimeString,
      remark,
    };
  }

  return t("bus.Out of service");
};

const getBusStatuses = (targetDate, lng, t) => {
  const month = targetDate.getMonth();
  const date = targetDate.getDate();
  const day = targetDate.getDay();
  // assertion language at first
  let wasedaStatus;
  let nishiStatus;
  wasedaStatus = t("bus.Out of service");
  nishiStatus = t("bus.Out of service");
  const scheduleType = getSchduleType(month, date, day);
  // No buses or special schedule
  if (scheduleType === "noSchedule") {
    return { wasedaStatus, nishiStatus };
  }
  if (scheduleType === "special") {
    wasedaStatus = t("bus.Special Schedule");
    nishiStatus = t("bus.Special Schedule");

    return { wasedaStatus, nishiStatus };
  }

  // Weekday schedule or Saturday schedule
  const totalMins = targetDate.getHours() * 60 + targetDate.getMinutes();
  const wasedaSchedule = busSchedule[scheduleType].fromWasedaToNishiWaseda;
  const nishiSchedule = busSchedule[scheduleType].fromNishiWasedaToWaseda;
  if (lng === "en") {
    wasedaStatus = getBusStatus(
      totalMins,
      wasedaSchedule.occurrences,
      wasedaSchedule.remarks_en,
      t
    );
    nishiStatus = getBusStatus(
      totalMins,
      nishiSchedule.occurrences,
      nishiSchedule.remarks_en,
      t
    );
  } else if (lng === "ja") {
    wasedaStatus = getBusStatus(
      totalMins,
      wasedaSchedule.occurrences,
      wasedaSchedule.remarks_jp,
      t
    );
    nishiStatus = getBusStatus(
      totalMins,
      nishiSchedule.occurrences,
      nishiSchedule.remarks_jp,
      t
    );
  }

  return { wasedaStatus, nishiStatus };
};

const createStatusComponent = (status, t) => {
  if (typeof status === "object") {
    return {
      status: (
        <span>
          {t("bus.Departs in")} <b>{status.departIn}</b> {t("bus.mins")}&nbsp;
          <FontAwesomeIcon icon={faClock} size="1x" />{" "}
          <b>{status.timeString}</b>
        </span>
      ),
      remark: status.remark,
    };
  }

  return {
    status: <span>{status}</span>,
    remark: "",
  };
};

const DateSelectorWrapper = (props: any) => <DateSelector {...props} />;

const TimeSelectorWrapper = (props: any) => <TimeSelector {...props} />;

const DateSelector = forwardRef<any, PropsType>(({ value, onClick }, ref) => (
  <DatePickerButton
    onClick={onClick}
    ref={ref}
    style={{ borderRadius: "5px 0 0 5px" }}
  >
    <FontAwesomeIcon icon={faCalendarAlt} size="1x" /> {value}
  </DatePickerButton>
));

const TimeSelector = forwardRef<any, PropsType>(({ value, onClick }, ref) => (
  <DatePickerButton onClick={onClick} ref={ref}>
    <FontAwesomeIcon icon={faClock} size="1x" /> {value}
  </DatePickerButton>
));

const Bus = (): JSX.Element => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const [date, setDate] = useState<Date>(new Date());
  const onDatetimeChange = (date: Date): void => setDate(date || new Date());
  const clearDatetime = (): void => setDate(new Date());

  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("wasedatime-lng"));
  }, []);

  const lng = i18n.language;
  const { wasedaStatus, nishiStatus } = getBusStatuses(date, lng, t);
  const wasedaStatusComponent = createStatusComponent(wasedaStatus, t);
  const nishiStatusComponent = createStatusComponent(nishiStatus, t);

  return (
    <React.Fragment>
      <Helmet>
        <title>WasedaTime -　Bus</title>
        <meta
          name="description"
          content="Shuttle Bus Arrival Time Checking at Waseda University."
        />
        <meta property="og:title" content="WasedaTime - Bus" />
        <meta
          property="og:description"
          content="Shuttle Bus Arrival Time Checking at Waseda University."
        />
        <meta property="og:site_name" content="WasedaTime - Bus" />
      </Helmet>

      <InfoWrapper>
        <h1
          style={{
            paddingLeft: "10px",
            marginBottom: "20px",
          }}
          className="text-light-text1 dark:text-dark-text1 border-l-4 border-solid border-light-main dark:border-dark-main"
        >
          {t("bus.busStatus")}
        </h1>
        <p className="text-light-text2 dark:text-dark-text2">
          <FontAwesomeIcon icon={faSearch} size="1x" />{" "}
          {t("bus.Assign a date / time to check the next bus")}：
        </p>

        <DatetimeSelection>
          <DatePickerSpan>
            <DatePicker
              selected={date}
              onChange={(d: Date) => onDatetimeChange(d)}
              dateFormat="yyyy-MM-dd"
              customInput={<DateSelectorWrapper />}
              popperPlacement="bottom-start"
            />
          </DatePickerSpan>
          <DatePickerSpan>
            <DatePicker
              selected={date}
              onChange={(d: Date) => onDatetimeChange(d)}
              showTimeSelect
              showTimeSelectOnly
              minTime={new Date().setHours(9, 0)}
              maxTime={new Date().setHours(18, 20)}
              timeIntervals={5}
              timeCaption="Time"
              dateFormat="hh:mm aa"
              customInput={<TimeSelectorWrapper />}
              popperPlacement="bottom-start"
            />
          </DatePickerSpan>
          <DatetimeClearButton onClick={clearDatetime}>
            <FontAwesomeIcon icon={faTimes} size="1x" /> Clear
          </DatetimeClearButton>
        </DatetimeSelection>

        <BusStatus>
          <StyledSubHeading className="bg-light-main dark:bg-dark-main rounded-md border-solid border-light-main dark:border-dark-main">
            {t("bus.Waseda")}{" "}
            <FontAwesomeIcon icon={faAngleDoubleRight} size="1x" />{" "}
            {t("bus.NishiWaseda")}
          </StyledSubHeading>
          <Status className="text-light-text1 dark:text-dark-text1">
            {wasedaStatusComponent.status}
          </Status>
          <Remark className="text-light-text1 dark:text-dark-text1">
            {wasedaStatusComponent.remark}
          </Remark>
        </BusStatus>
        <BusStatus>
          <StyledSubHeading className="bg-light-main dark:bg-dark-main rounded-md border-solid border-light-main dark:border-dark-main">
            {t("bus.NishiWaseda")}{" "}
            <FontAwesomeIcon icon={faAngleDoubleRight} size="1x" />{" "}
            {t("bus.Waseda")}
          </StyledSubHeading>
          <Status className="text-light-text1 dark:text-dark-text1">
            {nishiStatusComponent.status}
          </Status>
          <Remark className="text-light-text1 dark:text-dark-text1">
            {nishiStatusComponent.remark}
          </Remark>
        </BusStatus>
        <StyledAnchor href={wasedaNishiwasedaBusUri} target="_blank">
          {t("bus.The Latest Waseda-NishiWaseda Bus Schedule")}
        </StyledAnchor>
      </InfoWrapper>
    </React.Fragment>
  );
};

export default Bus;
