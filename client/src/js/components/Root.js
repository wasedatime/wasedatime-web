import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './App';

// A invisible component that sends a GA pageview every time
// the pathname of the user is changed.
// Written by @dandalf and improved by @ianarundale. I removed
// props.location.search since query string has not been implemented.
// Reference: https://github.com/react-ga/react-ga/issues/122
class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.sendPageChange(props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.sendPageChange(nextProps.location.pathname);
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
  let analyticsRoute = null;
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('UA-112185819-1', { debug: false });
    analyticsRoute = <Route path="/" component={Analytics} />;
  }
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
