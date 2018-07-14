import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { Wrapper, RowWrapper } from '../../styled-components/Wrapper';
import TimeRowList from './TimeRowList';
import DayColumnList from './DayColumnList';
import Modal from '../Modal';
import AddedCourseWithPropertyList from './AddedCourseWithPropertyList';
import withFetchCourses from '../../hocs/withFetchCourses';
import { media } from '../../utils/styledComponents';

const ExtendedRowWrapper = RowWrapper.extend`
  flex-wrap: wrap;
`

const Column = styled('div')`
  flex: ${props => `0 0 ${props.flexBasis};`}
  max-width: ${props => `${props.flexBasis};`}
  ${media.tablet`
    flex: unset;
    max-width: 100%;
  `};
  ${media.phone`
    flex: unset;
    max-width: 100%;
  `};
`

const ScrollableTimetable = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1 0 0;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`

const StyledButton = styled('button')`
  align-self: center;
  margin: 1rem;
  padding: 0.8rem;
  border: none;
  border-radius: 0.4rem;
  font-size: 1.8rem;
  background-color: rgb(181, 30, 54);
  color: #fff;
  box-shadow: 0 6px 6px -6px #333;
`

const modalStyle = {
  overlay: {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.75)',
  zIndex: '9999'
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none'
  }
}

const CloseModalButton = styled('button')`
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0;
  border: none;
  background: none;
`

class Timetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      searchTerm: ''
    }
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { addedCoursesWithProperties } = this.props;
    return (
      <Wrapper>
        <Helmet>
          <title>WaseTime - Timetable</title>
          <meta name="description" content="Create Your Own Timetable at Waseda University." />
          <meta property="og:title" content="WaseTime - Timetable" />
          <meta property="og:description" content="Create Your Own Timetable at Waseda University." />
          <meta property="og:site_name" content="WaseTime - Timetable" />
        </Helmet>
        <ExtendedRowWrapper>
          <Column flexBasis="70%">
            <ScrollableTimetable className="theme-default">
              <TimeRowList />
              <DayColumnList
                addedCoursesWithProperties={addedCoursesWithProperties}
              />
            </ScrollableTimetable>
          </Column>
          <Column flexBasis="30%">
            <Wrapper>
              <StyledButton onClick={this.handleOpenModal}>
                Add courses to timetable
              </StyledButton>
              <Modal
                isOpen={this.state.showModal}
                contentLabel="Course Search Modal"
                style={modalStyle}
              >
                <div>
                  <span>Under Construction...</span>
                  <CloseModalButton onClick={this.handleCloseModal}>
                    <FontAwesomeIcon icon={faTimesCircle} size="2x" transform="shrink-2" />
                  </CloseModalButton>
                </div>
              </Modal>
              <AddedCourseWithPropertyList
                addedCoursesWithProperties={addedCoursesWithProperties}
              />
            </Wrapper>
          </Column>
        </ExtendedRowWrapper>
      </Wrapper>
    );
  }
}

export default withFetchCourses(Timetable);
