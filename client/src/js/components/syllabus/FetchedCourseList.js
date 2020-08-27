import React from "react";
import chunk from "lodash/chunk";
import WayPoint from "react-waypoint";
import styled from "styled-components";
import PropTypes from "prop-types";

import CourseChunk from "./CourseChunk";
import { Overlay } from "../../styled-components/Overlay";
import { Wrapper } from "../../styled-components/Wrapper";
import { withNamespaces } from "react-i18next";
import LANGS from "../../config/langs";

const ExtendedWrapper = styled(Wrapper)`
  flex: 1 1 0;
`;

const ExtendedOverlay = styled(Overlay)`
  flex-direction: row;
`;

const CourseListWrapper = styled(Wrapper)`
  flex: 1 1 0;
  padding: 0 1em 1em 1em;
`;

const CourseChunkWrapper = styled("div")`
  margin: 0.5em 0;
`;

const getChunkKey = (chunk) => {
  const head = chunk[0];
  const tail = chunk[chunk.length - 1];
  return `${head._id}-${tail._id}`;
};

const COURSES_PER_CHUNK = 5;
const INIT_CHUNKS_NUM = 2;

class FetchedCourseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedChunksNum: INIT_CHUNKS_NUM,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.setState({
        loadedChunksNum: INIT_CHUNKS_NUM,
      });
      window.scrollTo({ top: 0 });
    }
  }

  resultsToChunks = () =>
    chunk(this.props.results, COURSES_PER_CHUNK).slice(
      0,
      this.state.loadedChunksNum
    );

  loadMoreChunks = (index) => {
    if (index !== 0 && index + 1 === this.state.loadedChunksNum) {
      this.setState((prevState, props) => {
        return {
          loadedChunksNum: prevState.loadedChunksNum + 1,
        };
      });
    }
  };

  render() {
    const { searchTerm, searchLang, results, lng } = this.props;
    const resultsInChunks = this.resultsToChunks();

    return (
      <ExtendedWrapper>
        <ExtendedOverlay>
          <CourseListWrapper>
            <div>
              {resultsInChunks.length ? (
                resultsInChunks.map((chunk, index) => (
                  <WayPoint
                    key={getChunkKey(chunk)}
                    onEnter={() => {
                      this.loadMoreChunks(index);
                    }}
                  >
                    <CourseChunkWrapper>
                      <div>
                        <span>
                          {lng === LANGS.JP
                            ? "全 " +
                              results.length +
                              " 件中 " +
                              (index * 5 + 1) +
                              " - " +
                              (index * 5 + chunk.length) +
                              " 件を表示"
                            : index * 5 +
                              1 +
                              " - " +
                              (index * 5 + chunk.length) +
                              " of " +
                              results.length +
                              " courses"}
                        </span>
                      </div>
                      <CourseChunk
                        chunk={chunk}
                        searchTerm={searchTerm}
                        searchLang={searchLang}
                      />
                    </CourseChunkWrapper>
                  </WayPoint>
                ))
              ) : (
                <div style={{ marginTop: "0.5em" }}>No results</div>
              )}
            </div>
          </CourseListWrapper>
        </ExtendedOverlay>
      </ExtendedWrapper>
    );
  }
}

export default withNamespaces("translation")(FetchedCourseList);

FetchedCourseList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
};
