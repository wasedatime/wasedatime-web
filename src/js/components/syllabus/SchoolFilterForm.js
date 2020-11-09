import React from "react";
import { connect } from "react-redux";
import { fetchCourses, addSchool, removeSchool } from "../../actions/syllabus";

import { Overlay } from "../../styled-components/Overlay";
import { withNamespaces } from "react-i18next";
import SchoolImportCard from "./SchoolImportCard";
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
import humIcon from "../../../img/syllabus-icons/hum.png";
import lawIcon from "../../../img/syllabus-icons/law.png";
import spsIcon from "../../../img/syllabus-icons/sps.png";
import cmsIcon from "../../../img/syllabus-icons/cms.png";
import hssIcon from "../../../img/syllabus-icons/hss.png";
import socIcon from "../../../img/syllabus-icons/soc.png";
import eduIcon from "../../../img/syllabus-icons/edu.png";
import cieIcon from "../../../img/syllabus-icons/cie.png";

import fseIcon_jp from "../../../img/syllabus-icons/fse_jp.png";
import cseIcon_jp from "../../../img/syllabus-icons/cse_jp.png";
import aseIcon_jp from "../../../img/syllabus-icons/ase_jp.png";
import pseIcon_jp from "../../../img/syllabus-icons/pse_jp.png";
import silsIcon_jp from "../../../img/syllabus-icons/sils_jp.png";
import sssIcon_jp from "../../../img/syllabus-icons/sss_jp.png";
import humIcon_jp from "../../../img/syllabus-icons/hum_jp.png";
import lawIcon_jp from "../../../img/syllabus-icons/law_jp.png";
import spsIcon_jp from "../../../img/syllabus-icons/sps_jp.png";
import cmsIcon_jp from "../../../img/syllabus-icons/cms_jp.png";
import hssIcon_jp from "../../../img/syllabus-icons/hss_jp.png";
import socIcon_jp from "../../../img/syllabus-icons/soc_jp.png";
import eduIcon_jp from "../../../img/syllabus-icons/edu_jp.png";

const undergradSchoolNameIconMap = (lng) =>
  lng === "jp"
    ? {
        [SILS]: silsIcon_jp,
        [PSE]: pseIcon_jp,
        [SSS]: sssIcon_jp,
        [FSE]: fseIcon_jp,
        [CSE]: cseIcon_jp,
        [ASE]: aseIcon_jp,
        [CJL]: cjlIcon,
        [GEC]: gecIcon,
        [LAW]: lawIcon_jp,
        [CMS]: cmsIcon_jp,
        [HSS]: hssIcon_jp,
        [EDU]: eduIcon_jp,
        [SOC]: socIcon_jp,
        [HUM]: humIcon_jp,
        [SPS]: spsIcon_jp,
        [CIE]: cieIcon,
      }
    : {
        [SILS]: silsIcon,
        [PSE]: pseIcon,
        [SSS]: sssIcon,
        [FSE]: fseIcon,
        [CSE]: cseIcon,
        [ASE]: aseIcon,
        [CJL]: cjlIcon,
        [GEC]: gecIcon,
        [LAW]: lawIcon,
        [CMS]: cmsIcon,
        [HSS]: hssIcon,
        [EDU]: eduIcon,
        [SOC]: socIcon,
        [HUM]: humIcon,
        [SPS]: spsIcon,
        [CIE]: cieIcon,
      };

class SchoolFilterForm extends React.Component {
  state = {
    isSchoolFilterOpened: true,
    selectedSchools: [],
    loadedSchools: this.props.loadedSchools,
    loadingSchool: null,
    schoolsUpToLimit: this.props.loadedSchools.length >= 10,
  };

  loadSyllabus = async (school) => {
    this.props.addSchool(school);
    this.props.fetchCourses();
  };

  schoolImportPanes = () => {
    const { loadedSchools, loadingSchool, schoolsUpToLimit } = this.state;

    return [
      {
        menuItem: "Undergraduate",
        render: () => (
          <Card.Group itemsPerRow={6} style={{ marginTop: "0.5em" }}>
            {Object.keys(undergradSchoolNameIconMap(this.props.lng)).map(
              (schoolName) => (
                <SchoolImportCard
                  key={schoolName}
                  schoolName={schoolName}
                  loaded={loadedSchools.includes(schoolName)}
                  loading={this.state.loadingSchool === schoolName}
                  schoolIcon={
                    undergradSchoolNameIconMap(this.props.lng)[schoolName]
                  }
                  onDownload={this.handleSchoolloading}
                  isBannedToLoad={
                    !loadedSchools.includes(schoolName) &&
                    ((loadingSchool &&
                      this.state.loadingSchool !== schoolName) ||
                      schoolsUpToLimit)
                  }
                />
              )
            )}
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
          schoolIcon={undergradSchoolNameIconMap(this.props.lng)[schoolName]}
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
      this.loadSyllabus(school);

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
                    key={schoolName}
                    control={Checkbox}
                    label={{
                      children: (
                        <Image
                          size="tiny"
                          src={
                            undergradSchoolNameIconMap(this.props.lng)[
                              schoolName
                            ]
                          }
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

const mapStateToProps = (state) => {
  return {
    loadedSchools: state.fetchedCourses.schools,
  };
};

const mapDispatchToProps = {
  fetchCourses,
  addSchool,
  removeSchool,
};

export default withNamespaces("translation")(
  connect(mapStateToProps, mapDispatchToProps)(SchoolFilterForm)
);
