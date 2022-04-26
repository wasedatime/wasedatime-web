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
  margin: 30px 15px;
  width: 280px;
  text-align: center;
`;

// const MemberImage = styled("img")`
//   width: 80%;
//   /* border-radius: 50%; */
//   box-shadow: 0px 0px 8px;
// `;
// const MemberName = styled("div")`
//   padding: 10px 0px 0px 0px;
//   width: 100%;
//   font-size: 1.3em;
//   text-align: center;
// `;

// const MemberPosition = styled("div")`
//   width: 100%;
//   text-align: center;
// `;

// const MemberVision = styled("div")`
//   max-width: 100%;
// `;

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
  positions,
  socials,
  profileText,
}: Members) => (
  <Card>
    <a className="block group" href="#">
      {/* Card: pic + hidden card-body +  Name */}
      <div
        className="card w-auto bg-transparent relative pl-2 py-4
      group-hover:card-side group-hover:mx-[30px] group-hover:rounded-8xl
      group-hover:bg-gradient-to-r group-hover:from-slate-100 group-hover:via-slate-50 group-hover:to-transparent
      dark:group-hover:bg-gradient-to-r dark:group-hover:from-dark-card2 
      group-hover:drop-shadow-lg dark:group-hover:drop-shadow-lg dark:group-hover:shadow-gray-600"
      >
        {/* Profile pic */}
        <figure className="pl-3">
          <img
            className="mask mask-squircle object-cover w-[200px] h-[200px] opacity-100 transition-opacity group-hover:drop-shadow-none"
            src={image}
          />
        </figure>

        <div className="card-body items-left text-left w-[260px] hidden group-hover:block transition ease-in-out delay-300ms transition-duration: 1500ms group-hover:filter-none">
          <div className="opacity-0  group-hover:opacity-100 ">
            {/* Name */}
            <p className="card-title font-bold text-3xl text-slate-800 dark:text-dark-text1 mx-1 py-3">
              {name}
            </p>
            {/* Position */}
            <div className="justify-start text-left inline-block w-[280px] drop-shadow-none	">
              {positions &&
                positions.map((position) => (
                  <div
                    className="badge bg-gray-200 font-normal text-xl border-transparent text-slate-500 h-10 mr-1.5
                    dark:text-dark-text2 dark:bg-dark-card2 w-auto"
                  >
                    {position.position}
                  </div>
                ))}
            </div>

            {/* Profile Text */}
            <p className="justify-start font-medium text-xl text-slate-600 dark:text-dark-text2 pt-2.5 pr-1 mx-1 w-auto leading-normal ">
              {profileText}
            </p>

            {/* Socials */}
            <div className="justify-start inline-block mx-1 py-2">
              {socials && (
                <SocialMediaArea>
                  {socials.map((social) => (
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MediaIcon src={social.platform} />
                    </a>
                  ))}
                </SocialMediaArea>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Name below the card*/}
      <p className="text-center font-bold text-3xl text-slate-800 py-1 dark:text-dark-text1 group-hover:hidden">
        {name}
      </p>
    </a>
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
            positions={member.positions}
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
            positions={member.positions}
            socials={member.socials}
            profileText={member.profileText}
          />
        ))}
      </CardArea>
      <br />
    </Wrapper>
  );
};

export default MeetOurTeam;
