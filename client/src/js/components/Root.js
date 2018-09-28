import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './App';

// A invisible component that sends a GA pageview every time
// the pathname of the user is changed.
// Written by @dandalf and improved by @ianarundale and @jessepinho. I removed
// props.location.search since query string has not been implemented.
// Reference: https://github.com/react-ga/react-ga/issues/122#issuecomment-353101102
class Analytics extends React.Component {
  componentDidMount() {
    this.sendPageChange(this.props.location.pathname);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.sendPageChange(this.props.location.pathname);
    }
  }

  sendPageChange(pathname) {
    const page = pathname;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }

  render() {
    return null;
  }
}

const Root = ({ store }) => {
  const trackingId =
    process.env.NODE_ENV === 'production' ? 'UA-112185819-1' : 'UA-112185819-3';

  ReactGA.initialize(trackingId, { debug: false });
  const analyticsRoute = <Route path="/" component={Analytics} />;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {analyticsRoute}
          <App />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;

Root.propTypes = {
  store: PropTypes.object.isRequired
};
