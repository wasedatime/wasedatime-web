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

import * as Schools from "../../data/schools";

import fseIcon from "../../../img/syllabus-icons/fse.png";
import cseIcon from "../../../img/syllabus-icons/cse.png";
import aseIcon from "../../../img/syllabus-icons/ase.png";
import pseIcon from "../../../img/syllabus-icons/pse.png";
import silsIcon from "../../../img/syllabus-icons/sils.png";
import sssIcon from "../../../img/syllabus-icons/sss.png";
import humIcon from "../../../img/syllabus-icons/hum.png";
import lawIcon from "../../../img/syllabus-icons/law.png";
import spsIcon from "../../../img/syllabus-icons/sps.png";
import cmsIcon from "../../../img/syllabus-icons/cms.png";
import hssIcon from "../../../img/syllabus-icons/hss.png";
import socIcon from "../../../img/syllabus-icons/soc.png";
import eduIcon from "../../../img/syllabus-icons/edu.png";

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

import gPsIcon from "../../../img/syllabus-icons/g_ps.png";
import gEIcon from "../../../img/syllabus-icons/g_e.png";
import gLawIcon from "../../../img/syllabus-icons/g_law.png";
import gLasIcon from "../../../img/syllabus-icons/g_las.png";
import gScIcon from "../../../img/syllabus-icons/g_sc.png";
import gEduIcon from "../../../img/syllabus-icons/g_edu.png";
import gHumIcon from "../../../img/syllabus-icons/g_hum.png";
import gSssIcon from "../../../img/syllabus-icons/g_sss.png";
import gSapsIcon from "../../../img/syllabus-icons/g_saps.png";
import gItsIcon from "../../../img/syllabus-icons/g_its.png";
import gSjalIcon from "../../../img/syllabus-icons/g_sjal.png";
import gIpsIcon from "../../../img/syllabus-icons/g_ips.png";
import gWospmIcon from "../../../img/syllabus-icons/g_wospm.png";
import gWlsIcon from "../../../img/syllabus-icons/g_wls.png";
import gSaIcon from "../../../img/syllabus-icons/g_sa.png";
import gSpsIcon from "../../../img/syllabus-icons/g_sps.png";
import gFseIcon from "../../../img/syllabus-icons/g_fse.png";
import gCseIcon from "../../../img/syllabus-icons/g_cse.png";
import gAseIcon from "../../../img/syllabus-icons/g_ase.png";
import gSeeeIcon from "../../../img/syllabus-icons/g_seee.png";
import gSiccsIcon from "../../../img/syllabus-icons/g_siccs.png";
import gWbsIcon from "../../../img/syllabus-icons/g_wbs.png";

import gPsIcon_jp from "../../../img/syllabus-icons/g_ps_jp.png";
import gEIcon_jp from "../../../img/syllabus-icons/g_e_jp.png";
import gLawIcon_jp from "../../../img/syllabus-icons/g_law_jp.png";
import gLasIcon_jp from "../../../img/syllabus-icons/g_las_jp.png";
import gScIcon_jp from "../../../img/syllabus-icons/g_sc_jp.png";
import gEduIcon_jp from "../../../img/syllabus-icons/g_edu_jp.png";
import gHumIcon_jp from "../../../img/syllabus-icons/g_hum_jp.png";
import gSssIcon_jp from "../../../img/syllabus-icons/g_sss_jp.png";
import gSapsIcon_jp from "../../../img/syllabus-icons/g_saps_jp.png";
import gItsIcon_jp from "../../../img/syllabus-icons/g_its_jp.png";
import gSjalIcon_jp from "../../../img/syllabus-icons/g_sjal_jp.png";
import gIpsIcon_jp from "../../../img/syllabus-icons/g_ips_jp.png";
import gWospmIcon_jp from "../../../img/syllabus-icons/g_wospm_jp.png";
import gWlsIcon_jp from "../../../img/syllabus-icons/g_wls_jp.png";
import gSaIcon_jp from "../../../img/syllabus-icons/g_sa_jp.png";
import gSpsIcon_jp from "../../../img/syllabus-icons/g_sps_jp.png";
import gFseIcon_jp from "../../../img/syllabus-icons/g_fse_jp.png";
import gCseIcon_jp from "../../../img/syllabus-icons/g_cse_jp.png";
import gAseIcon_jp from "../../../img/syllabus-icons/g_ase_jp.png";
import gSeeeIcon_jp from "../../../img/syllabus-icons/g_seee_jp.png";
import gSiccsIcon_jp from "../../../img/syllabus-icons/g_siccs_jp.png";
import gWbsIcon_jp from "../../../img/syllabus-icons/g_wbs_jp.png";

import artIcon from "../../../img/syllabus-icons/art.png";
import cjlIcon from "../../../img/syllabus-icons/cjl.png";
import cieIcon from "../../../img/syllabus-icons/cie.png";
import gecIcon from "../../../img/syllabus-icons/gec.png";

