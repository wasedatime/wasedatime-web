import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import RoomFinder from './RoomFinder';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/roomfinder" component={RoomFinder} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
