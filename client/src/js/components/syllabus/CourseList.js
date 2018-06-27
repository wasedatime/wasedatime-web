import React from 'react';
import styled from 'styled-components';
import WayPoint from 'react-waypoint';
import stickybits from 'stickybits';

import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

import CourseChunk from './CourseChunk';
import AddedCourseList from './AddedCourseList';
import { sizes } from '../../utils/styledComponents';
import { Overlay } from '../../styled-components/Overlay';
import { Wrapper } from '../../styled-components/Wrapper';

const ExtendedOverlay = Overlay.extend`
  flex-direction: row;
  padding-top: 32px;
`;

const CourseListWrapper = Wrapper.extend`
  flex: 1 1 0;
  padding: 0 1.5em 1em 1.5em;
`;

const VirtualListWrapper = styled('div')`
  flex: 1 1 auto;
`;

const Menu = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0px;
`
const Filter = styled('div')`
  flex: 0 0 19em;
  background-color: white;
`

const getChunkKey = chunk => {
  const head = chunk[0];
  const tail = chunk[chunk.length - 1];
  return `${head._id}-${tail._id}`;
}

const CourseList = ({ searchTerm, resultsCount, resultsChunks }) => {
  console.log(resultsChunks);
  resultsChunks = resultsChunks.slice(0,3);
  return (
    <Wrapper>
      <ExtendedOverlay>
        <MediaQuery minWidth={sizes.tablet}>
          {(matches) => {
            if (matches) {
              return (
                <Filter>
                  <AddedCourseList />
                </Filter>
              );
            } else {
              return null;
            }
          }}
        </MediaQuery>
        <CourseListWrapper>
          <Menu>
            Menu
          </Menu>
          <VirtualListWrapper>
            { resultsChunks.map(chunk => (
              <div>
                <div>
                  <span>{`${resultsCount} results`}</span>
                </div>
                <CourseChunk chunk={chunk} searchTerm={searchTerm} />
              </div>
              ))
            }
            <WayPoint
              // key={getChunkKey(chunk)}
              bottomOffset={"-20%"}
              onEnter={function() {
              console.log("enter");
              }}
            />
          </VirtualListWrapper>
        </CourseListWrapper>
        {/* <MediaQuery minWidth={sizes.desktop}>
          {(matches) => {
            if (matches) {
              return (
                <Filter>
                  Course Filter under construction
                </Filter>
              );
            } else {
              return null;
            }
          }}
        </MediaQuery> */}
      </ExtendedOverlay>
    </Wrapper>
  );
};

export default CourseList;

CourseList.propTypes = {
  searchTerm: PropTypes.string.isRequired
};