const undergradSchoolNameIconMap = (lng) =>
  lng === "jp"
    ? {
        [Schools.SILS]: silsIcon_jp,
        [Schools.PSE]: pseIcon_jp,
        [Schools.SSS]: sssIcon_jp,
        [Schools.FSE]: fseIcon_jp,
        [Schools.CSE]: cseIcon_jp,
        [Schools.ASE]: aseIcon_jp,
        [Schools.CJL]: cjlIcon,
        [Schools.GEC]: gecIcon,
        [Schools.LAW]: lawIcon_jp,
        [Schools.CMS]: cmsIcon_jp,
        [Schools.HSS]: hssIcon_jp,
        [Schools.EDU]: eduIcon_jp,
        [Schools.SOC]: socIcon_jp,
        [Schools.HUM]: humIcon_jp,
        [Schools.SPS]: spsIcon_jp,
        [Schools.CIE]: cieIcon,
      }
    : {
        [Schools.SILS]: silsIcon,
        [Schools.PSE]: pseIcon,
        [Schools.SSS]: sssIcon,
        [Schools.FSE]: fseIcon,
        [Schools.CSE]: cseIcon,
        [Schools.ASE]: aseIcon,
        [Schools.CJL]: cjlIcon,
        [Schools.GEC]: gecIcon,
        [Schools.LAW]: lawIcon,
        [Schools.CMS]: cmsIcon,
        [Schools.HSS]: hssIcon,
        [Schools.EDU]: eduIcon,
        [Schools.SOC]: socIcon,
        [Schools.HUM]: humIcon,
        [Schools.SPS]: spsIcon,
        [Schools.CIE]: cieIcon,
      };

const gradSchoolNameIconMap = (lng) =>
  lng === "jp"
    ? {
        [Schools.G_PS]: gPsIcon_jp,
        [Schools.G_E]: gEIcon_jp,
        [Schools.G_LAW]: gLawIcon_jp,
        [Schools.G_LAS]: gLasIcon_jp,
        [Schools.G_SC]: gScIcon_jp,
        [Schools.G_EDU]: gEduIcon_jp,
        [Schools.G_HUM]: gHumIcon_jp,
        [Schools.G_SSS]: gSssIcon_jp,
        [Schools.G_SAPS]: gSapsIcon_jp,
        [Schools.G_ITS]: gItsIcon_jp,
        [Schools.G_SJAL]: gSjalIcon_jp,
        [Schools.G_IPS]: gIpsIcon_jp,
        [Schools.G_WOSPM]: gWospmIcon_jp,
        [Schools.G_WLS]: gWlsIcon_jp,
        [Schools.G_SA]: gSaIcon_jp,
        [Schools.G_SPS]: gSpsIcon_jp,
        [Schools.G_FSE]: gFseIcon_jp,
        [Schools.G_CSE]: gCseIcon_jp,
        [Schools.G_ASE]: gAseIcon_jp,
        [Schools.G_SEEE]: gSeeeIcon_jp,
        [Schools.G_SICCS]: gSiccsIcon_jp,
        [Schools.G_WBS]: gWbsIcon_jp,
      }
    : {
        [Schools.G_PS]: gPsIcon,
        [Schools.G_E]: gEIcon,
        [Schools.G_LAW]: gLawIcon,
        [Schools.G_LAS]: gLasIcon,
        [Schools.G_SC]: gScIcon,
        [Schools.G_EDU]: gEduIcon,
        [Schools.G_HUM]: gHumIcon,
        [Schools.G_SSS]: gSssIcon,
        [Schools.G_SAPS]: gSapsIcon,
        [Schools.G_ITS]: gItsIcon,
        [Schools.G_SJAL]: gSjalIcon,
        [Schools.G_IPS]: gIpsIcon,
        [Schools.G_WOSPM]: gWospmIcon,
        [Schools.G_WLS]: gWlsIcon,
        [Schools.G_SA]: gSaIcon,
        [Schools.G_SPS]: gSpsIcon,
        [Schools.G_FSE]: gFseIcon,
        [Schools.G_CSE]: gCseIcon,
        [Schools.G_ASE]: gAseIcon,
        [Schools.G_SEEE]: gSeeeIcon,
        [Schools.G_SICCS]: gSiccsIcon,
        [Schools.G_WBS]: gWbsIcon,
      };

const StyledSegment = styled(Segment)`
  cursor: default !important;
  &:hover {
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
    ];
  };

  schoolRemoveForm = () => (
    <Card.Group itemsPerRow={5}>
      {this.state.loadedSchools.map((schoolName) => (
        <SchoolRemoveCard
          key={schoolName}
          schoolName={schoolName}
          schoolIcon={
            {
              ...undergradSchoolNameIconMap(this.props.lng),
              ...gradSchoolNameIconMap(this.props.lng),
            }[schoolName]
          }
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
            School filter{" "}
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
                          style={{ width: "5em" }}
                          src={
                            {
                              ...undergradSchoolNameIconMap(this.props.lng),
                              ...gradSchoolNameIconMap(this.props.lng),
                            }[schoolName]
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
        </StyledSegment>
      </Overlay>
    );
  }
}

export default withNamespaces("translation")(SchoolFilterForm);
