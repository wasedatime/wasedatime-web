import { Opacity } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

const Card = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  text-align: center;
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
  margin: 6px 8px 4px 0px;
  text-align: center;
`;

export interface ProfileProps {
  image: string;
  name: string;
  positions: Array<string>;
  socials?: Array<{ platform: string; link: string }>;
  profileText?: string;
  // mini?: boolean;
}

export const ProfileCard = ({
  image,
  name,
  positions,
  socials,
  profileText,
}: // mini,
ProfileProps) => {
  const [pic, setPic] = useState(true);
  const handleClick = () => {
    setPic(!pic);
  };

  return (
    <Card
      className="block group cursor-pointer transition ease-in-out delay-300ms transition-duration:1500ms md:mx-8 md:my-6 lg:mx-10 lg:my-8"
      onClick={handleClick}
    >
      {pic ? (
        <div>
          <div>
            <p className="text-center text-lg sm:text-xl text-transparent font-bold group-hover:text-light-text2 dark:group-hover:text-dark-text1 translate-y-[85px] sm:translate-y-[110px] z-10">
              Click to view the profile!
            </p>
            <img
              className="mask mask-squircle object-cover opacity-100 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] m-2 z-0 group-hover:opacity-30"
              src={image}
            />
          </div>
          {/* Name below the card*/}
          <p className="text-center py-1.5 px-3 sm:px-5 font-bold text-2xl sm:text-3xl text-light-text1 dark:text-dark-text1">
            {name}
          </p>
        </div>
      ) : (
        <div
          // Card: pic + hidden card-body +  Name
          className="card w-auto card-side rounded-8xl bg-gradient-to-r from-light-card2 to-light-card1 dark:bg-gradient-to-r dark:from-dark-card2 dark:to-dark-bgMain drop-shadow-lg translate-x-[5px] transition ease-in-out delay-200ms transition-duration:3000ms my-[9px] sm:my-[16px] z-20"
        >
          {/* Profile pic */}
          <figure className="px-3 py-3 sm:px-5 sm:py-5">
            {/* responsive for smaller screen: w/h - [100px] */}
            <img
              className="mask mask-squircle object-cover w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
              src={image}
            />
          </figure>

          {/* Card Body */}
          <div className="card-body items-left text-left w-[200px] sm:w-[260px] block opacity-100 p-[10px] sm:p-[20px]">
            {/* close button from daisyui */}
            <div className="card-actions justify-end">
              <button className="btn btn-square btn-sm border-transparent hover:border-transparent bg-light-card1 hover:bg-light-card2 focus:bg-light-card3 dark:bg-transparent dark:hover:bg-dark-card1 dark:focus:bg-dark-card2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-light-darker dark:stroke-dark-main"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Name */}
            <p className="card-title font-bold text-3xl text-light-text1 dark:text-dark-text1 mt-6 mb-3 ml-1.5">
              {name}
            </p>
            {/* Position */}
            <div className="justify-start text-left inline-block drop-shadow-none my-1.5">
              {positions &&
                positions.map((position) => (
                  <div
                    className="badge w-auto h-auto sm:h-10 mr-1.5 mt-1.5 font-normal text-lg sm:text-xl border-transparent text-light-text2 bg-light-card3
                  dark:text-dark-text2 dark:bg-dark-card2"
                  >
                    {position}
                  </div>
                ))}
              {/* Profile Text */}
              <p className="justify-start mt-3 mb-2 pl-1.5 font-medium text-lg sm:text-xl leading-normal text-light-text2 dark:text-dark-text2">
                {profileText}
              </p>
              {/* Socials */}
              <div className="justify-start inline-block mx-1.5">
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
      )}
    </Card>
  );
};
