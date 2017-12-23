import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import RoomFinder from './RoomFinder';

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/roomfinder" component={RoomFinder} />
    </div>
  );
};

export default App;
