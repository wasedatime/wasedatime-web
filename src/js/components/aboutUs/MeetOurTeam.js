import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../styled-components/Wrapper";
import { withNamespaces } from "react-i18next";

import oscar from "../../../img/aboutus/contributors/oscar.jpg";
import mei from "../../../img/aboutus/contributors/mei.jpg";
import hao from "../../../img/aboutus/contributors/hao.jpg";
import austin from "../../../img/aboutus/contributors/austin.jpg";
import tang from "../../../img/aboutus/contributors/tang.jpg";
import kong from "../../../img/aboutus/contributors/kong.jpg";
import george from "../../../img/aboutus/contributors/george.jpg";
import isabella from "../../../img/aboutus/contributors/isabella.jpg";
import gu from "../../../img/aboutus/contributors/gu.jpg";
import zenda from "../../../img/aboutus/contributors/zenda.jpg";
import kaede from "../../../img/aboutus/contributors/kaede.jpg";
import kaiqing from "../../../img/aboutus/contributors/kaiqing.jpg";
import zhaohuaibo from "../../../img/aboutus/contributors/zhaohuaibo.jpg";
import hatori from "../../../img/aboutus/contributors/hatori.jpg";
import yaoyuan from "../../../img/aboutus/contributors/yaoyuan.jpg";
import naomi from "../../../img/aboutus/contributors/naomi.jpg";

import facebook from "../../../img/aboutus/socialmediaicon/facebook.png";
import homepage from "../../../img/aboutus/socialmediaicon/homepage.png";
import instagram from "../../../img/aboutus/socialmediaicon/instagram.png";
import linkedin from "../../../img/aboutus/socialmediaicon/linkedin.png";
import weibo from "../../../img/aboutus/socialmediaicon/sina-weibo.png";
import twitter from "../../../img/aboutus/socialmediaicon/twitter.png";
import github from "../../../img/aboutus/socialmediaicon/github.png";
import email from "../../../img/aboutus/socialmediaicon/email.png";

const Title = styled("h2")`
  width: 50%;
  font-weight: bold;
  font-size: 1.5em;
  margin: 0 auto;
  text-align: center;
  color: #444 !important;
  // background-color:green;
`;

const CardArea = styled("div")`
  width: 90%;
  margin: 0 auto;
  font-size: 0.9em;
  display: flex;
  // text-align: center;
  // background-color:green;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Card = styled("div")`
  display: flex;
  flex-direction: column;
  // justify-content:center;
  align-items: center;
  // background-color:blue;
  // border:solid;
  // float:left;
  margin: 40px 20px 20px 0px;
  width: 230px;
  // position: relative
  text-align: center;
`;

const MemberImage = styled("img")`
  // background-color:yellow;
  width: 80%;
  border: white 7px solid;
  // position:relative;
  // display: inline-block;
  border-radius: 50%;
  box-shadow: 0px 0px 8px;
`;
const MemberName = styled("div")`
  // background-color:red;
  padding: 10px 0px 0px 0px;
  width: 100%;
  font-size: 1.3em;
  // border:solid red;
  text-align: center;
`;

const MemberPosition = styled("div")`
  width: 100%;
  // border:solid red;
  text-align: center;
`;

const MemberVision = styled("div")`
  max-width: 100%;
  // border:solid red;
  // text-align:center;
  // flex-wrap: wrap;
`;

const SocialMediaArea = styled("div")`
  width: 100%;
  // background-color:red;
  text-align: center;
`;

const MediaIcon = styled("img")`
  width: 100%;
  width: 1.3em;
  margin: 4px;
  text-align: center;
