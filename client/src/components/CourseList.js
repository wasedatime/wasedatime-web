import React from 'react';
import styled from 'styled-components';
import {
  CellMeasurer,
  CellMeasurerCache,
  List,
  AutoSizer
} from 'react-virtualized';
import PropTypes from 'prop-types';

import CourseItem from './CourseItem';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const Overlay = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 36px 25px 25px 25px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ListWrapper = styled('div')`
  flex: 1 0 auto;
`;

const Summary = styled('div')`
  margin: 10px 0;
  align-self: flex-end;
`;

const StyledList = styled('ul')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  list-style-type: none;
`;

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 50
});

const CourseList = ({ searchTerm, searchResults }) => {
  if (searchResults.length !== 0) {
    cache.clearAll();
    const rowRenderer = ({
      index,
      isScrolling,
      isVisible,
      key,
      parent,
      style
    }) => {
      return (
        <CellMeasurer
          cache={cache}
          columnIndex={0}
          key={key}
          parent={parent}
          rowIndex={index}
        >
          <CourseItem
            key={key}
            style={style}
            searchTerm={searchTerm}
            course={searchResults[index]}
          />
        </CellMeasurer>
      );
    };
    const resultsCount = searchResults.length;
    return (
      <Wrapper>
        <Overlay>
          <Summary>{`${resultsCount} course(s) found`}</Summary>
          <ListWrapper>
            <AutoSizer>
              {({ width, height }) => {
                return (
                  <List
                    width={width}
                    height={height}
                    rowCount={resultsCount}
                    deferredMeasurementCache={cache}
                    rowHeight={cache.rowHeight}
                    rowRenderer={rowRenderer}
                  />
                );
              }}
            </AutoSizer>
          </ListWrapper>
        </Overlay>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Overlay>
          <Summary>No courses found</Summary>
        </Overlay>
      </Wrapper>
    );
  }
};

export default CourseList;

CourseList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchResults: PropTypes.array.isRequired
};
