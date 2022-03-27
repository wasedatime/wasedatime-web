import React from "react";

import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import {
  AlumniList,
  CurrentList,
  Members,
} from "@app/components/aboutUs/MeetOurTeam/memberList";

const Title = styled("h2")`
  width: 50%;
  font-weight: bold;
  font-size: 1.5em;
  margin: 0 auto;
  text-align: center;
`;

const SubTitle = styled("h2")`
  width: 50%;
  font-weight: bold;
  font-size: 1.3em;
  margin: 5px auto;
  text-align: center;
`;

const CardArea = styled("div")`
  width: 90%;
  margin: 0px auto;
  padding: 10px 100px;
  font-size: 0.9em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Card = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 30px 30px;
  width: 230px;
  text-align: center;
`;

const MemberImage = styled("img")`
  width: 80%;
  /* border-radius: 50%; */
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

const MemberCard = ({
  image,
  name,
  position,
  socials,
  profileText,
}: Members) => (
  <Card>
    <MemberImage
      className="border-light-bgSide dark:border-dark-bgSide border-8 border-solid rounded-full"
      src={image}
    />
    <MemberName className="text-light-text1 dark:text-dark-text1">
      {name}
    </MemberName>
    <MemberPosition className="text-light-text1 dark:text-dark-text1">
      {position}
    </MemberPosition>

    {socials && (
      <SocialMediaArea>
        {socials.map((social) => (
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            <MediaIcon src={social.platform} />
          </a>
        ))}
      </SocialMediaArea>
    )}
    {profileText && (
      <MemberVision className="text-light-text2 dark:text-dark-text2">
        {profileText}
      </MemberVision>
    )}
  </Card>
);

const MeetOurTeam = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <br />
      <Title className="text-light-text1 dark:text-dark-text1">
        Meet Our Talented Team!
      </Title>
      <br />
      <SubTitle className="text-light-text1 dark:text-dark-text1">
        Current Members
      </SubTitle>
      <CardArea>
        {CurrentList.map((member) => (
          <MemberCard
            image={member.image}
            name={member.name}
            position={member.position}
            socials={member.socials}
            profileText={member.profileText}
          />
        ))}
      </CardArea>
      <br />

      <br />
      <SubTitle className="text-light-text1 dark:text-dark-text1">
        Our Alumni
      </SubTitle>
      <CardArea>
        {AlumniList.map((member) => (
          <MemberCard
            image={member.image}
            name={member.name}
            position={member.position}
            socials={member.socials}
            profileText={member.profileText}
          />
        ))}
      </CardArea>
    </Wrapper>
  );
};

export default MeetOurTeam;
