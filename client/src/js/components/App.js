import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Home from './Home';
import TimeTable from './TimeTable';
import Syllabus from './Syllabus';
import RoomFinder from './RoomFinder';
import FooterContainer from '../containers/FooterContainer';
import Bus from './Bus';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 75px;
`;

const StyledMain = styled('main')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100%;
  min-height: calc(100vh - 75px);
`;

const App = () => {
  return (
    <Wrapper>
      <Header />
      <StyledMain>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/timetable" component={TimeTable} />
          <Route path="/syllabus" component={Syllabus} />
          <Route path="/roomfinder" component={RoomFinder} />
          <Route path="/bus" component={Bus} />
          <Route component={Home} />
        </Switch>
      </StyledMain>
      <FooterContainer />
    </Wrapper>
  );
};

export default App;
