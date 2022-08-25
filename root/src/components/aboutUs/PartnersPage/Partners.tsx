import React from "react";

import { Wrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { PartnerList } from "@app/components/aboutUs/PartnersPage/PartnerList";

import { ProfileCard } from "@app/components/block/ProfileCard";

const Title = styled("h2")`
  width: 50%;
  font-weight: bold;
  font-size: 1.5em;
  margin: 0 auto;
  text-align: center;
`;

const CardArea = styled("div")`
  width: 80%;
  margin: 0 auto;
  font-size: 0.9em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const CollaborationPartners = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title className="text-light-text1 dark:text-dark-text1">
        Collaboration Partners
      </Title>
      <h6
        className="text-light-text1 dark:text-dark-text1"
        style={{ textAlign: "center" }}
      >
        We look forward to collaborating with more circles or organizations!
      </h6>

      <CardArea>
        {PartnerList.map((partner) => (
          <ProfileCard
            image={partner.img}
            name={partner.org}
            socials={partner.socials}
          />
        ))}
      </CardArea>
      <br />
    </Wrapper>
  );
};

export default CollaborationPartners;
