import React, { useEffect, useState } from "react";

import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import {
  CurrentList,
  AlumniList,
} from "@app/components/aboutUs/MeetOurTeam/memberList";

import { ProfileCard } from "@app/components/block/ProfileCard";

const Title = styled("h2")`
  font-weight: bold;
  text-align: center;
`;

const SubTitle = styled("h2")`
  font-weight: bold;
  margin: 10px auto;
  text-align: center;
`;

const CardArea = styled("div")`
  width: 80%;
  margin: 0px auto 40px auto;
  font-size: 0.9em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const MeetOurTeam = () => {
  const { t } = useTranslation();
  const [activeCardName, setActiveCardName] = useState("");

  useEffect(() => {
    console.log(activeCardName);
  }, [activeCardName]);

  return (
    <Wrapper>
      <Title className="mt-3.5 mb-2.5 sm:my-5 text-3xl sm:text-4xl 2xl:text-5xl text-light-text1 dark:text-dark-text1">
        Meet Our Talented Team!
      </Title>
      <SubTitle className="my-1.5 sm:my-5 text-2xl sm:text-3xl 2xl:text-4xl text-light-text1 dark:text-dark-text1">
        Current Members
      </SubTitle>
      <CardArea>
        {CurrentList.map((member) => (
          <ProfileCard
            image={member.image}
            name={member.name}
            positions={member.positions}
            socials={member.socials}
            profileText={member.profileText}
            isOpen={activeCardName !== "" && member.name === activeCardName}
            onClick={() => setActiveCardName(member.name)}
            onClose={() => setActiveCardName("")}
          />
        ))}
      </CardArea>

      <SubTitle className="my-1.5 sm:my-5 text-2xl sm:text-3xl 2xl:text-4xl text-light-text1 dark:text-dark-text1">
        Our Alumni
      </SubTitle>
      <CardArea>
        {AlumniList.map((member) => (
          <ProfileCard
            image={member.image}
            name={member.name}
            positions={member.positions}
            socials={member.socials}
            profileText={member.profileText}
            onClick={() => setActiveCardName(member.name)}
            onClose={() => setActiveCardName("")}
            isOpen={member.name === activeCardName}
          />
        ))}
      </CardArea>
    </Wrapper>
  );
};

export default MeetOurTeam;
