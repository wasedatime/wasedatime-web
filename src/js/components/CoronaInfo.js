import React from "react";
import styled from "styled-components";
import { media } from "../styled-components/utils";
import { Helmet } from "react-helmet";
import { Wrapper } from "../styled-components/Wrapper";
import { Grid, Statistic, Divider, Header, Dropdown } from "semantic-ui-react";
import { withNamespaces } from "react-i18next";
import axios from "axios";
import countries from "i18n-iso-countries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faSpinner } from "@fortawesome/free-solid-svg-icons";

const StatisticsGroupWrapper = styled("div")`
  padding: 5em 15em;
  text-align: center;
  ${media.desktop`padding: 2em;`};
`;

const StatisticsWrapper = styled("div")`
  ${media.desktop`padding-bottom: 3em;`};
`;

const CoronaInfoStatistics = ({ statisticData, t }) => {
  if (statisticData === undefined)
    return <Header size="huge">{t("No Data")}</Header>;
  else if (typeof statisticData === "object") {
    if (Object.keys(statisticData).length > 0) {
      return (
        <React.Fragment>
          <p>
            <FontAwesomeIcon icon={faCalendarAlt} size="1x" />{" "}
            {statisticData["date"]}
          </p>
          <Statistic size="huge" color="blue">
            <Statistic.Value>{statisticData["confirmed_diff"]}</Statistic.Value>
            <Statistic.Label>{t("coronaInfo.New Cases")}</Statistic.Label>
          </Statistic>
          <Statistic size="huge" color="blue">
            <Statistic.Value>{statisticData["confirmed"]}</Statistic.Value>
            <Statistic.Label>{t("coronaInfo.Total Cases")}</Statistic.Label>
          </Statistic>
          <Divider />
          <Statistic size="huge" color="red">
            <Statistic.Value>{statisticData["deaths_diff"]}</Statistic.Value>
            <Statistic.Label>{t("coronaInfo.New Deaths")}</Statistic.Label>
          </Statistic>
          <Statistic size="huge" color="red">
            <Statistic.Value>{statisticData["deaths"]}</Statistic.Value>
            <Statistic.Label>{t("coronaInfo.Total Deaths")}</Statistic.Label>
          </Statistic>
          <Divider />
          <Statistic size="huge" color="green">
            <Statistic.Value>{statisticData["recovered_diff"]}</Statistic.Value>
            <Statistic.Label>{t("coronaInfo.New Recovered")}</Statistic.Label>
          </Statistic>
          <Statistic size="huge" color="green">
            <Statistic.Value>{statisticData["recovered"]}</Statistic.Value>
            <Statistic.Label>{t("coronaInfo.Total Recovered")}</Statistic.Label>
          </Statistic>
        </React.Fragment>
      );
    } else {
      return (
        <div style={{ marginTop: "2em" }}>
          <FontAwesomeIcon icon={faSpinner} size="5x" />
          <Header size="big">{t("coronaInfo.Loading Statistics")}...</Header>
        </div>
      );
    }
  }
};

class CoronaInfo extends React.Component {
  state = {
    tokyoData: {},
    regionData: {},
  };

  async componentDidMount() {
    const tokyoData = await this.getTokyoInfo();
    const regionData = await this.getRegionInfo("JPN");
    this.setState({ tokyoData, regionData });
  }

  getCountryOptions() {
    countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
    countries.registerLocale(require("i18n-iso-countries/langs/ja.json"));
    const countryNames = countries.getNames(
      this.props.lng === "jp" ? "ja" : this.props.lng
    );
    const countryOptions = Object.keys(countryNames).map((iso2) => {
      const iso3 = countries.alpha2ToAlpha3(iso2);
      return {
        key: iso3,
        text: countryNames[iso2],
        value: iso3,
      };
    });
    return countryOptions;
  }

  selectCountry = async (event, data) => {
    const selectedRegionData = await this.getRegionInfo(data.value);
    this.setState({ regionData: selectedRegionData });
  };

  formatDate(date) {
    date.setDate(date.getDate() - 1);
    var year = date.getFullYear(),
      day = "" + date.getDate(),
      month = "" + (date.getMonth() + 1);

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  async getTokyoInfo() {
    var date = new Date();
    try {
      var res = await axios.get(
        // "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/10-17-2020.csv"
        `https://covid-api.com/api/reports?date=${this.formatDate(
          date
        )}&iso=JPN&region_province=Tokyo`
      );
      if (res.data.data.length === 0) {
        date.setDate(date.getDate() - 1);
        res = await axios.get(
          `https://covid-api.com/api/reports?date=${this.formatDate(
            date
          )}&iso=JPN&region_province=Tokyo`
        );
      }

      return res.data.data[0];
    } catch (e) {
      console.error(e);
    }
  }

  async getRegionInfo(iso) {
    var date = new Date();
    try {
      var res = await axios.get(
        `https://covid-api.com/api/reports?date=${this.formatDate(
          date
        )}&iso=${iso}`
      );
      if (res.data.data.length === 0) {
        date.setDate(date.getDate() - 1);
        res = await axios.get(
          `https://covid-api.com/api/reports?date=${this.formatDate(
            date
          )}&iso=${iso}`
        );
      }

      var regionData = {
        confirmed_diff: 0,
        confirmed: 0,
        deaths_diff: 0,
        deaths: 0,
        recovered_diff: 0,
        recovered: 0,
        date: res.data.data[0]["date"],
      };

      res.data.data.forEach((province) => {
        regionData["confirmed_diff"] += province["confirmed_diff"];
        regionData["confirmed"] += province["confirmed"];
        regionData["deaths_diff"] += province["deaths_diff"];
        regionData["deaths"] += province["deaths"];
        regionData["recovered_diff"] += province["recovered_diff"];
        regionData["recovered"] += province["recovered"];
      });

      return regionData;
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { tokyoData, regionData } = this.state;
    return (
      <Wrapper>
        <Helmet>
          <title>WasedaTime - Corona Info</title>
          <meta name="description" content="Information about Coronavirus." />
          <meta property="og:title" content="WasedaTime - Corona Info" />
          <meta
            property="og:description"
            content="Information about Coronavirus."
          />
          <meta property="og:site_name" content="WasedaTime - Corona Info" />
        </Helmet>

        <Header size="huge" style={{ textAlign: "center", marginTop: "5vw" }}>
          {this.props.t("coronaInfo.title")}
        </Header>

        <StatisticsGroupWrapper>
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column>
                <StatisticsWrapper>
                  <Header size="huge">
                    {this.props.t("coronaInfo.Tokyo")}
                  </Header>
                  <CoronaInfoStatistics
                    statisticData={tokyoData}
                    t={this.props.t}
                  />
                </StatisticsWrapper>
              </Grid.Column>

              <Grid.Column>
                <StatisticsWrapper>
                  <div style={{ marginBottom: "3px" }}>
                    <Dropdown
                      placeholder="Region"
                      search
                      selection
                      options={this.getCountryOptions()}
                      defaultValue={"JPN"}
                      onChange={this.selectCountry}
                    />
                  </div>
                  <CoronaInfoStatistics
                    statisticData={regionData}
                    t={this.props.t}
                  />
                </StatisticsWrapper>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </StatisticsGroupWrapper>
      </Wrapper>
    );
  }
}

export default withNamespaces("translation")(CoronaInfo);
