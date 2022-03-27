import React, { forwardRef, useState } from "react";

import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import {
  faClock,
  faSearch,
  faCalendarAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs, Tab, Badge } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import Building from "@app/room/Building";

const InfoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 2em 20em;
  ${media.desktop`padding: 2em;`}
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

const DatePickerSpan = styled("span")`
  display: inline-block;
  width: 38%;
`;

const DatetimeSelection = styled("div")`
  border-radius: 5px;
  cursor: pointer;
`;

const findQuar = (mon, dai) => {
  if (mon === 4 || mon === 5 || (mon === 6 && dai < 21)) {
    return 0;
  }
  if (
    mon === 7 ||
    mon === 8 ||
    (mon === 6 && dai >= 21) ||
    (mon === 9 && dai < 21)
  ) {
    return 1;
  }
  if (mon === 10 || (mon === 11 && dai < 22) || (mon === 9 && dai >= 21)) {
    return 2;
  }

  return 3;
};

const findPeriod = (totalMins) => {
  if (totalMins < 100) {
    return 0;
  }
  if (totalMins >= 100 && totalMins < 240) {
    return 1;
  }
  if (totalMins >= 240 && totalMins < 345) {
    return 2;
  }
  if (totalMins >= 345 && totalMins < 450) {
    return 3;
  }
  if (totalMins >= 450 && totalMins < 555) {
    return 4;
  }
  if (totalMins >= 555 && totalMins < 660) {
    return 5;
  }
  if (totalMins >= 660 && totalMins <= 765) {
    return 6;
  }
  if (totalMins > 765) return -1;
};

const RoomType = styled(Badge)`
  font-size: 1em;
  font-weight: 500;
  margin: 1px 3px 1px 3px;
  background-color: #e53935;
  border-radius: 6px;
`;
const RoomEmpt = styled(Badge)`
  font-size: 1em;
  font-weight: 500;
  margin: 1px 3px 1px 3px;
  background-color: #71ce74;
  border-radius: 6px;
`;

interface PropsType {
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RoomFinder = (): JSX.Element => {
  const { t } = useTranslation();
  const [date, setDate] = useState<Date>(new Date());
  const onDatetimeChange = (date: Date): void => setDate(date || new Date());
  const clearDatetime = (): void => setDate(new Date());
  const day = date.getDay() > 0 ? date.getDay() - 1 : 6;
  const totalMins = (date.getHours() - 9) * 60 + date.getMinutes();
  const per = findPeriod(totalMins);
  const mon = date.getMonth();
  const dai = date.getDate();
  const quarter = findQuar(mon, dai);

  return (
    <React.Fragment>
      <Helmet>
        <title>WasedaTime - RoomFinder</title>
        <meta
          name="description"
          content="Empty Room Checking in the campuses of Waseda University."
        />
        <meta property="og:title" content="WasedaTime - RoomFinder" />
        <meta
          property="og:description"
          content="Empty Room Checking in the campuses of Waseda University."
        />
        <meta property="og:site_name" content="WasedaTime - RoomFinder" />
      </Helmet>

      <InfoWrapper>
        <h1
          style={{
            paddingLeft: "10px",
            marginBottom: "20px",
          }}
          className="text-light-text1 dark:text-dark-text1 border-l-4 border-solid border-light-main dark:border-dark-main"
        >
          {t("roomFinder.title")}
        </h1>
        <p className="text-light-text2 dark:text-dark-text2">
          <FontAwesomeIcon icon={faSearch} size="1x" />{" "}
          {t("roomFinder.subtitle")}：
          <RoomType className="text-light-bgMain dark:text-dark-bgSide">
            {t("roomFinder.Occupied")}
          </RoomType>
          <RoomEmpt className="text-light-bgMain dark:text-dark-bgSide">
            {t("roomFinder.Available")}
          </RoomEmpt>
        </p>
        <p className="text-light-text2 dark:text-dark-text2">
          {t("roomFinder.note")}
        </p>
        <DatetimeSelection className="bg-light-bgSide dark:bg-dark-bgSide">
          <DatePickerSpan className="bg-light-bgSide dark:bg-dark-bgSide">
            <DatePicker
              selected={date}
              onChange={(d: Date) => onDatetimeChange(d)}
              dateFormat="yyyy-MM-dd"
              customInput={<DateSelectorWrapper />}
              popperPlacement="bottom-start"
            />
          </DatePickerSpan>
          <DatePickerSpan className="bg-light-bgSide dark:bg-dark-bgSide">
            <DatePicker
              selected={date}
              onChange={(d: Date) => onDatetimeChange(d)}
              showTimeSelect
              showTimeSelectOnly
              injectTimes={[
                new Date().setHours(9, 0),
                new Date().setHours(10, 30),
                new Date().setHours(10, 40),
                new Date().setHours(12, 10),
                new Date().setHours(13, 0),
                new Date().setHours(14, 30),
                new Date().setHours(14, 45),
                new Date().setHours(16, 15),
                new Date().setHours(16, 30),
                new Date().setHours(18, 0),
                new Date().setHours(18, 15),
                new Date().setHours(19, 45),
                new Date().setHours(20, 0),
                new Date().setHours(21, 30),
              ]}
              minTime={new Date().setHours(9, 0)}
              maxTime={new Date().setHours(21, 30)}
              timeIntervals={750}
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
        <div className="tabbable full-width-tabs">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="Waseda" title={t("roomFinder.campus.Waseda")}>
              <Building
                campusName="Waseda"
                quar={quarter}
                weekday={day}
                period={per}
              />
            </Tab>
            <Tab
              eventKey="Nishi-Waseda"
              title={t("roomFinder.campus.NishiWaseda")}
            >
              <Building
                campusName="NishiWaseda"
                quar={quarter}
                weekday={day}
                period={per}
              />
            </Tab>
            <Tab eventKey="Toyama" title={t("roomFinder.campus.Toyama")}>
              <Building
                campusName="Toyama"
                quar={quarter}
                weekday={day}
                period={per}
              />
            </Tab>
            <Tab
              eventKey="Tokorozawa"
              title={t("roomFinder.campus.Tokorozawa")}
            >
              <Building
                campusName="Tokorozawa"
                quar={quarter}
                weekday={day}
                period={per}
              />
            </Tab>
          </Tabs>
        </div>
      </InfoWrapper>
    </React.Fragment>
  );
};

export default RoomFinder;
