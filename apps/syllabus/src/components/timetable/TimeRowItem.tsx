import React from "react"

import styled from "styled-components"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import getSchoolIconPath from "@app/utils/get-school-icon-path"

const StyledListItem = styled("li")`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 2em;
  border-right-width: 1px;
  border-right-style: solid;
`

type OtherPeriod = {
  school: string
  s: string | number
  e: string | number
}

type Period = {
  s: string | number
  p: string | number
  e: string | number
  o?: OtherPeriod[]
}

type Props = {
  period: Period
}

const schoolIconImage = (school: string) => (
  <img
    src={getSchoolIconPath(school, "en")}
    width="24px"
    height="24px"
    alt={school}
    className="inline"
  />
)

const OtherPeriod = ({ periods }: { periods: OtherPeriod[] }) => (
  <div className="pt-2">
    {periods.map((period) => (
      <p className="mb-2">
        {schoolIconImage(period.school)} {period.s} ~ {period.e}
      </p>
    ))}
  </div>
)

const TimeRowItem = ({ period }: Props) => {
  return (
    <StyledListItem className="border-r-gray-100 text-light-text2 dark:border-r-dark-text3 dark:text-dark-text2">
      <time className="text-lg">{period.s}</time>
      {period.o ? (
        <div className="group relative flex justify-center">
          <span className="text-3xl font-semibold">{period.p}</span>
          <span className="text-sm font-semibold">
            <FontAwesomeIcon icon={faInfoCircle} size="1x" />
          </span>
          <span className="text-2xs absolute left-10 bottom-0 w-48 scale-0 rounded bg-gray-500 p-2 text-white group-hover:scale-100">
            <OtherPeriod periods={period.o} />
          </span>
        </div>
      ) : (
        <span className="text-3xl font-semibold">{period.p}</span>
      )}
      <time className="text-lg">{period.e}</time>
    </StyledListItem>
  )
}

export default TimeRowItem
