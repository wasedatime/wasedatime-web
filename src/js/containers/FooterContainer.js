import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";

import { fetchStats } from "../actions";
import { getIsFetching, getInfo, getError } from "../reducers/stats";
import Footer from "../components/Footer";

//TODO Use a better name instead of 'info'

class FooterContainer extends React.Component {
  componentDidMount() {
    this.props.fetchStats();
  }

  render() {
    const { isFetching, info, error, t } = this.props;
    let finishTime = `${t("footer.syllabus")} ${info.finish_time} JST ${t(
      "footer.update"
    )}`;
    if (isFetching && Object.keys(info).length === 0) {
      finishTime = "loading...";
    }
    if (error && Object.keys(info).length === 0) {
      finishTime = "Oops, an error occured.";
    }
    return <Footer finishTime={finishTime} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: getIsFetching(state.stats),
    info: getInfo(state.stats),
    error: getError(state.stats),
  };
};

const mapDispatchToProps = {
  fetchStats,
};

export default withNamespaces("translation")(
  connect(mapStateToProps, mapDispatchToProps)(FooterContainer)
);

FooterContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  info: PropTypes.object.isRequired,
  error: PropTypes.object,
  fetchStats: PropTypes.func.isRequired,
};
