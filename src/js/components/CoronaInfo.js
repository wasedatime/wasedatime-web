import React from "react";
import { Line } from 'react-chartjs-2';
import { Helmet } from "react-helmet";
import { Wrapper } from "../styled-components/Wrapper";
import { Overlay } from "../styled-components/Overlay";
import styled from "styled-components";
import { media } from "../styled-components/utils";
import axios from "axios";

const ExtendedOverlay = styled(Overlay)`
  align-items: center;
  background-color: #fff;
  padding: 0 20vw;
  color: #666;
  ${media.phone`padding: 0 10vw;`};
`;

const data = {
  labels: ['10/11', '10/12', '10/13', '10/14', '10/15', '10/16', '10/17'],
  datasets: [
    {
      label: 'Infected',
      fill: true,
      lineTension: 0,
      backgroundColor: 'rgba(100,150,150,0.3)',
      borderColor: 'rgb(100,150,150)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgb(100,200,200)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgb(100,220,220)',
      pointHoverBorderColor: 'rgb(100,220,220)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [200, 100, 150, 100, 250, 300, 200]
    }
  ]
};

const options = {
  scales: {
    yAxes: [{
      ticks: {
          min: 0
      }
    }]
  }
}

class CoronaInfo extends React.Component {
  async componentDidMount () {
    const csvData = await this.getInfo();
    const rows = csvData.split(/\r\n|\n/);
    const headers = rows[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
    const usedHeaders = ["Active", "Confirmed", "Country_Region", "Deaths", "Last_Update", "Province_State", "Recovered"];

    const list = [];
    for (let i = 1; i < rows.length; i++) {
      const columns = rows[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if (headers && columns.length == headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          if (headers[j] && usedHeaders.includes(headers[j])) {
            let d = columns[j];
            if (d.length > 0) {
              if (d[0] === '"') d = d.substring(1, d.length - 1);
              if (d[d.length - 1] === '"') d = d.substring(d.length - 2, 1);
            }
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter(x => x).length > 0) {
          list.push(obj);
        }
      }
    }

    var listByCountry = {};
    var listTokyo = {};

    for (let i = 0; i < list.length; i++) {
      if (listByCountry[list[i]["Country_Region"]]) {
        listByCountry[list[i]["Country_Region"]]["Confirmed"] += parseInt(list[i]["Confirmed"]);
        listByCountry[list[i]["Country_Region"]]["Active"] += parseInt(list[i]["Active"]);
        listByCountry[list[i]["Country_Region"]]["Recovered"] += parseInt(list[i]["Recovered"]);
        listByCountry[list[i]["Country_Region"]]["Deaths"] += parseInt(list[i]["Deaths"]);
      } else {
        listByCountry[list[i]["Country_Region"]] = {
          "Confirmed": 0,
          "Active": 0,
          "Recovered": 0,
          "Deaths": 0,
        };
      }
      if (list[i]["Province_State"] === "Tokyo") {
        listTokyo = {
          "Confirmed": parseInt(list[i]["Confirmed"]),
          "Active": parseInt(list[i]["Active"]),
          "Recovered": parseInt(list[i]["Recovered"]),
          "Deaths": parseInt(list[i]["Deaths"]),
        };
      }
    }

    console.log(list);
    console.log(listByCountry);
    console.log(listTokyo);
  }

  async getInfo () {
    try {
      const res = await axios.get(
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/10-17-2020.csv"
      );
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }

  render () {
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

        <ExtendedOverlay>
          <Line data={data} options={options} />
        </ExtendedOverlay>
      </Wrapper>
    );
  }
}

export default CoronaInfo;
