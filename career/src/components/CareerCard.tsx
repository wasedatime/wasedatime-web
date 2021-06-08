import React, { useState, useEffect } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface Props extends WithTranslation {
  careerInformation: any;
}

const CareerCard = ({ careerInformation, t }: Props) => {
  const [browserWidth, setBrowserWidth] = useState(document.body.clientWidth);
  const [showElem, setShowElem] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleBrowserWidth);
    return () => {
      window.removeEventListener("resize", handleBrowserWidth);
    };
  }, [browserWidth]);

  const handleBrowserWidth = () => {
    setBrowserWidth(document.body.clientWidth);
  };

  return (
    <div className="ui segment">
      <div
        className={
          document.body.clientWidth > 600
            ? "company-image-large-width"
            : "company-image-short-width"
        }
      >
        <img
          alt="company"
          src="https://static.careerbaito.com/picture/corporation/2796/708_472/ZpKQ0P4d.jpg"
        />
      </div>
      <div className="company-detail">
        <div className="ui list">
          <h3 style={{ fontSize: "17px" }}>{careerInformation.title}</h3>

          <div>
            <div className="company detail">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span style={{ fontWeight: "bold", marginRight: "50px" }}>
                        {t("career.corporation")}
                      </span>
                    </td>
                    <td className="company name">
                      <span>{careerInformation.corporation}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style={{ fontWeight: "bold" }}>
                        {t("career.industry.label")}
                      </span>
                    </td>
                    <td className="company industry">
                      <span>{t("career.industry." + careerInformation.industry)}</span>
                    </td>
                  </tr>
                  {/* <tr>
                    <td>
                      <span style={{ fontWeight: "bold" }}>
                        {t("career.category.label")}
                      </span>
                    </td>
                    <td className="category">
                      <span>{careerInformation.category}</span>
                    </td>
                  </tr> */}
                  <tr>
                    <td>
                      <span style={{ fontWeight: "bold" }}>
                        {t("career.language.label")}
                      </span>
                    </td>
                    <td className="language">
                      <span>{t("career.language." + careerInformation.language)}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style={{ fontWeight: "bold" }}>
                        {t("career.requirement")}
                      </span>
                    </td>
                    <td className="requirement">
                      <span>{careerInformation.requirement}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style={{ fontWeight: "bold" }}>
                        {t("career.deadline")}
                      </span>
                    </td>
                    <td className="deadline">
                      <span>{(new Date(Date.parse(careerInformation.deadline))).toLocaleString('ja-JP')}</span>
                    </td>
                  </tr>
                  {
                    careerInformation.category !== "information_section" && (
                      <tr>
                        <td>
                          <span style={{ fontWeight: "bold" }}>
                            {t("career.salary.label")}
                          </span>
                        </td>
                        <td className="salary">
                          <span>{t("career.salary." + careerInformation.salary)}</span>
                        </td>
                      </tr>
                    )
                  }
                  {
                    careerInformation.category !== "information_section" && (
                      <tr>
                        <td>
                          <span style={{ fontWeight: "bold" }}>
                            {t("career.shift.label")}
                          </span>
                        </td>
                        <td className="shift">
                          <span>{t("career.shift." + careerInformation.shift)}</span>
                        </td>
                      </tr>
                    )
                  }
                  <tr>
                    <td>
                      <span style={{ fontWeight: "bold" }}>
                        {t("career.location")}
                      </span>
                    </td>
                    <td className="location">
                      <span>{careerInformation.location}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              {showElem ? (
                <div>
                  <span
                    style={{
                      fontWeight: "bold",
                      marginRight: "50px",
                    }}
                  >
                    {t("career.description")}
                  </span>
                  <p style={{ display: "inline" }}>
                    {careerInformation.description}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="ui section divider"></div>
      <div className="job-button">
        <button
          onClick={() => {
            setShowElem(!showElem);
          }}
          className="ui primary button"
          style={{ fontSize: "12px" }}
        >
          {showElem ? t("career.Hide") : t("career.viewMore")}
        </button>
        <button
          onClick={() => window.open(careerInformation.url)}
          className="ui primary button"
          style={{ fontSize: "12px" }}
        >
          {t("career.Entry")}
        </button>
      </div>
    </div>
  );
};

export default withTranslation("translation")(CareerCard);
