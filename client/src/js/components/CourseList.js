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
import { media } from '../utils/styledComponents';
import { Overlay } from '../styled-components/Overlay';
import { Wrapper } from '../styled-components/Wrapper';

const ExtendedOverlay = Overlay.extend`
  padding: 36px 12.5vw 0px 12.5vw;
  ${media.phone`padding: 36px 7.5vw 0px 7.5vw;`};
`;

const ListWrapper = styled('div')`
  flex: 1 0 auto;
`;

const Menu = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0px;
`

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 50
});

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
        <Menu>
          <span>{`${resultsCount} results`}</span>
          <a>
            <span>
              <i className="fa fa-filter fa-lg" ></i> Filter
            </span>
          </a>
        </Menu>
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
};

export default CourseList;

CourseList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchResults: PropTypes.array.isRequired
};
