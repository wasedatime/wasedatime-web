import React from "react";
import styled from "styled-components";
import { Wrapper } from "../styled-components/Wrapper";

import testImage from "../../img/aboutus/test/test.jpeg"

const Title = styled("h2")`
    width: 50%;
    font-weight:bold;
    font-size:1.5em;
    margin:0 auto;
    text-align:center;
    color: #444 !important;
`;


const CardArea = styled("div")`
    width: 90%;
    margin:0 auto;
    font-size:0.9em;
    // background-color:green;
`;



const Card = styled("div")`
    border:solid;
    float:left;
    margin: 30px;
    width: 230px;
    // position: relative
    text-align:center;
`;

const MemberImage = styled('img')`
    width:90%;
    // position:relative;
    display: inline-block;
    
`;
const MemberName = styled('div')`
    font-size:1.3em;
    // border:solid red;
    text-align:center;
`;

const MemberPosition = styled('div')`
    // border:solid red;
    text-align:center;
`;

const MemberVision = styled('div')`
    // border:solid red;
    text-align:center;
`;


const SocialMedia = styled('div')`
    // border:solid red;
    text-align:center;
`;

const MeetOurTeam = () => {
    return (
        <Wrapper>
            <br></br>
            <Title>Meet Our Talented Team!</Title>
                <CardArea>
                    <Card>
                        <MemberImage src={testImage}></MemberImage>
                        <MemberName>cat</MemberName>
                        <MemberPosition>software engineer</MemberPosition>
                        <MemberVision>"think different"</MemberVision>
                    </Card>
                    <Card>
                        <MemberImage src={testImage}></MemberImage>
                        <MemberName>cat</MemberName>
                        <MemberPosition>software engineer</MemberPosition>
                        <MemberVision>"think different"</MemberVision>
                    </Card>
                    <Card>
                        <MemberImage src={testImage}></MemberImage>
                        <MemberName>cat</MemberName>
                        <MemberPosition>software engineer</MemberPosition>
                        <MemberVision>"think different"</MemberVision>
                    </Card>
                    <Card>
                        <MemberImage src={testImage}></MemberImage>
                        <MemberName>cat</MemberName>
                        <MemberPosition>software engineer</MemberPosition>
                        <MemberVision>"think different"</MemberVision>
                    </Card>
                </CardArea>
        </Wrapper>
        
    );
};

export default MeetOurTeam;