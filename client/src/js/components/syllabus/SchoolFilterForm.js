import React from "react";
import { Overlay } from "../../styled-components/Overlay";
import { withNamespaces } from "react-i18next";
import SchoolCard from "./SchoolCard";
import SchoolRemoveCard from "./SchoolRemoveCard";

import {
  Segment,
  Tab,
  Card,
  Header,
  Icon,
  Checkbox,
  Form,
  Button,
  Popup,
  Image,
  Message,
} from "semantic-ui-react";

import {
  SILS,
  PSE,
  SSS,
  FSE,
  ASE,
  CSE,
  CJL,
  GEC,
  LAW,
  CMS,
  HSS,
  EDU,
  SOC,
  HUM,
  SPS,
  CIE,
} from "../../data/schools";

import fseIcon from "../../../img/syllabus-icons/fse.png";
import cseIcon from "../../../img/syllabus-icons/cse.png";
import aseIcon from "../../../img/syllabus-icons/ase.png";
import pseIcon from "../../../img/syllabus-icons/pse.png";
import silsIcon from "../../../img/syllabus-icons/sils.png";
import sssIcon from "../../../img/syllabus-icons/sss.png";
import cjlIcon from "../../../img/syllabus-icons/cjl.png";
import gecIcon from "../../../img/syllabus-icons/gec.png";

const loadedUndergradSchools = ["FSE", "CSE", "ASE", "PSE", "CJL"];

const undergradSchoolNameIconMap = {
  [SILS]: silsIcon,
  [PSE]: pseIcon,
  [SSS]: sssIcon,
  [FSE]: fseIcon,
  [CSE]: cseIcon,
  [ASE]: aseIcon,
  [CJL]: cjlIcon,
  [GEC]: gecIcon,
  [LAW]: fseIcon,
  [CMS]: fseIcon,
  [HSS]: fseIcon,
  [EDU]: fseIcon,
  [SOC]: fseIcon,
  [HUM]: fseIcon,
  [SPS]: fseIcon,
  [CIE]: fseIcon,
};

// async function loadSyllabus(school) {
//   await ...
// }

class SchoolFilterForm extends React.Component {
  state = {
    isSchoolFilterOpened: true,
    selectedSchools: [],
    loadedSchools: loadedUndergradSchools,
    loadingSchool: null,
    schoolsUpToLimit: loadedUndergradSchools.length >= 10,
  };

  schoolImportPanes = () => {
    const { loadedSchools, loadingSchool, schoolsUpToLimit } = this.state;

    return [
      {
        menuItem: "Undergraduate",
        render: () => (
          <Card.Group itemsPerRow={6} style={{ marginTop: "0.5em" }}>
            {Object.keys(undergradSchoolNameIconMap).map((schoolName) => (
              <SchoolCard
                key={schoolName}
                schoolName={schoolName}
                loaded={loadedSchools.includes(schoolName)}
                loading={this.state.loadingSchool === schoolName}
                schoolIcon={undergradSchoolNameIconMap[schoolName]}
                onDownload={this.handleSchoolloading}
                isBannedToLoad={
                  !loadedSchools.includes(schoolName) &&
                  ((loadingSchool && this.state.loadingSchool !== schoolName) ||
                    schoolsUpToLimit)
                }
              />
            ))}
          </Card.Group>
        ),
      },
      {
        menuItem: "Graduate",
        render: () => (
          <Card.Group itemsPerRow={6} style={{ marginTop: "0.5em" }}>
            {Array.from(Array(17)).map((x, i) => (
              <Card key={i} image={fseIcon} />
            ))}
          </Card.Group>
        ),
      },
    ];
  };

  schoolRemoveForm = () => (
    <Card.Group itemsPerRow={5}>
      {this.state.loadedSchools.map((schoolName) => (
        <SchoolRemoveCard
          key={schoolName}
          schoolName={schoolName}
          schoolIcon={undergradSchoolNameIconMap[schoolName]}
          onRemove={this.handleSchoolRemove}
        />
      ))}
    </Card.Group>
  );

