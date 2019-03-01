import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faAngleDoubleRight,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { withNamespaces } from 'react-i18next';

import ModalContainer from '../containers/ModalContainer';
// TODO use react-modal
// import Modal from './Modal';
import { media } from '../styled-components/utils';
import { Wrapper } from '../styled-components/Wrapper';
import { Overlay } from '../styled-components/Overlay';
import busSchedule from '../data/busSchedule.json';
import safariExport from '../../img/safari-export.svg';
import a2hsChrome from '../../img/bus_a2hs_chrome.png';
import a2hsSafari from '../../img/bus_a2hs_safari.png';

const wasedaNishiwasedaBusUri =
  'https://www.waseda.jp/fsci/assets/uploads/2018/03/2018waseda-nishiwaseda-shuttle-bus-timetable.pdf';

const ExtendedOverlay = styled(Overlay)`
  align-items: center;
  padding: 0 25px;
`;

const InfoWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: ;
`;

const StyledAnchor = styled('a')`
  margin: 1.5rem 0px;
  font-size: 1.8rem;
  font-weight: 400;
  text-decoration: underline;
`;

const StyledHeading = styled('h1')`
  margin: 2rem 0px 0px 0px;
  font-family: Times;
  font-size: 4rem;
  font-weight: 400;
  color: #000000;
  ${media.phone`font-size: 3.6rem;`};
`;

const BusStatus = styled('article')`
  margin: 1.5rem 0px;
`;

const StyledSubHeading = styled('h2')`
  align-self: flex-start;
  margin-top: 0px;
  margin-bottom: 1rem;
  border: 3px solid rgb(148, 27, 47);
  border-width: 3px 6px;
  border-radius: 5px;
  background: rgb(148, 27, 47);
  font-size: 2.5rem;
  font-weight: 300;
  color: #ffffff;
  ${media.phone`font-size: 2rem;`};
`;

const Status = styled('section')`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Remark = styled('section')`
  font-size: 1.5rem;
`;

const ModalImage = styled('img')`
  width: 270px;
  ${media.phone`width: 100%;`};
`;

const ModalArticle = styled('article')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalHeading = styled('h3')`
  font-size: 2.2rem;
  margin: 0px;
`;

const ModalSection = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
`;

const binarySearch = (value, arr) => {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) {
      return true;
    } else if (arr[mid] > value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
};

const getSchduleType = (month, date, day) => {
  const monthString = month.toString();
  const {
    outOfService,
    weekdaySchedule,
    saturdaySchedule,
    specialSchedule
  } = busSchedule['exceptions'];

  if (
    monthString in outOfService &&
    binarySearch(date, outOfService[monthString])
  ) {
    return 'no';
  } else if (
    monthString in weekdaySchedule &&
    binarySearch(date, weekdaySchedule[monthString])
  ) {
    return 'weekday';
  } else if (
    monthString in saturdaySchedule &&
    binarySearch(date, saturdaySchedule[monthString])
  ) {
    return 'saturday';
  } else if (
    monthString in specialSchedule &&
    binarySearch(date, specialSchedule[monthString])
  ) {
    return 'special';
  } else {
    if (day === 0) {
      return 'no';
    } else if (day === 6) {
      return 'saturday';
    } else {
      return 'weekday';
    }
  }
};

const binarySearchSchedule = (totalMins, schedule) => {
  let start = 0,
    end = schedule.length - 1;
  let ans = 0,
    index = 0;
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
  } else {
    // Return value -1 if totalMins is larger than all bus schedule values,
    // meaning no service.
    return index >= schedule.length ? -1 : schedule[index];
  }
};

const totalMinsToTimeStr = totalMins => {
  const hours = Math.floor(totalMins / 60);
  const minutes = totalMins - hours * 60;
  // TODO duplicated code from ClassroomList
  const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
  const minsString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${hoursString}:${minsString}`;
};

//TODO Fix mixing different return types
const getBusStatus = (totalMins, occurrences, remarks, lng) => {
  const nextTotalMins = binarySearchSchedule(totalMins, occurrences);
  // If there is there exists a subsequent bus schedule on the same day
  if (nextTotalMins !== -1) {
    const remark =
      nextTotalMins in remarks ? remarks[nextTotalMins.toString()] : '';
    const nextTimeString = totalMinsToTimeStr(nextTotalMins);
    return {
      departIn: nextTotalMins - totalMins,
      timeString: nextTimeString,
      remark,
      lng
    };
  }
  if(lng === 'en') {
    return 'Out of service';
  } else if(lng === 'jp'){
    return '利用時間外';
  }
};

