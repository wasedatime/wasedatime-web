import React from "react";

import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import alina from "../../assets/img/contributors/alina.jpg";
import austin from "../../assets/img/contributors/austin.jpg";
import george from "../../assets/img/contributors/george.jpg";
import gu from "../../assets/img/contributors/gu.jpg";
import hao from "../../assets/img/contributors/hao.jpg";
import hatori from "../../assets/img/contributors/hatori.jpg";
import isabella from "../../assets/img/contributors/isabella.jpg";
import kaede from "../../assets/img/contributors/kaede.jpg";
import kaiqing from "../../assets/img/contributors/kaiqing.jpg";
import kong from "../../assets/img/contributors/kong.jpg";
import mei from "../../assets/img/contributors/mei.jpg";
import naomi from "../../assets/img/contributors/naomi.jpg";
import oscar from "../../assets/img/contributors/oscar.jpg";
import tang from "../../assets/img/contributors/tang.jpg";
import yaoyuan from "../../assets/img/contributors/yaoyuan.jpg";
import zenda from "../../assets/img/contributors/zenda.jpg";
import zhaohuaibo from "../../assets/img/contributors/zhaohuaibo.jpg";
import email from "../../assets/img/socialmediaicon/email.png";
import facebook from "../../assets/img/socialmediaicon/facebook.png";
import github from "../../assets/img/socialmediaicon/github.png";
import homepage from "../../assets/img/socialmediaicon/homepage.png";
import instagram from "../../assets/img/socialmediaicon/instagram.png";
import linkedin from "../../assets/img/socialmediaicon/linkedin.png";
import weibo from "../../assets/img/socialmediaicon/sina-weibo.png";
import twitter from "../../assets/img/socialmediaicon/twitter.png";

const Title = styled("h2")`
  width: 50%;
  font-weight: bold;
  font-size: 1.5em;
  margin: 0 auto;
  text-align: center;
  color: #444 !important;
`;

const CardArea = styled("div")`
  width: 90%;
  margin: 0 auto;
  font-size: 0.9em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Card = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 20px 20px 0px;
  width: 230px;
  text-align: center;
`;

const MemberImage = styled("img")`
  width: 80%;
  border: white 7px solid;
  border-radius: 50%;
  box-shadow: 0px 0px 8px;
`;
const MemberName = styled("div")`
  padding: 10px 0px 0px 0px;
  width: 100%;
  font-size: 1.3em;
  text-align: center;
`;

const MemberPosition = styled("div")`
  width: 100%;
  text-align: center;
`;

const MemberVision = styled("div")`
  max-width: 100%;
`;

const SocialMediaArea = styled("div")`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MediaIcon = styled("img")`
  width: 100%;
  width: 1.3em;
  margin: 4px;
  text-align: center;
