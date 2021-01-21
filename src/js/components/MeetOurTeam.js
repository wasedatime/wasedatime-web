import React from "react";
import styled from "styled-components";
import { Wrapper } from "../styled-components/Wrapper";

import oscar from "../../img/aboutus/contributors/oscar.jpg"
import mei from "../../img/aboutus/contributors/mei.jpg"
import hao from "../../img/aboutus/contributors/hao.jpg"
import austin from "../../img/aboutus/contributors/austin.jpg"
// import tang from "../../img/aboutus/contributors/tang.jpg"
// import kong from "../../img/aboutus/contributors/kong.jpg"
// import gujiaxian from "../../img/aboutus/contributors/gujiaxian.jpg"

import testImage from "../../img/aboutus/test/test.jpeg"
import facebook from "../../img/aboutus/socialmediaicon/facebook.png"
import homepage from "../../img/aboutus/socialmediaicon/homepage.png"
import instagram from "../../img/aboutus/socialmediaicon/instagram.png"
import linkedin from "../../img/aboutus/socialmediaicon/linkedin.png"
import weibo from "../../img/aboutus/socialmediaicon/sina-weibo.png"
import twitter from "../../img/aboutus/socialmediaicon/twitter.png"
import wechat from "../../img/aboutus/socialmediaicon/wechat.png"
import github from "../../img/aboutus/socialmediaicon/github.png"


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
    text-align: center;
    // background-color:green;
`;



const Card = styled("div")`
    // background-co lor:blue;
    // border:solid;
    float:left;
    margin: 30px;
    width: 230px;
    // position: relative
    text-align:center;
`;

const MemberImage = styled('img')`
    width:80%;
    border: white 7px solid;
    // position:relative;
    display: inline-block;
    border-radius: 50%;
    box-shadow: 0px 0px 8px;
    
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
    border:solid red;
    text-align:center;
`;

const SocialMediaArea = styled('div')`
    // background-color:red;
    text-align:center;
`

const MediaIcon = styled('img')`
    width:1.3em;
    margin:4px;
    text-align:center;

`

const MeetOurTeam = () => {
    return (
        <Wrapper>
            <br></br>
            <Title>Meet Our Talented Team!</Title>
                <CardArea>

                    {/* ----------------------------------Oscar */}
                    <Card>
                        <MemberImage src={oscar}></MemberImage>
                        <MemberName>Oscar Wang</MemberName>
                        <MemberPosition>Founder(Alumni)</MemberPosition>
                        <MemberVision></MemberVision>
                        <SocialMediaArea>
                            <a href="https://github.com/oscarwang114" target="_blank">
                                <MediaIcon src={github}></MediaIcon>
                            </a>
                            <a href="https://twitter.com/OscarWang114" target="_blank">
                                <MediaIcon src={twitter}></MediaIcon>
                            </a>
                            <a href="https://www.facebook.com/haohaowang.oscar" target="_blank">
                                <MediaIcon src={facebook}></MediaIcon>
                            </a>
                        </SocialMediaArea>
                    </Card>

                    {/* ----------------------------------Hao */}
                    <Card>
                        <MemberImage src={hao}></MemberImage>
                        <MemberName>Hao</MemberName>
                        <MemberPosition>Project Leader</MemberPosition>
                        <MemberVision></MemberVision>
                        <SocialMediaArea>
                            <a href="https://github.com/YHhaoareyou" target="_blank">
                                <MediaIcon src={github}></MediaIcon>
                            </a>
                            <a href="https://www.facebook.com/hao8711/" target="_blank">
                                <MediaIcon src={facebook}></MediaIcon>
                            </a>
                            <a href="https://www.instagram.com/yh_hao_are_you/" target="_blank">
                                <MediaIcon src={instagram}></MediaIcon>
                            </a>
                        </SocialMediaArea>
                    </Card>

                    {/* ----------------------------------Austin */}
                    <Card>
                        <MemberImage src={austin}></MemberImage>
                        <MemberName>Austin Zhu</MemberName>
                        <MemberPosition>Project Co-leader</MemberPosition>
                        <MemberVision></MemberVision>
                        <SocialMediaArea>
                            <a href="https://www.instagram.com/austinzhu123/" target="_blank">
                                <MediaIcon src={instagram}></MediaIcon>
                            </a>
                            <a href="https://austinzhu.dev/" target="_blank">
                                <MediaIcon src={homepage}></MediaIcon>
                            </a>
                        </SocialMediaArea>
                    </Card>

                    {/* ----------------------------------Mei */}
                    <Card>
                        <MemberImage src={mei}></MemberImage>
                        <MemberName>Mei</MemberName>
                        <MemberPosition>software engineer</MemberPosition>
                        <MemberVision></MemberVision>
                        <SocialMediaArea>
                            <a href="https://twitter.com/Rimei9623" target="_blank">
                                <MediaIcon src={twitter}></MediaIcon>
                            </a>
                            <a href="https://www.instagram.com/limengmmmm/" target="_blank">
                                <MediaIcon src={instagram}></MediaIcon>
                            </a>
                            <a href="https://www.weibo.com/u/5000065316/home" target="_blank">
                                <MediaIcon src={weibo}></MediaIcon>
                            </a>
                        </SocialMediaArea>
                    </Card>

                    {/* ----------------------------------Tang */}
                    {/* <Card>
                        <MemberImage src={tang}></MemberImage>
                        <MemberName>Yeping Tang</MemberName>
                        <MemberPosition>software engineer</MemberPosition>
                        <MemberVision></MemberVision>
                        <SocialMediaArea>
                            <a href="https://www.google.com" target="_blank">
                                <MediaIcon src={facebook} href="www.google.com" target="_blank"></MediaIcon>
                            </a>
                        </SocialMediaArea>
                    </Card> */}

                    <Card>
                        <MemberImage src={testImage}></MemberImage>
                        <MemberName>cat</MemberName>
                        <MemberPosition>software engineer</MemberPosition>
                        <MemberVision>"think different"</MemberVision>
                        <SocialMediaArea>
                            <a href="https://www.google.com" target="_blank">
                                <MediaIcon src={facebook} href="www.google.com" target="_blank"></MediaIcon>
                            </a>
                        </SocialMediaArea>
                    </Card>
                    <Card>
                        <MemberImage src={testImage}></MemberImage>
                        <MemberName>cat</MemberName>
                        <MemberPosition>software engineer</MemberPosition>
                        <MemberVision>"think different"</MemberVision>
                        <SocialMediaArea>
                            <a href="https://www.google.com" target="_blank">
                                <MediaIcon src={facebook} href="www.google.com" target="_blank"></MediaIcon>
                            </a>
                            <a href="https://www.google.com" target="_blank">
                                <MediaIcon src={facebook} href="www.google.com" target="_blank"></MediaIcon>
                            </a>
                        </SocialMediaArea>
                    </Card>
                </CardArea>
        </Wrapper>
        
    );
};

export default MeetOurTeam;