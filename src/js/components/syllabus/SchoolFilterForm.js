import React from "react";
import styled from "styled-components";
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
  undergradSchoolNameIconMap,
  gradSchoolNameIconMap,
  otherSchoolNameIconMap,
  allSchoolNameIconMap,
} from "../../utils/schoolNameIconMap";

const StyledSegment = styled(Segment)`
  cursor: default !important;
  animation: none !important;
  border-radius: 5px !important;
  box-shadow: none !important;

  &:hover {
    border-radius: 5px !important;
    transform: none !important;
  }
`;

class SchoolFilterForm extends React.Component {
  state = {
    isSchoolFilterOpened: true,
    selectedSchools: [],
    loadedSchools: this.props.loadedSchools,
    loadingSchool: null,
    removingSchool: null,
    schoolsUpToLimit: this.props.loadedSchools.length >= 10,
  };

  schoolImportPanes = () => {
    const { loadedSchools, loadingSchool, schoolsUpToLimit } = this.state;
    const { t } = this.props;

    return [
      {
        menuItem: t("syllabus.School Filter.Undergraduate"),
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
        menuItem: t("syllabus.School Filter.Graduate"),
        render: () => (
          <Card.Group itemsPerRow={6} style={{ marginTop: "0.5em" }}>
            {Object.keys(gradSchoolNameIconMap(this.props.lng)).map(
              (schoolName) => (
                <SchoolImportCard
                  key={schoolName}
                  schoolName={schoolName}
                  loaded={loadedSchools.includes(schoolName)}
                  loading={this.state.loadingSchool === schoolName}
                  schoolIcon={gradSchoolNameIconMap(this.props.lng)[schoolName]}
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
        menuItem: t("syllabus.School Filter.Other"),
        render: () => (
          <Card.Group itemsPerRow={6} style={{ marginTop: "0.5em" }}>
            {Object.keys(otherSchoolNameIconMap(this.props.lng)).map(
              (schoolName) => (
                <SchoolImportCard
                  key={schoolName}
                  schoolName={schoolName}
                  loaded={loadedSchools.includes(schoolName)}
                  loading={this.state.loadingSchool === schoolName}
                  schoolIcon={
                    otherSchoolNameIconMap(this.props.lng)[schoolName]
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
    ];
  };

  schoolRemoveForm = () => (
    <Card.Group itemsPerRow={5}>
      {this.state.loadedSchools.map((schoolName) => (
        <SchoolRemoveCard
          key={schoolName}
          schoolName={schoolName}
          schoolIcon={allSchoolNameIconMap(this.props.lng)[schoolName]}
          removing={this.state.removingSchool === schoolName}
          onRemove={this.handleSchoolRemove}
          isBannedToRemove={
            this.state.removingSchool !== null &&
            this.state.removingSchool !== schoolName
          }
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

  handleSchoolloading = async (school) => {
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
      await this.props.loadSyllabus(school);

      setTimeout(() => {
        this.setState({
          loadingSchool: null,
          loadedSchools: [...loadedSchools, school],
        });
      }, 1000);
    }
  };

  handleSchoolRemove = async (school) => {
    if (this.state.loadedSchools.includes(school)) {
      let loadedSchools = this.state.loadedSchools;
      let selectedSchools = this.state.selectedSchools;
      this.setState({ removingSchool: school });

      await this.props.removeSyllabus(school);

      setTimeout(() => {
        loadedSchools.splice(loadedSchools.indexOf(school), 1);
        if (selectedSchools.includes(school)) {
          selectedSchools.splice(selectedSchools.indexOf(school), 1);
          this.props.handleToggleFilter("school", school);
        }
        this.setState({
          removingSchool: null,
          loadedSchools: loadedSchools,
          selectedSchools: selectedSchools,
          schoolsUpToLimit: loadedSchools.length >= 10,
        });
      }, 1000);
    }
  };

  render() {
    const { t } = this.props;
    return (
      <Overlay>
        <StyledSegment
          style={{ margin: "1em 2em 0em", padding: "0.5em 1em 0px" }}
        >
          <Header
            as="h2"
            onClick={() =>
              this.setState((state) => ({
                isSchoolFilterOpened: !state.isSchoolFilterOpened,
              }))
            }
            style={{ cursor: "pointer", margin: "0px" }}
          >
            {t("syllabus.School Filter.title")}{" "}
            {this.state.isSchoolFilterOpened ? (
              <Icon name="angle up" />
            ) : (
              <Icon name="angle down" />
            )}
          </Header>

          {this.state.loadedSchools.length > 0 &&
            this.state.isSchoolFilterOpened && (
              <Button.Group>
                <Popup
                  trigger={
                    <Button
                      color="green"
                      icon="add"
                      content={t("syllabus.School Filter.Import")}
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
                      content={t("syllabus.School Filter.Remove")}
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
                <Message.Header>
                  {t("syllabus.School Filter.No imported")}
                </Message.Header>
                <p>
                  {t("syllabus.School Filter.Import request")}{" "}
                  <Popup
                    trigger={
                      <Button
                        color="green"
                        icon="add"
                        content={t("syllabus.School Filter.Import")}
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
                          style={{ width: "5em" }}
                          src={allSchoolNameIconMap(this.props.lng)[schoolName]}
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
        </StyledSegment>
      </Overlay>
    );
  }
}

export default withNamespaces("translation")(SchoolFilterForm);
