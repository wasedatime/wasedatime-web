import React from "react";
import styled from "styled-components";
import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

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

const OrgImage = styled("img")`
  width: 80%;
  border: white 7px solid;
  border-radius: 50%;
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

const partners = [
  {
    org: "SPSE-EDP Student Council",
    img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/spse-edp-logo.JPG",
    links: [
      {
        url: "https://www.facebook.com/SPSEEDPSC",
        icon: <FontAwesomeIcon icon={faFacebook} />
      },
      {
        url: "https://www.instagram.com/spse_edp_student_council",
        icon: <FontAwesomeIcon icon={faInstagram} />
      }
    ],
    members: [
      {
        name: "Peter Chai",
        img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/spse-edp-member1.jpg",
        links: [
          {
            url: "https://www.linkedin.com/in/peter-chai-233577158/",
            icon: <FontAwesomeIcon icon={faLinkedin} />
          },
          {
            url: "https://www.facebook.com/siyuan.chai.77",
            icon: <FontAwesomeIcon icon={faFacebook} />
          },
          {
            url: "https://twitter.com/PeterChai1013",
            icon: <FontAwesomeIcon icon={faTwitter} />
          }
        ]
      },
      {
        name: "Ghafi Reyhan",
        img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/spse-edp-member2.jpg",
        links: []
      }
    ]
  },
  {
    org: "CSSA",
    img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/cssa-logo.jpg",
    links: [
      // {
      //   url: "",
      //   icon: <FontAwesomeIcon icon={faFacebook} />
      // }
    ]
  },
  {
    org: "WaLife",
    img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/walife-logo.jpg",
    links: [
      // {
      //   url: "",
      //   icon: <FontAwesomeIcon icon={faFacebook} />
      // }
    ]
  },
  {
    org: "WTSA",
    img: "https://wasedatime-partners.s3-ap-northeast-1.amazonaws.com/wtsa-logo.jpg",
    links: [
      {
        url: "https://www.facebook.com/WasedaTaiwaneseStudentAssociation",
        icon: <FontAwesomeIcon icon={faFacebook} />
      },
      {
        url: "https://www.instagram.com/wtsa.jp",
        icon: <FontAwesomeIcon icon={faInstagram} />
      }
    ]
  }
]

const Partners = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>Collaboration Partners</Title>
      
      <CardArea>
        {
          partners.map(partner => (
            <Card key={partner.org}>
              <OrgImage src={partner.img}></OrgImage>
              <OrgName>{partner.org}</OrgName>
              <SocialMediaArea>
                {
                  partner.links.map(link => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "1.5em", margin: "0px 0.5em" }}
                    >
                      {link.icon}
                    </a>
                  ))
                }
              </SocialMediaArea>
              <MembersWrapper>
                {
                  partner.members && partner.members.map(member => (
                    <MemberWrapper key={member.name}>
                      <MemberImage src={member.img} />
                      <span>{member.name}</span>
                      <SocialMediaArea>
                        {
                          member.links.map(link => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ fontSize: "1.5em", margin: "0px 0.5em" }}
                            >
                              {link.icon}
                            </a>
                          ))
                        }
                      </SocialMediaArea>
                    </MemberWrapper>
                  ))
                }
              </MembersWrapper>
            </Card>
          ))
        }
      </CardArea>
    </Wrapper>
  );
};

export default Partners;
