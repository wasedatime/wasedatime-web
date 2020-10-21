import React from "react";
import { Helmet } from "react-helmet";
import { Wrapper } from "../styled-components/Wrapper";
import { Grid, Statistic, Divider, Header } from "semantic-ui-react";
import axios from "axios";

class CoronaInfo extends React.Component {
  state = {
    tokyoData: {},
    regionData: {}
  }

  async componentDidMount () {
    const tokyoData = await this.getTokyoInfo();
    const regionData = await this.getRegionInfo("JPN");
    this.setState({ tokyoData, regionData });
  }

  formatDate (date) {
    date.setDate(date.getDate() - 1);
    var year = date.getFullYear(),
        day = '' + date.getDate(),
        month = '' + (date.getMonth() + 1);

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  async getTokyoInfo () {
    var date = new Date();
    try {
      var res = await axios.get(
        // "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/10-17-2020.csv"
        `https://covid-api.com/api/reports?date=${this.formatDate(date)}&iso=JPN&region_province=Tokyo`
      );
      if (res.data.data.length === 0) {
        date.setDate(date.getDate() - 1);
        res = await axios.get(
          `https://covid-api.com/api/reports?date=${this.formatDate(date)}&iso=JPN&region_province=Tokyo`
        )
      }

      return res.data.data[0];
    } catch (e) {
      console.error(e);
    }
  }

  async getRegionInfo (iso) {
    var date = new Date();
    try {
      var res = await axios.get(
        `https://covid-api.com/api/reports?date=${this.formatDate(date)}&iso=${iso}`
      );
      if (res.data.data.length === 0) {
        date.setDate(date.getDate() - 1);
        res = await axios.get(
          `https://covid-api.com/api/reports?date=${this.formatDate(date)}&iso=${iso}`
        )
      }

      var regionData = {
        "confirmed_diff": 0,
        "confirmed": 0,
        "deaths_diff": 0,
        "deaths": 0,
        "recovered_diff": 0,
        "recovered": 0,
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

  render () {
    const { tokyoData, regionData } = this.state;
    return (
      <Wrapper>
        <Helmet>
          <title>WasedaTime - Corona Info</title>
          <meta
            name="description"
            content="Information about Coronavirus."
            />
          <meta property="og:title" content="WasedaTime - Corona Info" />
          <meta
            property="og:description"
            content="Information about Coronavirus."
            />
          <meta property="og:site_name" content="WasedaTime - Corona Info" />
        </Helmet>

        {/* <Line data={data} options={options} /> */}
        <Grid columns={2} style={{ padding: "10vw 20vw", textAlign: "center" }}>
          <Grid.Row>
            <Grid.Column>
              <Header size='huge'>Tokyo</Header>
              <Statistic size="huge">
                <Statistic.Value>{tokyoData["confirmed_diff"]}</Statistic.Value>
                <Statistic.Label>New Cases</Statistic.Label>
              </Statistic>
              <Statistic size="huge">
                <Statistic.Value>{tokyoData["confirmed"]}</Statistic.Value>
                <Statistic.Label>Total Cases</Statistic.Label>
              </Statistic>
              <Divider />
              <Statistic size="huge">
                <Statistic.Value>{tokyoData["deaths_diff"]}</Statistic.Value>
                <Statistic.Label>New Deaths</Statistic.Label>
              </Statistic>
              <Statistic size="huge">
                <Statistic.Value>{tokyoData["deaths"]}</Statistic.Value>
                <Statistic.Label>Total Deaths</Statistic.Label>
              </Statistic>
              <Divider />
              <Statistic size="huge">
                <Statistic.Value>{tokyoData["recovered_diff"]}</Statistic.Value>
                <Statistic.Label>New Recovered</Statistic.Label>
              </Statistic>
              <Statistic size="huge">
                <Statistic.Value>{tokyoData["recovered"]}</Statistic.Value>
                <Statistic.Label>Total Recovered</Statistic.Label>
              </Statistic>
            </Grid.Column>

            <Grid.Column>
              <Header size='huge'>Japan</Header>
              <Statistic size="huge">
                <Statistic.Value>{regionData["confirmed_diff"]}</Statistic.Value>
                <Statistic.Label>New Cases</Statistic.Label>
              </Statistic>
              <Statistic size="huge">
                <Statistic.Value>{regionData["confirmed"]}</Statistic.Value>
                <Statistic.Label>Total Cases</Statistic.Label>
              </Statistic>
              <Divider />
              <Statistic size="huge">
                <Statistic.Value>{regionData["deaths_diff"]}</Statistic.Value>
                <Statistic.Label>New Deaths</Statistic.Label>
              </Statistic>
              <Statistic size="huge">
                <Statistic.Value>{regionData["deaths"]}</Statistic.Value>
                <Statistic.Label>Total Deaths</Statistic.Label>
              </Statistic>
              <Divider />
              <Statistic size="huge">
                <Statistic.Value>{regionData["recovered_diff"]}</Statistic.Value>
                <Statistic.Label>New Recovered</Statistic.Label>
              </Statistic>
              <Statistic size="huge">
                <Statistic.Value>{regionData["recovered"]}</Statistic.Value>
                <Statistic.Label>Total Recovered</Statistic.Label>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Wrapper>
    );
  }
}

export default CoronaInfo;