`;

const MeetOurTeam = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <br />
      <Title>Meet Our Talented Team!</Title>
      <br />
      <CardArea>
        {/* ----------------------------------Hao */}
        <Card>
          <MemberImage src={hao} />
          <MemberName>Hao</MemberName>
          <MemberPosition>Project Leader</MemberPosition>

          <SocialMediaArea>
            <a
              href="https://github.com/YHhaoareyou"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={github} />
            </a>
            <a
              href="https://www.facebook.com/hao8711/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={facebook} />
            </a>
            <a
              href="https://www.instagram.com/yh_hao_are_you/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram} />
            </a>
          </SocialMediaArea>
          <MemberVision>WasedaTime, a better Waseda life</MemberVision>
        </Card>

        {/* ----------------------------------Austin */}
        <Card>
          <MemberImage src={austin} />
          <MemberName>Austin Zhu</MemberName>
          <MemberPosition>Project Co-leader</MemberPosition>
          <SocialMediaArea>
            <a
              href="https://www.instagram.com/austinzhu123/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram} />
            </a>
            <a
              href="https://austinzhu.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={homepage} />
            </a>
            <a
              href="https://www.linkedin.com/in/yiming-zhu-622a98152"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={linkedin} />
            </a>
            {/* <a href="" target="_blank" rel="noopener noreferrer">
                            <MediaIcon src={wechat}></MediaIcon>
                        </a> */}
          </SocialMediaArea>
          <MemberVision>WasedaTime is gonna be legendary.</MemberVision>
        </Card>

        {/* ----------------------------------Mei */}
        <Card>
          <MemberImage src={mei} />
          <MemberName>Mei</MemberName>
          <MemberPosition>Frontend Engineer</MemberPosition>
          {/* <MemberPosition>{t("aboutus.Frontend Engineer")}</MemberPosition> */}
          <MemberVision />
          <SocialMediaArea>
            <a
              href="https://twitter.com/Rimei9623"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={twitter} />
            </a>
            <a
              href="https://www.instagram.com/limengmmmm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram} />
            </a>
            <a
              href="https://www.weibo.com/u/5000065316/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={weibo} />
            </a>
          </SocialMediaArea>
        </Card>

        {/* ----------------------------------Tang */}
        <Card>
          <MemberImage src={tang} />
          <MemberName>Yeping Tang</MemberName>
          {/* <MemberName>{t("aboutus.Yeping Tang")}</MemberName> */}
          <MemberPosition>Frontend Engineer</MemberPosition>
          <SocialMediaArea>
            <a
              href="https://www.facebook.com/nero.archer.94"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={facebook} />
            </a>
          </SocialMediaArea>
          <MemberVision>
            {t("aboutus.Impressive I'm beginning to understand everything now")}
          </MemberVision>
        </Card>

        {/* ----------------------------------Gu */}
        <Card>
          <MemberImage src={gu} />
          <MemberName>Jiaxian Gu</MemberName>
          <MemberPosition>Frontend Engineer</MemberPosition>

          <SocialMediaArea>
            <a
              href="https://www.instagram.com/jiaxiangu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram} />
            </a>
            <a
              href="mailto:gujiaxian1997@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={email} />
            </a>
            <a
              href="https://www.faeook.com/GuJiaxian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={facebook} />
            </a>
          </SocialMediaArea>
          <MemberVision>Think different</MemberVision>
        </Card>

        {/* ----------------------------------george */}
        <Card>
          <MemberImage src={george} />
          <MemberName>George Xia</MemberName>
          <MemberPosition>Product Manager</MemberPosition>
          <MemberVision />
          {/* <SocialMediaArea>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <MediaIcon src={facebook} href="www.google.com" target="_blank" rel="noopener noreferrer"></MediaIcon>
                        </a>
                    </SocialMediaArea> */}
        </Card>

        {/* ----------------------------------zenda */}
        <Card>
          <MemberImage src={zenda} />
          <MemberName>Zenda Chen</MemberName>
          <MemberPosition>Marketing</MemberPosition>
          <MemberVision />
          <SocialMediaArea>
            <a
              href="mailto:zenda0211@fuji.waseda.jp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={email} />
            </a>
            <a
              href="https://www.instagram.com/zenda_chen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram} />
            </a>
          </SocialMediaArea>
        </Card>

        {/* ----------------------------------kaede */}
        <Card>
          <MemberImage src={kaede} />
          <MemberName>Kaede Iijima</MemberName>
          <MemberPosition>Software Engineer</MemberPosition>
          <MemberVision />
          <SocialMediaArea>
            <a
              href="https://github.com/kaedejima"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={github} />
            </a>
            <a
              href="https://www.linkedin.com/in/kaede-i-619a141aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={linkedin} />
            </a>
          </SocialMediaArea>
        </Card>

        {/* ----------------------------------kaiqing */}
        <Card>
          <MemberImage src={kaiqing} />
          <MemberName>Kaiqing</MemberName>
          <MemberPosition>Marketing</MemberPosition>
          <MemberVision />
          <SocialMediaArea>
            <a
              href=" https://instagram.com/kaiqing_chang?r=nametag"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/kaiqing-chang-03158b1ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={linkedin} />
            </a>
            <a
              href="mailto:kaiqing05@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={email} />
            </a>
          </SocialMediaArea>
        </Card>

        {/* ----------------------------------Hatori */}
        <Card>
          <MemberImage src={hatori} />
          <MemberName>Zhen Cao</MemberName>
          <MemberPosition>Frontend Engineer</MemberPosition>
          <SocialMediaArea>
            <a
              href="https://www.linkedin.com/in/%E8%87%BB-%E6%9B%B9-771718186/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={linkedin} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100023624678107"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={facebook} />
            </a>
          </SocialMediaArea>
          <MemberVision>{t("aboutus.seize the day")}</MemberVision>
        </Card>

        {/* ----------------------------------yaoyuan */}
        <Card>
          <MemberImage src={yaoyuan} />
          <MemberName>Yuan Yao</MemberName>
          <MemberPosition>Backend Engineer</MemberPosition>
          <MemberVision />
          <SocialMediaArea>
            <a
              href="https://github.com/youenn98/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={github} />
            </a>
          </SocialMediaArea>
        </Card>

        {/* ----------------------------------zhaohuaibo */}
        <Card>
          <MemberImage src={zhaohuaibo} />
          <MemberName>Huaibo Zhao</MemberName>
          <MemberPosition>Frontend Engineer</MemberPosition>

          <SocialMediaArea>
            <a
              href="mailto:huaibozhao3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={email} />
            </a>
          </SocialMediaArea>
          <MemberVision>
            For those who are or will be a member of Waseda university, I hope
            our project will add more joy to your campus life.
          </MemberVision>
        </Card>

        {/* ----------------------------------naomi */}
        <Card>
          <MemberImage src={naomi} />
          <MemberName>Naomi Shen</MemberName>
          <MemberPosition>Backend Apprentice</MemberPosition>

          <SocialMediaArea>
            <a
              href="https://www.instagram.com/naomi.shen.1088/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram} />
            </a>
          </SocialMediaArea>
          <MemberVision>Potato life is da best life</MemberVision>
        </Card>

        {/* ----------------------------------alina */}
        <Card>
          <MemberImage src={alina} />
          <MemberName>Alina Kenny</MemberName>
          <MemberPosition>Business</MemberPosition>
          <SocialMediaArea>
            <a
              href="https://www.instagram.com/alina_kenny119/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={instagram} href="www.google.com" />
            </a>
          </SocialMediaArea>
          <MemberVision>Dream, believe, and achieve!</MemberVision>
        </Card>

        {/* ----------------------------------kong */}
        <Card>
          <MemberImage src={kong} />
          <MemberName>Kong</MemberName>
          <MemberPosition>Contributor</MemberPosition>
          <MemberVision />
          {/* <SocialMediaArea>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                  <MediaIcon src={facebook} href="www.google.com" target="_blank" rel="noopener noreferrer"></MediaIcon>
              </a>
          </SocialMediaArea> */}
        </Card>

        {/* ----------------------------------Oscar */}
        <Card>
          <MemberImage src={oscar} />
          <MemberName>Oscar Wang</MemberName>
          <MemberPosition>Founder (Alumni) </MemberPosition>
          <MemberVision />
          <SocialMediaArea>
            <a
              href="https://github.com/oscarwang114"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={github} />
            </a>
            <a
              href="https://twitter.com/OscarWang114"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={twitter} />
            </a>
            <a
              href="https://www.facebook.com/haohaowang.oscar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediaIcon src={facebook} />
            </a>
          </SocialMediaArea>
        </Card>

        {/* ----------------------------------isabella */}
        <Card>
          <MemberImage src={isabella} />
          <MemberName>Isabella Hu</MemberName>
          <MemberPosition>Strategy (Alumni)</MemberPosition>
          <MemberVision />
          {/* <SocialMediaArea>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <MediaIcon src={facebook} href="www.google.com" target="_blank" rel="noopener noreferrer"></MediaIcon>
                        </a>
                    </SocialMediaArea> */}
        </Card>

        <Card />

        <Card />

        <Card />

        <Card />

        <Card />

        <Card />
      </CardArea>
      <br />
      <br />

      <br />
    </Wrapper>
  );
};

export default MeetOurTeam;
