import React, { useState } from "react"
import styled from "styled-components"

const Card = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  text-align: center;
`

const SocialMediaArea = styled("div")`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const MediaIcon = styled("img")`
  width: 100%;
  width: 1.3em;
  margin: 6px 8px 4px 0px;
  text-align: center;
`

export interface ProfileCardProps {
  image: string
  name: string
  positions?: Array<string>
  socials?: Array<{ platform: string; link: string }>
  profileText?: string
  onClick?: () => void
  onClose?: () => void
  isOpen?: boolean
  // mini?: boolean;
}

export const ProfileCard = ({
  image,
  name,
  positions,
  socials,
  profileText,
  onClick,
  onClose,
  isOpen,
}: // mini,
ProfileCardProps) => {
  const [showCard, setShowCard] = useState<boolean>(false)

  const handleClick = () => {
    setShowCard(!showCard)
  }

  return (
    <Card className="block group cursor-pointer transition ease-in-out delay-300ms transition-duration:1500ms md:mx-8 md:my-6 lg:mx-10 lg:my-8">
      {isOpen ? (
        <div className="rounded-8xl delay-200ms transition-duration:3000ms card card-side z-20 my-[9px] w-auto translate-x-[5px] bg-gradient-to-r from-light-card2 to-light-card1 drop-shadow-lg transition ease-in-out dark:bg-gradient-to-r dark:from-dark-card2 dark:to-dark-bgMain sm:my-[16px]">
          {/* Profile pic */}
          <figure className="px-3 py-3 sm:px-5 sm:py-5">
            {/* responsive for smaller screen: w/h - [100px] */}
            <img
              className="mask mask-squircle h-[150px] w-[150px] object-cover sm:h-[200px] sm:w-[200px]"
              src={image}
            />
          </figure>
          {/* Card Body */}
          <div className="items-left card-body block w-[200px] p-[10px] text-left opacity-100 sm:w-[260px] sm:p-[20px]">
            {/* close button from daisyui */}
            <div className="card-actions justify-end" onClick={onClose}>
              <button className="btn btn-square btn-sm border-transparent bg-light-card1 hover:border-transparent hover:bg-light-card2 focus:bg-light-card3 dark:bg-transparent dark:hover:bg-dark-card1 dark:focus:bg-dark-card2">
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
            <p className="card-title mt-6 mb-3 ml-1.5 text-3xl font-bold text-light-text1 dark:text-dark-text1">
              {name}
            </p>
            {/* Position */}
            <div className="my-1.5 inline-block justify-start text-left drop-shadow-none">
              {positions &&
                positions.map((position) => (
                  <div
                    className="badge mr-1.5 mt-1.5 h-auto w-auto border-transparent bg-light-card3 text-lg font-normal text-light-text2 dark:bg-dark-card2 dark:text-dark-text2
                  sm:h-10 sm:text-xl"
                  >
                    {position}
                  </div>
                ))}
              {/* Profile Text */}
              <p className="mt-3 mb-2 justify-start pl-1.5 text-lg font-medium leading-normal text-light-text2 dark:text-dark-text2 sm:text-xl">
                {profileText}
              </p>
              {/* Socials */}
              <div className="mx-1.5 inline-block justify-start">
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
      ) : (
        // Card: pic + hidden card-body +  Name
        <div onClick={onClick}>
          <div>
            <p className="z-10 translate-y-[85px] text-center text-lg font-bold text-transparent group-hover:text-light-text2 dark:group-hover:text-dark-text1 sm:translate-y-[110px] sm:text-xl">
              Click to view the profile!
            </p>
            <img
              className="mask mask-squircle z-0 m-2 h-[150px] w-[150px] object-cover opacity-100 group-hover:opacity-30 sm:h-[200px] sm:w-[200px]"
              src={image}
            />
          </div>
          {/* Name below the card*/}
          <p className="py-1.5 px-3 text-center text-2xl font-bold text-light-text1 dark:text-dark-text1 sm:px-5 sm:text-3xl">
            {name}
          </p>
        </div>
      )}
    </Card>
  )
}
