import React from 'react';
import Downshift from 'downshift';

class MultiDownShift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: []
    }
  }

  render() {
    const {children, ...rest} = this.props;
    return (
      <Downshift>
        
      </Downshift>
    )
  }

}

export default MultiDownShift;