  toggleSelected = (school) => {
    this.props.handleToggleFilter("school", school);

    if (this.state.selectedSchools.includes(school)) {
      let selectedSchools = this.state.selectedSchools;
      selectedSchools.splice(selectedSchools.indexOf(school), 1);
      this.setState({
        selectedSchools: selectedSchools,
      });
    } else {
      this.setState({
        selectedSchools: [...this.state.selectedSchools, school],
      });
    }
  };

  handleSchoolloading = (school) => {
    const { schoolsUpToLimit, loadingSchool, loadedSchools } = this.state;
    if (
      !schoolsUpToLimit &&
      (!loadingSchool || loadingSchool !== school) &&
      loadedSchools.length < 10
    ) {
      if (loadedSchools.length === 9) {
        this.setState({ schoolsUpToLimit: true });
      }

      this.setState({ loadingSchool: school });

      // loadSyllabus(school);

      // Move the setState execution out of setTimeout after loadSyllabus function is implemented
      setTimeout(() => {
        this.setState({
          loadingSchool: null,
          loadedSchools: [...loadedSchools, school],
        });
      }, 1000);
    }
  };

  handleSchoolRemove = (school) => {
    if (this.state.loadedSchools.includes(school)) {
      let loadedSchools = this.state.loadedSchools;
      let selectedSchools = this.state.selectedSchools;

      loadedSchools.splice(loadedSchools.indexOf(school), 1);
      if (selectedSchools.includes(school)) {
        selectedSchools.splice(selectedSchools.indexOf(school), 1);
        this.props.handleToggleFilter("school", school);
      }

      this.setState({
        loadedSchools: loadedSchools,
        selectedSchools: selectedSchools,
      });
    }
  };

  render() {
    return (
      <Overlay>
        <Segment style={{ margin: "1em 2em 0em", padding: "0.5em 1em 0px" }}>
          <Header
            as="h2"
            onClick={() =>
              this.setState({
                isSchoolFilterOpened: !this.state.isSchoolFilterOpened,
              })
            }
            style={{ cursor: "pointer", margin: "0px" }}
          >
            School filter <Icon name="angle down" />
          </Header>

          {this.state.loadedSchools.length > 0 &&
            this.state.isSchoolFilterOpened && (
              <Button.Group>
                <Popup
                  trigger={
                    <Button
                      color="green"
                      icon="add"
                      content="Import syllabus"
                    />
                  }
                  content={<Tab panes={this.schoolImportPanes()} />}
                  on="click"
                  position="bottom left"
                  size="huge"
                  wide="very"
                />
                <Popup
                  trigger={
                    <Button
                      color="red"
                      icon="minus"
                      content="Remove syllabus"
                    />
                  }
                  content={this.schoolRemoveForm()}
                  on="click"
                  position="bottom left"
                  size="huge"
                  wide="very"
                />
              </Button.Group>
            )}

          {this.state.loadedSchools.length === 0 &&
            this.state.isSchoolFilterOpened && (
              <Message>
                <Message.Header>No syllabus imported yet</Message.Header>
                <p>
                  Please import the syllabus for at least 1 school.{" "}
                  <Popup
                    trigger={
                      <Button
                        color="green"
                        icon="add"
                        content="Import syllabus"
                      />
                    }
                    content={<Tab panes={this.schoolImportPanes()} />}
                    on="click"
                    position="bottom left"
                    size="huge"
                    wide="very"
                  />
                </p>
              </Message>
            )}

          {this.state.isSchoolFilterOpened && (
            <Form>
              <Form.Group inline style={{ margin: "0px" }}>
                {this.state.loadedSchools.map((schoolName) => (
                  <Form.Field
                    control={Checkbox}
                    label={{
                      children: (
                        <Image
                          size="tiny"
                          src={undergradSchoolNameIconMap[schoolName]}
                        />
                      ),
                    }}
                    checked={this.state.selectedSchools.includes(schoolName)}
                    style={{ margin: "1em 0px 0px" }}
                    onChange={() => this.toggleSelected(schoolName)}
                  />
                ))}
              </Form.Group>
            </Form>
          )}
        </Segment>
      </Overlay>
    );
  }
}

export default withNamespaces("translation")(SchoolFilterForm);
