import React from "react";
import styled from "styled-components";
import { Wrapper } from "../styled-components/Wrapper";
import WeChatQRcode from "./WeChatQRcode.js"
import { withNamespaces } from "react-i18next";

import oscar from "../../img/aboutus/contributors/oscar.jpg"
import mei from "../../img/aboutus/contributors/mei.jpg"
import hao from "../../img/aboutus/contributors/hao.jpg"
import austin from "../../img/aboutus/contributors/austin.jpg"
import tang from "../../img/aboutus/contributors/tang.jpg"
import kong from "../../img/aboutus/contributors/kong.jpg"
import george from "../../img/aboutus/contributors/george.jpg"
import isabella from "../../img/aboutus/contributors/isabella.jpg"
import gu from "../../img/aboutus/contributors/gu.jpg"
import zenda from "../../img/aboutus/contributors/zenda.jpg"
import kaede from "../../img/aboutus/contributors/kaede.jpg"
import kaiqing from "../../img/aboutus/contributors/kaiqing.jpg"

import testImage from "../../img/aboutus/test/test.jpeg"
import facebook from "../../img/aboutus/socialmediaicon/facebook.png"
import homepage from "../../img/aboutus/socialmediaicon/homepage.png"
import instagram from "../../img/aboutus/socialmediaicon/instagram.png"
import linkedin from "../../img/aboutus/socialmediaicon/linkedin.png"
import weibo from "../../img/aboutus/socialmediaicon/sina-weibo.png"
import twitter from "../../img/aboutus/socialmediaicon/twitter.png"
import wechat from "../../img/aboutus/socialmediaicon/wechat.png"
import github from "../../img/aboutus/socialmediaicon/github.png"
import GuWeChatQRcode from "../../img/aboutus/wechatqrcode/gu-qrcode.jpg"
import email from "../../img/aboutus/socialmediaicon/email.png"


const Title = styled("h2")`
    width: 50%;
    font-weight:bold;
    font-size:1.5em;
    margin:0 auto;
    text-align:center;
    color: #444 !important;
    // background-color:green;

`;


const CardArea = styled("div")`
    width: 90%;
    margin:0 auto;
    font-size:0.9em;
    display: flex;
    // text-align: center;
    // background-color:green;
    flex-wrap:wrap;
    justify-content:space-evenly;
`;



const Card = styled("div")`
    display: flex;
    flex-direction:column;
    // justify-content:center;
    align-items: center;
    // background-color:blue;
    // border:solid;
    // float:left;
    margin: 40px 20px 20px 0px;
    width: 230px;
    // position: relative
    text-align:center;
`;

const MemberImage = styled('img')`
    // background-color:yellow;
    width:80%;
    border: white 7px solid;
    // position:relative;
    // display: inline-block;
    border-radius: 50%;
    box-shadow: 0px 0px 8px;
    
`;
const MemberName = styled('div')`
    // background-color:red;
    padding: 10px 0px 0px 0px;
    width:100%;
    font-size:1.3em;
    // border:solid red;
    text-align:center;
`;

const MemberPosition = styled('div')`
    width:100%;
    // border:solid red;
    text-align:center;
`;

const MemberVision = styled('div')`
    max-width:100%;
    // border:solid red;
    // text-align:center;
    // flex-wrap: wrap;
`;


const SocialMedia = styled('div')`
    border:solid red;
    text-align:center;
`;

const SocialMediaArea = styled('div')`
    width:100%;
    // background-color:red;
    text-align:center;
`

const MediaIcon = styled('img')`
    width:100%;
    width:1.3em;
    margin:4px;
    text-align:center;

`
const QRcode = styled('img')`
  width:2em;
`

