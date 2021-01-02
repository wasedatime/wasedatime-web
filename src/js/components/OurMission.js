import React from "react";
import styled from "styled-components";
import { Wrapper } from "../styled-components/Wrapper";

const Title = styled("h2")`
    width: 50%;
    font-weight:bold;
    font-size:1.5em;
    margin:0 auto;
    text-align:center;
    color: #444 !important;
`;
const MainParagraph = styled("p")`
    width: 90%;
    margin:0 auto;
    font-size:0.9em;
`;

const OurMission = () => {
    return (
        <Wrapper>
            <br></br>
            <Title>We are on a mission</Title>
            <br></br>
            <MainParagraph>WasedaTime has been working on supporting students' academic
          activities since launching. Its well-tested Syllabus Search feature is
          favored by thousands of students. More than 50% of international
          students are using this website. We never expect this could happen and
          are always grateful for all our users.</MainParagraph>
            
        
        </Wrapper>
        
    );
}

export default OurMission;