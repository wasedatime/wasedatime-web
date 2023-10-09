import React, { useEffect, useState } from "react"

import { Wrapper } from "wasedatime-ui"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

import {
  CurrentList,
  AlumniList,
} from "@app/components/aboutUs/MeetOurTeam/memberList"

import { ProfileCard } from "@app/components/block/ProfileCard"

const Title = styled("h2")`
  font-weight: bold;
  text-align: center;
`

const SubTitle = styled("h2")`
  font-weight: bold;
  margin: 10px auto;
  text-align: center;
`

const CardArea = styled("div")`
  width: 80%;
  margin: 0px auto 40px auto;
  font-size: 0.9em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const MeetOurTeam = () => {
  const { t } = useTranslation()
  const [activeCardName, setActiveCardName] = useState("")

  return (
    <Wrapper>
      <Title className="mt-3.5 mb-2.5 text-3xl text-light-text1 dark:text-dark-text1 sm:my-5 sm:text-4xl 2xl:text-5xl">
        Meet Our Talented Team!
      </Title>
      <SubTitle className="my-1.5 text-2xl text-light-text1 dark:text-dark-text1 sm:my-5 sm:text-3xl 2xl:text-4xl">
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

      <SubTitle className="my-1.5 text-2xl text-light-text1 dark:text-dark-text1 sm:my-5 sm:text-3xl 2xl:text-4xl">
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
  )
}

export default MeetOurTeam
