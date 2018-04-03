import React from 'react';
import styled from 'styled-components';

import { media } from '../utils/styledComponents';
import { Wrapper } from '../styled-components/Wrapper';
import { Overlay } from '../styled-components/Overlay';
import busSchedule from '../data/busSchedule.json';

const wasedaNishiwasedaBusUri =
  'https://www.waseda.jp/fsci/assets/uploads/2018/03/2018waseda-nishiwaseda-shuttle-bus-timetable.pdf';

const ExtendedOverlay = Overlay.extend`
  align-items: center;
  padding: 0 25px;
`;

const InfoWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top:
`;

const StyledAnchor = styled('a')`
  margin: 1.5rem 0px;
  font-size: 1.8rem;
  font-weight: 330;
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
  margin:1.5rem 0px;
`

const StyledSubHeading = styled('h2')`
  align-self: flex-start;
  margin-top: 0px;
  margin-bottom: 1rem;
  border: 3px solid rgb(148, 27, 47);
  border-radius: 5px;
  background: rgb(148, 27, 47);
  font-size: 2.2rem;
  font-weight: 100;
  color: #ffffff;
  ${media.phone`font-size: 2rem;`};
`;

const Status = styled('div')`
  font-size: 1.8rem;
`;

const convertTotalMinutesToTimeString = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes - hours * 60;
  // TODO duplicated code from ClassroomList
  const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  return `${hoursString}:${minutesString}`;
};

const binarySearch = (totalMinutes, schedule, start, end) => {
  let ans = 0, index = 0;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (schedule[mid] === totalMinutes) {
      ans = schedule[mid];
      index = mid;
      break;
    } else if (schedule[mid] > totalMinutes) {
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
    // Return value -1 if totalMinutes is larger than all bus schedule values,
    // meaning no service.
    return index >= schedule.length ? -1: schedule[index];
  }
}

const getBusStatus = (now) => {
  // TODO get date from server.
  const day = now.getDay();
  let wasedaStatus = "Out of service";
  let nishiStatus = "Out of service";
  // No buses on Sunday.
  if (day === 0) return {wasedaStatus, nishiStatus};
  const dayType = day === 6 ? "saturday" : "weekday";
  const totalMinutes = now.getHours() * 60 + now.getMinutes();
  const wasedaSchedule = busSchedule[dayType].fromWasedaToNishiWaseda.occurrences;
  const nishiSchedule = busSchedule[dayType].fromNishiWasedaToWaseda.occurrences;
  const wasedaNextTotalMinutes = binarySearch(totalMinutes, wasedaSchedule, 0, wasedaSchedule.length - 1)
  const nishiNextTotalMinutes = binarySearch(totalMinutes, nishiSchedule, 0, nishiSchedule.length - 1)
  // If there is there exists a subsequent bus schedule on the same day
  if (wasedaNextTotalMinutes !== -1) {
    const wasedaNextTimeString = convertTotalMinutesToTimeString(wasedaNextTotalMinutes);
    wasedaStatus = {"departIn": wasedaNextTotalMinutes - totalMinutes, "timeString": wasedaNextTimeString};
  }
  // If there is there exists a subsequent bus schedule on the same day
  if (nishiNextTotalMinutes !== -1) {
    const nishiNextTimeString = convertTotalMinutesToTimeString(nishiNextTotalMinutes);
    nishiStatus = {"departIn": nishiNextTotalMinutes - totalMinutes, "timeString": nishiNextTimeString};
  }
  return {wasedaStatus, nishiStatus}
}

const Bus = () => {
  const now = new Date();
  const {wasedaStatus, nishiStatus} = getBusStatus(now);
  const wasedaStatusComponent = typeof wasedaStatus === 'object'
    ? <span>Departs in <b>{wasedaStatus.departIn}</b> mins{' '}
      <i className="fas fa-clock fa-1x"></i> <b>{wasedaStatus.timeString}</b></span>
    : <span>{wasedaStatus}</span>
  const nishiStatusComponent = typeof nishiStatus === 'object'
    ? <span>Departs in <b>{nishiStatus.departIn}</b> mins{' '}
      <i className="fas fa-clock fa-1x"></i> <b>{nishiStatus.timeString}</b></span>
    : <span>{nishiStatus}</span>
  return (
    <Wrapper>
      <ExtendedOverlay>
        <InfoWrapper>
          <StyledHeading>Bus Status</StyledHeading>
          <BusStatus>
            <StyledSubHeading>Waseda <i className="fas fa-angle-double-right fa-1x"></i> NishiWaseda</StyledSubHeading>
            <Status>{wasedaStatusComponent}</Status>
          </BusStatus>
          <BusStatus>
            <StyledSubHeading>NishiWaseda <i className="fas fa-angle-double-right fa-1x"></i> Waseda</StyledSubHeading>
            <Status>{nishiStatusComponent}</Status>
          </BusStatus>
          <StyledHeading>Official Link</StyledHeading>
          <StyledAnchor href={wasedaNishiwasedaBusUri} target="_blank">
            The Latest Waseda-Nishiwaseda Bus Schedule
          </StyledAnchor>
        </InfoWrapper>
      </ExtendedOverlay>
    </Wrapper>
  );
};

export default Bus;
