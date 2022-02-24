import React from "react";

import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import {
  Members,
  CurrentList,
  AlumniList,
} from "@app/components/aboutUs/MeetOurTeam/memberList";

const Title = styled("h2")`
  width: 50%;
  font-weight: bold;
  font-size: 1.5em;
  margin: 0 auto;
  text-align: center;
  color: #444 !important;
`;

const SubTitle = styled("h2")`
  width: 50%;
  font-weight: bold;
  font-size: 1.3em;
  margin: 5px auto;
  text-align: center;
  color: #666 !important;
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

const MemberCard = ({
  image,
  name,
  position,
  socials,
  profileText,
}: Members) => (
  <Card>
    <MemberImage src={image} />
    <MemberName>{name}</MemberName>
    <MemberPosition>{position}</MemberPosition>

    {socials && (
      <SocialMediaArea>
        {socials.map((social) => (
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            <MediaIcon src={social.platform} />
          </a>
        ))}
      </SocialMediaArea>
    )}
    {profileText && <MemberVision>{profileText}</MemberVision>}
  </Card>
);

const MeetOurTeam = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <br />
      <Title>Meet Our Talented Team!</Title>
      <br />
      <SubTitle>Current Members</SubTitle>
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
      <br/>  
      
      <br/>
      <SubTitle>Our Alumni</SubTitle>
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
