import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Alert from 'react-s-alert';
import styled from 'styled-components';

import 'react-s-alert/dist/s-alert-default.css';
import '../../styles/s-alert-custom.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

import Header from './Header';
import Home from './Home';
import Timetable from './timetable/Timetable';
import Syllabus from './syllabus/Syllabus';
import RoomFinder from './RoomFinder';
import FooterContainer from '../containers/FooterContainer';
import Bus from './Bus';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 60px;
`;

const StyledMain = styled('main')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100%;
  min-height: calc(100vh - 60px);
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <StyledMain>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/timetable" component={Timetable} />
          <Route path="/syllabus" component={Syllabus} />
          <Route path="/roomfinder" component={RoomFinder} />
          <Route path="/bus" component={Bus} />
          <Route component={Home} />
        </Switch>
      </StyledMain>
      <FooterContainer />
      <Alert stack={{limit: 2}} timeout={3000} />
    </Wrapper>
  );
};

export default App;
