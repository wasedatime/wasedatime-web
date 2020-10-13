import React from "react";
import { Card, Icon, Dimmer, Image } from "semantic-ui-react";

class SchoolRemoveCard extends React.Component {
  state = {
    isDimmerActive: false,
  };

  render() {
    const { schoolName, schoolIcon, onRemove } = this.props;
    return (
      <Dimmer.Dimmable
        as={Card}
        onClick={() => onRemove(schoolName)}
        onMouseOver={() => this.setState({ isDimmerActive: true })}
        onMouseOut={() => this.setState({ isDimmerActive: false })}
      >
        <Dimmer active={this.state.isDimmerActive} inverted>
          <Icon
            name="trash alternate"
            size="big"
            style={{ color: "rgba(255,0,0,0.5)" }}
          />
        </Dimmer>
        <Image src={schoolIcon} />
      </Dimmer.Dimmable>
    );
  }
}

export default SchoolRemoveCard;