const MeetOurTeam = ({t}) => {
    return (
        <Wrapper>
            <br></br>
            <br></br>
            <Title>Meet Our Talented Team!</Title>
            <br></br>
            <CardArea>
                
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
                        <a href="https://www.linkedin.com/in/yiming-zhu-622a98152" target="_blank">
                            <MediaIcon src={linkedin}></MediaIcon>
                        </a>
                        {/* <a href="" target="_blank">
                            <MediaIcon src={wechat}></MediaIcon>
                        </a> */}
                    </SocialMediaArea>
                </Card>

                {/* ----------------------------------Mei */}
                <Card>
                    <MemberImage src={mei}></MemberImage>
                    <MemberName>Mei</MemberName>
                    <MemberPosition>{t("aboutus.Frontend Engineer")}</MemberPosition>
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
                <Card>
                    <MemberImage src={tang}></MemberImage>
                    <MemberName>{t("aboutus.Yeping Tang")}</MemberName>
                    <MemberPosition>{t("aboutus.Frontend Engineer")}</MemberPosition>
                    <SocialMediaArea>
                        <a href="https://www.facebook.com/nero.archer.94" target="_blank">
                            <MediaIcon src={facebook}></MediaIcon>
                        </a>
                    </SocialMediaArea>
                    <MemberVision>{t("aboutus.Impressive I'm beginning to understand everything now")}</MemberVision>
                </Card>

                {/* ----------------------------------Gu */}
                <Card>
                    <MemberImage src={gu}></MemberImage>
                    <MemberName>Jiaxian Gu</MemberName>
                    <MemberPosition>{t("aboutus.Frontend Engineer")}</MemberPosition>
                    <MemberVision></MemberVision>
                    <SocialMediaArea>
                        <a href="https://www.instagram.com/jiaxiangu/" target="_blank">
                            <MediaIcon src={instagram}></MediaIcon>
                        </a>
                        <a href="mailto:gujiaxian1997@gmail.com" target="_blank">
                            <MediaIcon src={email}></MediaIcon>
                        </a>
                        <a href="https://www.faeook.com/GuJiaxian" target="_blank">
                            <MediaIcon src={facebook}></MediaIcon>
                        </a>
                    </SocialMediaArea>
                </Card>

                {/* ----------------------------------kong */}
                <Card>
                    <MemberImage src={kong}></MemberImage>
                    <MemberName>Kong</MemberName>
                    <MemberPosition>{t("aboutus.Backend Engineer")}</MemberPosition>
                    <MemberVision></MemberVision>
                    {/* <SocialMediaArea>
                        <a href="https://www.google.com" target="_blank">
                            <MediaIcon src={facebook} href="www.google.com" target="_blank"></MediaIcon>
                        </a>
                    </SocialMediaArea> */}
                </Card>
                
                {/* ----------------------------------george */}
                <Card>
                    <MemberImage src={george}></MemberImage>
                    <MemberName>George Xia</MemberName>
                    <MemberPosition>Product Management</MemberPosition>
                    <MemberVision></MemberVision>
                    {/* <SocialMediaArea>
                        <a href="https://www.google.com" target="_blank">
                            <MediaIcon src={facebook} href="www.google.com" target="_blank"></MediaIcon>
                        </a>
                    </SocialMediaArea> */}
                </Card>

                {/* ----------------------------------zenda */}
                <Card>
                    <MemberImage src={zenda}></MemberImage>
                    <MemberName>Zenda Chen</MemberName>
                    <MemberPosition>Content Creator</MemberPosition>
                    <MemberVision></MemberVision>
                    <SocialMediaArea>
                        <a href="mailto:zenda0211@fuji.waseda.jp" target="_blank">
                            <MediaIcon src={email}></MediaIcon>
                        </a>
                        <a href="https://www.instagram.com/zenda_chen/" target="_blank">
                            <MediaIcon src={instagram}></MediaIcon>
                        </a>
                    </SocialMediaArea>
                </Card>


                {/* ----------------------------------kaede */}
                <Card>
                    <MemberImage src={kaede}></MemberImage>
                    <MemberName>Kaede Iijima</MemberName>
                    <MemberPosition>{t("aboutus.Software Engineer")}</MemberPosition>
                    <MemberVision></MemberVision>
                    <SocialMediaArea>
                        <a href="https://github.com/kaedejima" target="_blank">
                            <MediaIcon src={github}></MediaIcon>
                        </a>
                        <a href="https://www.linkedin.com/in/kaede-i-619a141aa/" target="_blank">
                            <MediaIcon src={linkedin}></MediaIcon>
                        </a>
                    </SocialMediaArea>
                </Card>

                {/* ----------------------------------kaiqing */}
                <Card>
                    <MemberImage src={kaiqing}></MemberImage>
                    <MemberName>{t("aboutus.Kaiqing")}</MemberName>
                    <MemberPosition>{t("aboutus.Community Operation")}</MemberPosition>
                    <MemberVision></MemberVision>
                    <SocialMediaArea>
                        <a href=" https://instagram.com/kaiqing_chang?r=nametag" target="_blank">
                            <MediaIcon src={instagram}></MediaIcon>
                        </a>
                        <a href="https://www.linkedin.com/in/kaiqing-chang-03158b1ba/" target="_blank">
                            <MediaIcon src={linkedin}></MediaIcon>
                        </a>
                        <a href="mailto:kaiqing05@gmail.com" target="_blank">
                            <MediaIcon src={email}></MediaIcon>
                        </a>
                    </SocialMediaArea>
                </Card>

                {/* ----------------------------------Oscar */}
                <Card>
                    <MemberImage src={oscar}></MemberImage>
                    <MemberName>Oscar Wang</MemberName>
                    <MemberPosition>Founder (Alumni) </MemberPosition>
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
                        {/* <WeChatQRcode qrcode={GuWeChatQRcode}/> */}
                    </SocialMediaArea>
                </Card>

                {/* ----------------------------------isabella */}
                <Card>
                    <MemberImage src={isabella}></MemberImage>
                    <MemberName>Isabella Hu</MemberName>
                    <MemberPosition>Strategy (Alumni)</MemberPosition>
                    <MemberVision></MemberVision>
                    {/* <SocialMediaArea>
                        <a href="https://www.google.com" target="_blank">
                            <MediaIcon src={facebook} href="www.google.com" target="_blank"></MediaIcon>
                        </a>
                    </SocialMediaArea> */}
                </Card>

                
                
                <Card>
                </Card>

                <Card>
                </Card>

                <Card>
                </Card>

                <Card>
                </Card>

                <Card>
                </Card>

                <Card>
                </Card>
            </CardArea>
            <br></br>
            <br></br>

            <br></br>

        </Wrapper>
        
    );
};

export default withNamespaces("translation")(MeetOurTeam);