const getBusStatuses = ( now, lng, { t } ) => {
  const month = now.getMonth();
  const date = now.getDate();
  const day = now.getDay();
  //assertion language at first
  let wasedaStatus, nishiStatus;
  if(lng === 'en') {
    wasedaStatus = 'Out of service';
    nishiStatus = 'Out of service';
  } else if (lng ==='jp') {
    wasedaStatus = '利用時間外';
    nishiStatus = '利用時間外';
  }
  const scheduleType = getSchduleType(month, date, day);
  // No buses or special schedule
  if (scheduleType === 'no') {
    return { wasedaStatus, nishiStatus };
  } else if (scheduleType === 'special') {
      if (lng === 'en') {
        wasedaStatus = 'Special Schedule';
        nishiStatus = 'Special Schedule';
      }
      else if (lng ==='jp') {
        wasedaStatus = '特別なスケジュール';
        nishiStatus = '特別なスケジュール';
      }
  return { wasedaStatus, nishiStatus };
  }
  // Weekday schedule or Saturday schedule
  const totalMins = now.getHours() * 60 + now.getMinutes();
  const wasedaSchedule = busSchedule[scheduleType].fromWasedaToNishiWaseda;
  const nishiSchedule = busSchedule[scheduleType].fromNishiWasedaToWaseda;
  if (lng === 'en') {
    wasedaStatus = getBusStatus(
      totalMins,
      wasedaSchedule.occurrences,
      wasedaSchedule.remarks_en,
      lng
    );
    nishiStatus = getBusStatus(
      totalMins,
      nishiSchedule.occurrences,
      nishiSchedule.remarks_en,
      lng
    );
  } else if (lng === 'jp') {
    wasedaStatus = getBusStatus(
      totalMins,
      wasedaSchedule.occurrences,
      wasedaSchedule.remarks_jp,
      lng
    );
    nishiStatus = getBusStatus(
      totalMins,
      nishiSchedule.occurrences,
      nishiSchedule.remarks_jp,
      lng
    );
  }
  return { wasedaStatus, nishiStatus };
};

const createStatusComponent = ( status, { t } ) => {

  if (typeof status === 'object') {
    return {
      status: (
        <span>
          {t('bus.Departs in')} <b>{status.departIn}</b> mins&nbsp;
          <FontAwesomeIcon icon={faClock} size="1x" />{' '}
          <b>{status.timeString}</b>
        </span>
      ),
      remark: status.remark
    };
  }
  return {
    status: <span>{status}</span>,
    remark: ''
  };
};

const Bus = ({ t }) => {
  const now = new Date();
  let lng = 'jp'; //test about lauguage
  const { wasedaStatus, nishiStatus } = getBusStatuses(now, lng, { t });
  const wasedaStatusComponent = createStatusComponent(wasedaStatus, lng, { t });
  const nishiStatusComponent = createStatusComponent(nishiStatus, lng, { t });
  return (
    <Wrapper>
      <Helmet>
        <title>WaseTime -　Bus</title>
        <meta
          name="description"
          content="Shuttle Bus Arrival Time Checking at Waseda University."
        />
        <meta property="og:title" content="WaseTime - Bus" />
        <meta
          property="og:description"
          content="Shuttle Bus Arrival Time Checking at Waseda University."
        />
        <meta property="og:site_name" content="WaseTime - Bus" />
      </Helmet>
      <ExtendedOverlay>
        <InfoWrapper>
          <StyledHeading>{t('bus.busStatus')}</StyledHeading>
          <BusStatus>
            <StyledSubHeading>
              {t('bus.Waseda')} <FontAwesomeIcon icon={faAngleDoubleRight} size="1x" />{' '}
              {t('bus.NishiWaseda')}
            </StyledSubHeading>
            <Status>{wasedaStatusComponent.status}</Status>
            <Remark>{wasedaStatusComponent.remark}</Remark>
          </BusStatus>
          <BusStatus>
            <StyledSubHeading>
              {t('bus.NishiWaseda')}{' '}
              <FontAwesomeIcon icon={faAngleDoubleRight} size="1x" /> {t('bus.Waseda')}
            </StyledSubHeading>
            <Status>{nishiStatusComponent.status}</Status>
            <Remark>{nishiStatusComponent.remark}</Remark>
          </BusStatus>
          <ModalContainer
            linkText={t('bus.Add to home screen')}
            text={t('bus.and never miss a bus again!')}
          >
            <ModalArticle>
              <ModalSection>
                <ModalHeading>Android / Chrome:</ModalHeading>
                <p>
                  {t('bus.Tap on the top-right icon')}&nbsp;
                  <FontAwesomeIcon icon={faEllipsisV} size="1x" />
                  &nbsp;{t('bus.and select Add to Home screen')}
                </p>
                <ModalImage
                  src={a2hsChrome}
                  alt="Add to home screen image for Chrome"
                />
              </ModalSection>
              <ModalSection>
                <ModalHeading>IOS / Safari:</ModalHeading>
                <p>
                  {t('bus.Tap on the bottom-middle icon')}&nbsp;
                  <img src={safariExport} alt="Safari export icon" />
                  &nbsp;{t('bus.and select Add to Home screen')}
                </p>
                <ModalImage
                  src={a2hsSafari}
                  alt="Add to home screen image for Safari"
                />
              </ModalSection>
            </ModalArticle>
          </ModalContainer>
          <StyledHeading>{t('bus.Official Link')}</StyledHeading>
          <StyledAnchor href={wasedaNishiwasedaBusUri} target="_blank">
            {t('bus.The Latest Waseda-NishiWaseda Bus Schedule')}
          </StyledAnchor>
        </InfoWrapper>
      </ExtendedOverlay>
    </Wrapper>
  );
};

export default withNamespaces('translation')(Bus);
