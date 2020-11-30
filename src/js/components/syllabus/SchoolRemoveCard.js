import React from "react";
import { Card, Icon, Dimmer, Image } from "semantic-ui-react";

class SchoolRemoveCard extends React.Component {
  state = {
    isDimmerActive: false,
  };

  render() {
    const {
      schoolName,
      schoolIcon,
      removing,
      onRemove,
      isBannedToRemove,
    } = this.props;
    return (
      <Dimmer.Dimmable
        as={Card}
        onClick={() => {
          if (!isBannedToRemove) {
            console.log(schoolName);
            onRemove(schoolName);
          }
        }}
        onMouseOver={() => this.setState({ isDimmerActive: true })}
        onMouseOut={() => this.setState({ isDimmerActive: false })}
      >
        <Dimmer
          active={this.state.isDimmerActive || removing || isBannedToRemove}
          inverted={!isBannedToRemove}
        >
          {removing ? (
            <Icon
              name="spinner"
              size="big"
              style={{ color: "rgba(0,0,0,0.5)" }}
            />
          ) : (
            <Icon
              name="trash alternate"
              size="big"
              style={{
                color: isBannedToRemove
                  ? "rgba(255,0,0,0.05)"
                  : "rgba(255,0,0,0.5)",
              }}
            />
          )}
        </Dimmer>
        <Image src={schoolIcon} />
      </Dimmer.Dimmable>
    );
  }
}

export default SchoolRemoveCard;
