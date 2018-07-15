import React from 'react';
import stickybits from 'stickybits';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import AddedCourseItem from '../../containers/syllabus/AddedCourseItem';
import { Wrapper } from '../../styled-components/Wrapper';
import { Article, Section, Subheading,
  OList, ListItem } from '../../styled-components/Article';

const CourseListWrapper = Wrapper.extend`
  flex: none;
  padding: 0.5em 1em 1em 1em;
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
    const { isSearching, results, searchTerm } = this.props;
    return (
      <CourseListWrapper innerRef={this.setWrapperRef}>
        <span>
          { `${results.length} courses ${isSearching ? "found" : "added" }.`}
        </span>
          {results.length || isSearching ?
            <div style={{fontSize: "14px"}}>
              {results.map((result, index) => (
                <AddedCourseItem
                  key={result._id}
                  searchTerm={searchTerm}
                  course={result}
                />
              ))
              }
            </div> :
            <Article>
              <h4>Added courses are displayed here.</h4>
              <Section>
              <Subheading>To add a course</Subheading>
                <OList>
                  <ListItem>
                    Search for a course title or an instructor in the right search bar.
                    <br/>E.g., "calculus" or "tanaka" or "calculus tanaka".
                  </ListItem>
                  <ListItem>
                    Click on <FontAwesomeIcon
                        style={{color: "#48af37"}}
                        icon={faPlusCircle}
                        size="1x"
                      /> to add, <FontAwesomeIcon
                          style={{color: "#ce0115"}}
                          icon={faMinusCircle}
                          size="1x"
                        /> to remove.
                  </ListItem>
                </OList>
              </Section>
              <Section>
              <Subheading>Pro Tips!</Subheading>
                <OList>
                  <ListItem>
                    Type only the start of the word!<br/>
                    E.g., "vec calc" instead of "vector calculus"
                  </ListItem>
                  <ListItem>
                    Use "Filter by" to narrow down your search!
                  </ListItem>
                </OList>
              </Section>
            </Article>
          }
      </CourseListWrapper>
    )
  }
}

export default AddedCourseList;
