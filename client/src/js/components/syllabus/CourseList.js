import React from 'react';
import styled from 'styled-components';
import { CellMeasurer, CellMeasurerCache } from 'react-virtualized/dist/commonjs/CellMeasurer';
import List from 'react-virtualized/dist/commonjs/List';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';

import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

import CourseItemContainer from '../../containers/CourseItemContainer';
import { sizes } from '../../utils/styledComponents';
import { Overlay } from '../../styled-components/Overlay';
import { Wrapper } from '../../styled-components/Wrapper';

const ExtendedOverlay = Overlay.extend`
  flex-direction: row;
  padding: 36px 0vw 0px 0vw;
`;

const CourseListWrapper = Wrapper.extend`
  margin: 0em 1.5em 1em 1.5em;
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

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 50
});

//TODO Consider Infinite Loader
//TODO https://github.com/bvaughn/react-virtualized/blob/master/source/InfiniteLoader/InfiniteLoader.example.js

const CourseList = ({ searchTerm, searchResults }) => {
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
        <CourseItemContainer
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
        <MediaQuery minWidth={sizes.tablet}>
          {(matches) => {
            if (matches) {
              return (
                <Filter>
                  Course Added List under construction
                </Filter>
              );
            } else {
              return null;
            }
          }}
        </MediaQuery>
        <CourseListWrapper>
          <Menu>
            <span>{`${resultsCount} results`}</span>
          </Menu>
          <VirtualListWrapper>
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
          </VirtualListWrapper>
        </CourseListWrapper>
        <MediaQuery minWidth={sizes.desktop}>
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
        </MediaQuery>
      </ExtendedOverlay>
    </Wrapper>
  );
};

export default CourseList;

CourseList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchResults: PropTypes.array.isRequired
};
