import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import TermsOfService from "./singlePages/TermsOfService";
import PrivacyPolicy from "./singlePages/PrivacyPolicy";

const App = () => (
  <Switch>
    <Route exact path="/terms-of-service" component={TermsOfService} />
    <Route exact path="/privacy-policy" component={PrivacyPolicy} />
  </Switch>
);

export default withRouter(App);
