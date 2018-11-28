import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Alert from "react-s-alert";
import styled, { ThemeProvider } from "styled-components";

class appModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: "",
      firstSchools: "",
      secondSchools: "",
      vasibleState: true
    };
  }
}
