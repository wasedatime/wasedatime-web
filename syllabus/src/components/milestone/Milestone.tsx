import React, { lazy, Suspense } from 'react';
import styled from "styled-components";
const PSE = lazy(() => import("./PSE"));
const CJL = lazy(() => import("./CJL"));
const SILS = lazy(() => import("./SILS"));
const SSS = lazy(() => import("./SSS"));
const Rikou = lazy(() => import("./Rikou"));
import MediaQuery from "react-responsive";
import { media, sizes } from '@bit/wasedatime.core.ts.utils.responsive-utils';
import { undergradSchoolNameIconMap, otherSchoolNameIconMap } from '@bit/wasedatime.syllabus.ts.constants.school-name-icon-map-en';
import LoadingSpinner from '@bit/wasedatime.core.ts.ui.loading-spinner';

const Cover = styled.img`
  max-height: 100vh;
  ${media.tablet`max-height: calc(100vh - 50px);`}
  margin: auto;
`;

const SchoolSwitchesWrapper = styled.div`
  position: absolute;
  width: calc(100vw - 65px);
  ${media.tablet`width: 100vw;`}
`;

const SchoolSwitch = styled.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  margin: 0px 1em;
  ${media.desktop`margin: 0px;`}
  ${media.tablet`width: 90px; margin: 0px; height: 90px;`}
  ${media.phone`width: 60px; margin: 0px; height: 60px;`}
`;

const RikouSchoolSwitchWrapper = styled.div`
  margin: 0px 1em;
  ${media.desktop`margin: 0px;`}
`;

const RikouSchoolSwitch = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  transform: translateX(-30px);
  ${media.tablet`width: 45px; height: 45px; transform: translateX(-22.5px);`}
  ${media.phone`width: 30px; height: 30px; transform: translateX(-15px);`}
`;

const FSESchoolSwitch = styled(RikouSchoolSwitch)`
  width: 60px;
  height: 60px;
  cursor: pointer;
  margin: 30px 0px;
  transform: translateX(0px);
  ${media.tablet`width: 45px; height: 45px; margin: 22.5px 0px; transform: translateX(0px);`}
  ${media.phone`width: 30px; height: 30px; margin: 15px 0px; transform: translateX(0px);`}
`;

const BlankRikouSchoolSwitch = styled.div`
  width: 60px;
  height: 60px;
  display: inline-block;
  cursor: pointer;
  background: #b51e36;
  margin: 30px 0px;
  border: 0px;
  transform: translateX(-60px) rotate(45deg) scale(0.7);
  ${media.tablet`width: 45px; height: 45px; margin: 22.5px 0px; transform: translateX(-45px) rotate(45deg) scale(0.7);`}
  ${media.phone`width: 30px; height: 30px; margin: 15px 0px; transform: translateX(-30px) rotate(45deg) scale(0.7);`}
`;

class Milestone extends React.Component<{ path: string }, { school: string }> {
  state = {
    school: "",
  }
  
  render () {
    const { school } = this.state;
    
    return (
      <div className="theme-default">
        <SchoolSwitchesWrapper>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SchoolSwitch src={undergradSchoolNameIconMap["PSE"]} width="120" height="120" onClick={() => this.setState({ school: "PSE" })} />
            <SchoolSwitch src={undergradSchoolNameIconMap["SILS"]} width="120" height="120" onClick={() => this.setState({ school: "SILS" })} />
            <SchoolSwitch src={undergradSchoolNameIconMap["SSS"]} width="120" height="120" onClick={() => this.setState({ school: "SSS" })} />
            <SchoolSwitch src={otherSchoolNameIconMap["CJL"]} width="120" height="120" onClick={() => this.setState({ school: "CJL" })} />
            <RikouSchoolSwitchWrapper>
              <div style={{ flex: "1 1 auto", display: "flex" }}>
                <FSESchoolSwitch src={undergradSchoolNameIconMap["FSE"]} width="60" height="60" onClick={() => this.setState({ school: "Rikou" })} />
                <div>
                  <RikouSchoolSwitch src={undergradSchoolNameIconMap["CSE"]} width="60" height="60" onClick={() => this.setState({ school: "Rikou" })} />
                  <RikouSchoolSwitch src={undergradSchoolNameIconMap["ASE"]} width="60" height="60" onClick={() => this.setState({ school: "Rikou" })} />
                </div>
                <BlankRikouSchoolSwitch onClick={() => this.setState({ school: "Rikou" })} />
              </div>
            </RikouSchoolSwitchWrapper>
          </div>
        </SchoolSwitchesWrapper>

        {!school && <MediaQuery maxWidth={sizes.tablet}>
          {(matches) =>
            matches ? (
              <Cover src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cover-mobile.jpg" />
            ) : (
              <Cover src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cover.jpg" />
            )
          }
        </MediaQuery>}
        
        <Suspense fallback={<div style={{ paddingTop: "10em" }}><LoadingSpinner message="Loading..." /></div>}>
          {school === "PSE" && <PSE />}
          {school === "CJL" && <CJL />}
          {school === "SILS" && <SILS />}
          {school === "SSS" && <SSS />}
          {school === "Rikou" && <Rikou />}
        </Suspense>
      </div>
    )
  }
}

export default Milestone;