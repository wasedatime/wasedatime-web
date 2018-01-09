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
import { Overlay } from '../styled-components/Overlay';
import { Wrapper } from '../styled-components/Wrapper';

const ExtendedOverlay = Overlay.extend`
  padding: 36px 25px 25px 25px;
`;

const ListWrapper = styled('div')`
  flex: 1 0 auto;
`;

const Summary = styled('div')`
  margin: 10px 0;
  align-self: flex-end;
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
        <ExtendedOverlay>
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
        </ExtendedOverlay>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <ExtendedOverlay>
          <Summary>No courses found</Summary>
        </ExtendedOverlay>
      </Wrapper>
    );
  }
};

export default CourseList;

CourseList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchResults: PropTypes.array.isRequired
};
