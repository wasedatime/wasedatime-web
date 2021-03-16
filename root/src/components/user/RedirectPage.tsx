import React from "react";
import { navigate } from "@reach/router";
import { withTranslation, WithTranslation } from "react-i18next";
import styled from "styled-components";

interface Props extends WithTranslation {
  path: string;
}

class RedirectPage extends React.Component<Props> {
  async componentDidMount() {
    if (window.location.search.includes("error_description")) {
      await this.timeout(5000);
      navigate("/");
    }
  }

  timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  render() {
    const { t } = this.props;
    return window.location.search.includes("error_description") ? (
      <div className="mt-20">
        <h1>{t("verify.failed.title")}</h1>
        <br />
        <p>{t("verify.failed.message1")}</p>
        <p>{t("verify.failed.message2")}</p>
        <p>{t("verify.failed.message3")}</p>
      </div>
    ) : (
      <div className="mt-20">
        <h1>{t("verify.success.title")}</h1>
        <br />
        <p>{t("verify.success.message1")}</p>
        <p>{t("verify.success.message2")}</p>
      </div>
    );
  }
}

export default withTranslation("translation")(RedirectPage);
