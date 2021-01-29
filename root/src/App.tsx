import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PrivacyPolicy from "./singlePages/PrivacyPolicy";

const App = () => (
  <Switch>
    <Route exact path="/privacy-policy" component={PrivacyPolicy} />
  </Switch>
);

export default withRouter(App);
