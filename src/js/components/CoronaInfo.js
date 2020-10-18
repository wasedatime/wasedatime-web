import React from "react";
import { Line } from 'react-chartjs-2';
import { Helmet } from "react-helmet";
import { Wrapper } from "../styled-components/Wrapper";
import { Overlay } from "../styled-components/Overlay";
import styled from "styled-components";
import { media } from "../styled-components/utils";

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

const CoronaInfo = () => {
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
};

export default CoronaInfo;
