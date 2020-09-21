import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faMapMarkerAlt,
  faYenSign,
  faCalendarWeek,
  faBriefcase,
  faSearchLocation,
} from "@fortawesome/free-solid-svg-icons";
import "./CareerCard.css";

const CareerCard = ({ company }) => {
  const onClick = () => {
    console.log("1");
  };
  return (
    <div className="ui segment" onClick={onClick}>
      <div className="company-image">
        <img
          alt="company"
          src="https://static.careerbaito.com/picture/corporation/2796/708_472/ZpKQ0P4d.jpg"
        />
      </div>
      <div className="company-detail">
        <div className="ui list">
          <h3 style={{ fontSize: "17px" }}>{company.title}</h3>
          <p style={{ marginTop: "20px", marginBottom: "30px" }}>
            {company.description}
          </p>
          <div className="ui section divider"></div>

          <div>
            <div className="company-part1">
              <div className="item">
                <FontAwesomeIcon
                  icon={faBuilding}
                  size="2x"
                  transform="shrink-2"
                />
                {" " + company.company}
              </div>
              <div className="item">
                <FontAwesomeIcon
                  icon={faSearchLocation}
                  size="2x"
                  transform="shrink-2"
                />
                {" " + company.type}
              </div>
              <div className="item">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="2x"
                  transform="shrink-2"
                />
                {" " + company.area}
              </div>
            </div>
            <div className="company-part2">
              <div className="item">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  size="2x"
                  transform="shrink-2"
                />
                {" " + company.category}
              </div>

              <div className="item">
                <FontAwesomeIcon
                  icon={faYenSign}
                  size="2x"
                  transform="shrink-2"
                />
                {" " + company.pay}
              </div>
              <div className="item">
                <FontAwesomeIcon
                  icon={faCalendarWeek}
                  size="2x"
                  transform="shrink-2"
                />
                {" " + company.worktime}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui section divider"></div>
      <div className="job-button">
        <button
          onClick={() => window.open("https://www.doorkel.com/")}
          className="ui primary button"
          style={{ fontSize: "12px" }}
        >
          インターン内容をもっと見る
        </button>
        <button
          onClick={() => window.open("https://www.doorkel.com/")}
          className="ui primary button"
          style={{ fontSize: "12px" }}
        >
          Entry
        </button>
      </div>
    </div>
  );
};

export default CareerCard;
