import React from "react"

import { media } from "wasedatime-ui"
import { Accordion, Card } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

import { campuses } from "@app/constants/campus_quart"

const InfoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 1em 0px;
  ${media.tablet`padding: 1em;`}
`

const RoomType = styled("span")<RoomProps>`
  font-weight: 500;
  margin: 5px;
  float: left;
  padding: 0px 10px;
  border-radius: 6px;
  background-color: ${(props) => (props.vacancy ? "#71CE74" : "#E53935")};
`

interface RoomProps {
  vacancy: number
}

const RoomAcc = styled(Accordion)`
  padding: 0px;
`
const RoomCar = styled(Card.Header)`
  padding: 0px !important;
  text-align: center;
  width: 100%;
  cursor: pointer;
`

interface Props {
  CampusName: string
}

function checkVacancy(
  campuses,
  campusName,
  buid,
  roomdata,
  quar,
  period,
  weekday
) {
  let vacancy = 1
  try {
    if (period === -1) return 0
    vacancy = campuses[campusName][buid][roomdata][quar][period][weekday]
      ? 1
      : 0

    return vacancy
  } catch (err) {
    return 0
  }
}

const Building = ({ campusName, quar, weekday, period }) => {
  const { t } = useTranslation()

  return (
    <InfoWrapper>
      {Object.keys(campuses[campusName]).map((buid, i) => (
        <RoomAcc key={i}>
          <Card className="bg-light-card1 hover:bg-light-card2 dark:bg-dark-card1 dark:hover:bg-dark-card2">
            <RoomCar className="text-light-text1 dark:text-dark-text1">
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                {t("roomFinder.building prefix")}
                {buid}
                {t("roomFinder.building suffix")}
              </Accordion.Toggle>
            </RoomCar>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div>
                  {Object.keys(campuses[campusName][buid]).map(
                    (roomdata, j) => (
                      <RoomType
                        className="text-light-bgMain dark:text-dark-bgSide"
                        key={j}
                        vacancy={checkVacancy(
                          campuses,
                          campusName,
                          buid,
                          roomdata,
                          quar,
                          period,
                          weekday
                        )}
                      >
                        {t("roomFinder.room prefix")}
                        {roomdata}
                        {t("roomFinder.room suffix")}
                      </RoomType>
                    )
                  )}
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </RoomAcc>
      ))}
    </InfoWrapper>
  )
}

export default Building
