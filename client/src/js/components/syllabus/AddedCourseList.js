import React from 'react';
import stickybits from 'stickybits';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import CourseItemContainer from '../../containers/syllabus/CourseItemContainer';
import { Wrapper } from '../../styled-components/Wrapper';

const CourseListWrapper = Wrapper.extend`
  flex: none;
  padding: 0 1em 1em 1em;
  overflow-y: auto;
  height: calc(100vh - 92px);
`;

class AddedCourseList extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = null;

    this.setWrapperRef = element => {
      this.wrapper = element;
    }

    this.createStickyWrapper = () => {
      if (this.wrapper) {
        this.stickyWrapper = stickybits(this.wrapper,
          {stickyBitStickyOffset: 92});
      }
    }

    this.cleanupStickyWrapper = () => {
      if (this.stickyWrapper) {
        this.stickyWrapper.cleanup();
      }
    }
  }

  componentDidMount() {
    this.createStickyWrapper();
  }

  componentWillUnmount() {
    this.cleanupStickyWrapper();
  }

  render() {
    const { results, searchTerm } = this.props;
    return (
      <CourseListWrapper innerRef={this.setWrapperRef}>
        <span>
          {`${results.length} courses added.`}
        </span>
          {results.length ?
            <div style={{fontSize: "14px"}}>
              {results.map((result, index) => (
                <CourseItemContainer
                  key={result.id}
                  searchTerm={searchTerm}
                  course={result.course}
                />
              ))
              }
            </div> :
            <div
              style={{
                backgroundColor: "#fff",
                flex: "1 0 auto",
                fontSize: "18px",
                padding: "0.5em 0.7em"
              }}
            >
              <h4>Added courses are displayed here.</h4>
              <div>
              To add a course:
              <ol
                style={{
                  paddingLeft: "1em",
                  margin: 0
                }}
              >
                <li>
                  Search for a course title or an instructor in the right search bar,
                  e.g., "calculus" or "tanaka" or "calculus tanaka".
                </li>
                <li>
                  Click on <FontAwesomeIcon
                      style={{color: "#48af37"}}
                      icon={faPlusCircle}
                      size="1x"
                    /> to add, <FontAwesomeIcon
                        style={{color: "#ce0115"}}
                        icon={faMinusCircle}
                        size="1x"
                      /> to remove.
                </li>
                <li>
                  Pro Tip: Use Filters (under construction) to narrow down your search!
                </li>
              </ol>
              </div>
            </div>
          }
      </CourseListWrapper>
    )
  }
}

export default AddedCourseList;
