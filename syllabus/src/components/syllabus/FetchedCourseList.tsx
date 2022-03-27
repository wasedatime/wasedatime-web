import React from "react";

import Lang from "@bit/wasedatime.core.ts.constants.langs";
import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import chunk from "lodash/chunk";
import { WithTranslation, withTranslation } from "react-i18next";
import { Waypoint } from "react-waypoint";
import Message from "semantic-ui-react/dist/commonjs/collections/Message";
import SimpleBar from "simplebar-react";
import styled from "styled-components";

import CourseChunk from "@app/components/syllabus/CourseChunk";
import Course from "@app/types/course";

const CourseListWrapper = styled(SimpleBar)`
  height: calc(100vh - 96px);
  ${media.tablet`height: calc(100vh - 166px);`}
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #999;
  }
  .simplebar-scrollbar::before {
    background-color: #999;
  }
  .simplebar-placeholder {
    height: 5px !important;
  }
`;

const CourseChunkWrapper = styled("div")`
  margin: 0.5em;
`;

const getChunkKey = (chunk) => {
  const head = chunk[0];
  const tail = chunk[chunk.length - 1];

  return `${head.a}-${tail.a}`;
};

const COURSES_PER_CHUNK = 5;
const INIT_CHUNKS_NUM = 1;

interface Props extends WithTranslation {
  searchTerm: string | string[];
  searchLang: string | string[];
  results: Course[];
  onSearchInputChange: (inputText: string) => void;
}

interface State {
  loadedChunksNum: number;
}

class FetchedCourseList extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      loadedChunksNum: INIT_CHUNKS_NUM,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.setState(
        {
          loadedChunksNum: INIT_CHUNKS_NUM,
        },
        () => {
          let isChunkChanged = false;

          for (let index = 0; index < 5; index++) {
            if (this.props.results[index] !== prevProps.results[index]) {
              isChunkChanged = true;
              break;
            }
          }

          if (!isChunkChanged) {
            this.loadMoreChunks(0);
          }
        }
      );

      window.scrollTo({ top: 0 });
    }
  }

  resultsToChunks = () =>
    chunk(this.props.results, COURSES_PER_CHUNK).slice(
      0,
      this.state.loadedChunksNum
    );

  loadMoreChunks = (index) => {
    if (index + 1 === this.state.loadedChunksNum) {
      this.setState((prevState, props) => {
        return {
          loadedChunksNum: prevState.loadedChunksNum + 1,
        };
      });
    }
  };

  render() {
    const { searchTerm, searchLang, results, t, i18n } = this.props;
    const resultsInChunks = this.resultsToChunks();

    return (
      <CourseListWrapper autoHide>
        {resultsInChunks.length ? (
          resultsInChunks.map((chunk, index) => (
            <Waypoint
              key={getChunkKey(chunk)}
              onEnter={({ currentPosition }) => {
                this.loadMoreChunks(index);
              }}
            >
              <CourseChunkWrapper>
                <div>
                  <span className="text-light-text2 dark:text-dark-text2">
                    {i18n.language === Lang.JA
                      ? `全 ${results.length} 件中 ${index * 5 + 1} - ${
                          index * 5 + chunk.length
                        } 件を表示`
                      : `${index * 5 + 1} - ${index * 5 + chunk.length} of ${
                          results.length
                        } courses`}
                  </span>
                </div>
                <CourseChunk
                  chunk={chunk}
                  searchTerm={searchTerm}
                  searchLang={searchLang}
                />
              </CourseChunkWrapper>
            </Waypoint>
          ))
        ) : (
          <Message warning size="tiny" style={{ margin: "1em" }}>
            <h5>{t("message.syllabus no result warning")}</h5>
          </Message>
        )}
      </CourseListWrapper>
    );
  }
}

export default withTranslation("translation")(FetchedCourseList);
