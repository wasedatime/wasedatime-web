import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import RoomFinder from './RoomFinder';
import Footer from './Footer';
import ComingSoon from './ComingSoon';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/timetable" component={ComingSoon} />
          <Route path="/roomfinder" component={RoomFinder} />
          <Route path="/bus" component={ComingSoon} />
          <Route component={Home} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