`;

const MeetOurTeam = ({ t }) => {
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

          <SocialMediaArea>
            <a
              href="https://github.com/YHhaoareyou"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={github}></MediaIcon>
            </a>
            <a
              href="https://www.facebook.com/hao8711/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={facebook}></MediaIcon>
            </a>
            <a
              href="https://www.instagram.com/yh_hao_are_you/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram}></MediaIcon>
            </a>
          </SocialMediaArea>
          <MemberVision>WasedaTime, a better Waseda life</MemberVision>
        </Card>

        {/* ----------------------------------Austin */}
        <Card>
          <MemberImage src={austin}></MemberImage>
          <MemberName>Austin Zhu</MemberName>
          <MemberPosition>Project Co-leader</MemberPosition>
          <SocialMediaArea>
            <a
              href="https://www.instagram.com/austinzhu123/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram}></MediaIcon>
            </a>
            <a
              href="https://austinzhu.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={homepage}></MediaIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/yiming-zhu-622a98152"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={linkedin}></MediaIcon>
            </a>
            {/* <a href="" target="_blank" rel="noopener noreferrer">
                            <MediaIcon src={wechat}></MediaIcon>
                        </a> */}
          </SocialMediaArea>
          <MemberVision>WasedaTime is gonna be legendary.</MemberVision>
        </Card>

        {/* ----------------------------------Mei */}
        <Card>
          <MemberImage src={mei}></MemberImage>
          <MemberName>Mei</MemberName>
          <MemberPosition>Frontend Engineer</MemberPosition>
          {/* <MemberPosition>{t("aboutus.Frontend Engineer")}</MemberPosition> */}
          <MemberVision></MemberVision>
          <SocialMediaArea>
            <a
              href="https://twitter.com/Rimei9623"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={twitter}></MediaIcon>
            </a>
            <a
              href="https://www.instagram.com/limengmmmm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram}></MediaIcon>
            </a>
            <a
              href="https://www.weibo.com/u/5000065316/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={weibo}></MediaIcon>
            </a>
          </SocialMediaArea>
        </Card>

        {/* ----------------------------------Tang */}
        <Card>
          <MemberImage src={tang}></MemberImage>
          <MemberName>Yeping Tang</MemberName>
          {/* <MemberName>{t("aboutus.Yeping Tang")}</MemberName> */}
          <MemberPosition>Frontend Engineer</MemberPosition>
          <SocialMediaArea>
            <a
              href="https://www.facebook.com/nero.archer.94"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={facebook}></MediaIcon>
            </a>
          </SocialMediaArea>
          <MemberVision>
            {t("aboutus.Impressive I'm beginning to understand everything now")}
          </MemberVision>
        </Card>

        {/* ----------------------------------Gu */}
        <Card>
          <MemberImage src={gu}></MemberImage>
          <MemberName>Jiaxian Gu</MemberName>
          <MemberPosition>Frontend Engineer</MemberPosition>

          <SocialMediaArea>
            <a
              href="https://www.instagram.com/jiaxiangu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram}></MediaIcon>
            </a>
            <a
              href="mailto:gujiaxian1997@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={email}></MediaIcon>
            </a>
            <a
              href="https://www.faeook.com/GuJiaxian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={facebook}></MediaIcon>
            </a>
          </SocialMediaArea>
          <MemberVision>Think different</MemberVision>
        </Card>

        {/* ----------------------------------kong */}
        <Card>
          <MemberImage src={kong}></MemberImage>
          <MemberName>Kong</MemberName>
          <MemberPosition>Backend Engineer</MemberPosition>
          <MemberVision></MemberVision>
          {/* <SocialMediaArea>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <MediaIcon src={facebook} href="www.google.com" target="_blank" rel="noopener noreferrer"></MediaIcon>
                        </a>
                    </SocialMediaArea> */}
        </Card>

        {/* ----------------------------------george */}
        <Card>
          <MemberImage src={george}></MemberImage>
          <MemberName>George Xia</MemberName>
          <MemberPosition>Product Manager</MemberPosition>
          <MemberVision></MemberVision>
          {/* <SocialMediaArea>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <MediaIcon src={facebook} href="www.google.com" target="_blank" rel="noopener noreferrer"></MediaIcon>
                        </a>
                    </SocialMediaArea> */}
        </Card>

        {/* ----------------------------------zenda */}
        <Card>
          <MemberImage src={zenda}></MemberImage>
          <MemberName>Zenda Chen</MemberName>
          <MemberPosition>Marketing</MemberPosition>
          <MemberVision></MemberVision>
          <SocialMediaArea>
            <a
              href="mailto:zenda0211@fuji.waseda.jp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={email}></MediaIcon>
            </a>
            <a
              href="https://www.instagram.com/zenda_chen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram}></MediaIcon>
            </a>
          </SocialMediaArea>
        </Card>

        {/* ----------------------------------kaede */}
        <Card>
          <MemberImage src={kaede}></MemberImage>
          <MemberName>Kaede Iijima</MemberName>
          <MemberPosition>Software Engineer</MemberPosition>
          <MemberVision></MemberVision>
          <SocialMediaArea>
            <a
              href="https://github.com/kaedejima"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={github}></MediaIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/kaede-i-619a141aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={linkedin}></MediaIcon>
            </a>
          </SocialMediaArea>
        </Card>

        {/* ----------------------------------kaiqing */}
        <Card>
          <MemberImage src={kaiqing}></MemberImage>
          <MemberName>Kaiqing</MemberName>
          <MemberPosition>Marketing</MemberPosition>
          <MemberVision></MemberVision>
          <SocialMediaArea>
            <a
              href=" https://instagram.com/kaiqing_chang?r=nametag"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram}></MediaIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/kaiqing-chang-03158b1ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={linkedin}></MediaIcon>
            </a>
            <a
              href="mailto:kaiqing05@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={email}></MediaIcon>
            </a>
          </SocialMediaArea>
        </Card>

        {/* ----------------------------------Hatori */}
        <Card>
          <MemberImage src={hatori}></MemberImage>
          <MemberName>Zhen Chao</MemberName>
          <MemberPosition>Frontend Engineer</MemberPosition>
          <SocialMediaArea>
            <a
              href="https://www.linkedin.com/in/%E8%87%BB-%E6%9B%B9-771718186/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={linkedin}></MediaIcon>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100023624678107"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={facebook}></MediaIcon>
            </a>
          </SocialMediaArea>
          <MemberVision>{t("aboutus.seize the day")}</MemberVision>
        </Card>

        {/* ----------------------------------yaoyuan */}
        <Card>
          <MemberImage src={yaoyuan}></MemberImage>
          <MemberName>Yuan Yao</MemberName>
          <MemberPosition>Backend Engineer</MemberPosition>
          <MemberVision></MemberVision>
          <SocialMediaArea>
            <a
              href="https://github.com/youenn98/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={github}></MediaIcon>
            </a>
          </SocialMediaArea>
        </Card>

        {/* ----------------------------------zhaohuaibo */}
        <Card>
          <MemberImage src={zhaohuaibo}></MemberImage>
          <MemberName>Huaibo Zhao</MemberName>
          <MemberPosition>Frontend Engineer</MemberPosition>

          <SocialMediaArea>
            <a
              href="mailto:huaibozhao3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={email}></MediaIcon>
            </a>
          </SocialMediaArea>
          <MemberVision>
            For those who are or will be a member of Waseda university, I hope
            our project will add more joy to your campus life.
          </MemberVision>
        </Card>

        {/* ----------------------------------naomi */}
        <Card>
          <MemberImage src={naomi}></MemberImage>
          <MemberName>Naomi Shen</MemberName>
          <MemberPosition>Marketing</MemberPosition>

          <SocialMediaArea>
            <a
              href="https://www.instagram.com/naomi.shen.1088/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram}></MediaIcon>
            </a>
          </SocialMediaArea>
          <MemberVision>Potato life is da best life</MemberVision>
        </Card>

        {/* ----------------------------------Oscar */}
        <Card>
          <MemberImage src={oscar}></MemberImage>
          <MemberName>Oscar Wang</MemberName>
          <MemberPosition>Founder (Alumni) </MemberPosition>
          <MemberVision></MemberVision>
          <SocialMediaArea>
            <a
              href="https://github.com/oscarwang114"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={github}></MediaIcon>
            </a>
            <a
              href="https://twitter.com/OscarWang114"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={twitter}></MediaIcon>
            </a>
            <a
              href="https://www.facebook.com/haohaowang.oscar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={facebook}></MediaIcon>
            </a>
          </SocialMediaArea>
        </Card>

        {/* ----------------------------------isabella */}
        <Card>
          <MemberImage src={isabella}></MemberImage>
          <MemberName>Isabella Hu</MemberName>
          <MemberPosition>Strategy (Alumni)</MemberPosition>
          <MemberVision></MemberVision>
          {/* <SocialMediaArea>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <MediaIcon src={facebook} href="www.google.com" target="_blank" rel="noopener noreferrer"></MediaIcon>
                        </a>
                    </SocialMediaArea> */}
        </Card>

        <Card></Card>

        <Card></Card>

        <Card></Card>

        <Card></Card>

        <Card></Card>

        <Card></Card>
      </CardArea>
      <br></br>
      <br></br>

      <br></br>
    </Wrapper>
  );
};

export default withNamespaces("translation")(MeetOurTeam);