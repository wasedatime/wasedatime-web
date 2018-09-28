import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Alert from 'react-s-alert';
import styled, { ThemeProvider } from 'styled-components';

import { normalTheme } from '../styled-components/theme';
import 'react-s-alert/dist/s-alert-default.css';
import '../../styles/s-alert-custom.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';

import Header from './Header';
import About from './About';
import TimetableContainer from '../containers/timetable/TimetableContainer';
import Syllabus from './syllabus/Syllabus';
import RoomFinder from './RoomFinder';
import FooterContainer from '../containers/FooterContainer';
import Bus from './Bus';
import NotFound from './NotFound';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: ${props => props.theme.headerHeight};
`;

const StyledMain = styled('main')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100%;
  min-height: calc(100vh - ${props => props.theme.headerHeight});
`;

const App = () => {
  return (
    <ThemeProvider theme={normalTheme}>
      <Wrapper>
        <Header />
        <StyledMain>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/timetable" />} />
            <Route
              exact
              path="/index.html"
              render={() => <Redirect to="/timetable" />}
            />
            <Route path="/about" component={About} />
            <Route path="/timetable" component={TimetableContainer} />
            <Route path="/syllabus" component={Syllabus} />
            <Route path="/roomfinder" component={RoomFinder} />
            <Route path="/bus" component={Bus} />
            <Route component={NotFound} />
          </Switch>
        </StyledMain>
        <FooterContainer />
        <Alert stack={{ limit: 1 }} timeout={3000} />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
