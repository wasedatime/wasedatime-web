import React from "react";

import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import facebook from "@app/assets/img/socialmediaicon/facebook.png";
import instagram from "@app/assets/img/socialmediaicon/instagram.png";
import linkedin from "@app/assets/img/socialmediaicon/linkedin.png";
import twitter from "@app/assets/img/socialmediaicon/twitter.png";

const Title = styled("h2")`
  width: 50%;
  font-weight: bold;
  font-size: 1.5em;
  margin: 0 auto;
  text-align: center;
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

const OrgImage = styled("img")`
  width: 80%;
  box-shadow: 0px 0px 8px;
`;
const OrgName = styled("div")`
  padding: 10px 0px 0px 0px;
  width: 100%;
  font-size: 1.3em;
  text-align: center;
`;

const MembersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const MemberWrapper = styled.div`
  flex: 1 0 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const MemberImage = styled(OrgImage)`
  width: 100px;
  height: 100px;
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

const partners = [
  {
    org: "SPSE-EDP Student Council",
    img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/spse-edp-logo.png",
    social: [
      {
        link: "https://www.facebook.com/SPSEEDPSC",
        platform: facebook,
      },
      {
        link: "https://www.instagram.com/spse_edp_student_council",
        platform: instagram,
      },
    ],
    members: [
      {
        name: "Peter Chai",
        img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/spse-edp-member1.png",
        social: [
          {
            link: "https://www.linkedin.com/in/peter-chai-233577158/",
            platform: linkedin,
          },
          {
            link: "https://www.facebook.com/siyuan.chai.77",
            platform: facebook,
          },
          {
            link: "https://twitter.com/PeterChai1013",
            platform: twitter,
          },
        ],
      },
      {
        name: "Ghafi Reyhan",
        img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/spse-edp-member2.png",
        social: [],
      },
    ],
  },
  {
    org: "CSSA",
    img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/cssa-logo.png",
    social: [
      // {
      //   url: "",
      //   icon: <FontAwesomeIcon icon={faFacebook} />
      // }
    ],
  },
  {
    org: "WaLife",
    img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/walife-logo.png",
    social: [
      // {
      //   url: "",
      //   icon: <FontAwesomeIcon icon={faFacebook} />
      // }
    ],
  },
  {
    org: "WTSA",
    img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/wtsa-logo.png",
    social: [
      {
        link: "https://www.facebook.com/WasedaTaiwaneseStudentAssociation",
        platform: facebook,
      },
      {
        link: "https://www.instagram.com/wtsa.jp",
        platform: instagram,
      },
    ],
  },
];

const Partners = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <br />
      <Title className="text-light-text1 dark:text-dark-text1">
        Collaboration Partners
      </Title>
      <br />
      <h6
        className="text-light-text1 dark:text-dark-text1"
        style={{ textAlign: "center" }}
      >
        We look forward to collaborating with more circles or organizations!
      </h6>

      <CardArea>
        {partners.map((partner) => (
          <Card key={partner.org}>
            <OrgImage
              className="border-light-bgSide dark:border-dark-bgSide border-8 border-solid rounded-full"
              src={partner.img}
            />
            <OrgName className="text-light-text1 dark:text-dark-text1">
              {partner.org}
            </OrgName>
            <SocialMediaArea>
              {partner.social.map((social) => (
                <a
                  key={social.link}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.5em", margin: "0px 0.5em" }}
                >
                  <MediaIcon src={social.platform} />
                </a>
              ))}
            </SocialMediaArea>
            <MembersWrapper>
              {partner.members &&
                partner.members.map((member) => (
                  <MemberWrapper key={member.name}>
                    <MemberImage
                      className="border-light-bgSide dark:border-dark-bgSide border-8 border-solid rounded-full"
                      src={member.img}
                    />
                    <span className="text-light-text1 dark:text-dark-text1">
                      {member.name}
                    </span>
                    <SocialMediaArea>
                      {member.social.map((social) => (
                        <a
                          key={social.link}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: "1.5em", margin: "0px 0.5em" }}
                        >
                          <MediaIcon src={social.platform} />
                        </a>
                      ))}
                    </SocialMediaArea>
                  </MemberWrapper>
                ))}
            </MembersWrapper>
          </Card>
        ))}
      </CardArea>
      <br />
    </Wrapper>
  );
};

export default Partners;
