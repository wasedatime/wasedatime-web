import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import { Navbar, Nav, Form, FormControl, Button, Accordion, Card, Badge } from 'react-bootstrap';
import { campuses } from '../constants/campus_quart';

const InfoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 1em 0px;
  ${media.tablet`padding: 5em;`}
`;

const RoomType = styled(Badge)<RoomProps>`
  font-size: 1.2em;
  font-weight: 500;
  margin: 5px 10px;
  border-radius: 6px;
  color: #fff;
  background-color: ${props => props.vacancy ? "#71CE74" : "#E53935"};
`;

interface RoomProps {
    vacancy: number;
  }  

const RoomAcc = styled(Accordion)`
  padding: 0px;
`;
const RoomCar = styled(Card.Header)`
  padding: 0px !important;
  text-align: center;
  width: 100%;
  cursor: pointer;
`;

interface Props {
    CampusName: String;
}


const Building = ({
    campusName,
    quar,
    weekday,
    period
  }) => {
    var vacancy = 1;
    function check_vacancy(campuses, campusName, buid, roomdata, quar, period, weekday) {
      try {
        vacancy= campuses[campusName][buid][roomdata][quar][period][weekday] ? 1 : 0
        return vacancy
      }
      catch(err) {
        alert(err)
      }             
    };
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <InfoWrapper>
                {
                    Object.keys(campuses[campusName]).map((buid, i) => 
                        <RoomAcc key={i}>
                            <Card>
                            <RoomCar>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                {t("roomFinder.building prefix")}{buid}{t("roomFinder.building suffix")}
                                </Accordion.Toggle>
                            </RoomCar>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    {
                                        Object.keys(campuses[campusName][buid]).map((roomdata, j) => <RoomType key={j} vacancy={check_vacancy(campuses, campusName, buid, roomdata, quar, period, weekday)} >{t("roomFinder.room prefix")}{roomdata}{t("roomFinder.room suffix")}</RoomType>)
                                    }
                                </Card.Body>
                            </Accordion.Collapse>
                            </Card>
                    </RoomAcc>
                         )
                }  
            </InfoWrapper>
            
        </React.Fragment>
    );
    
};

export default Building;