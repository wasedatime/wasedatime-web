/* eslint-disable no-nested-ternary */
import React from "react"

interface StyledTextProps {
  children: any
  centered?: boolean
  headerType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  id?: string
}

export const StyledHeader = ({
  children,
  centered,
  headerType,
  id,
}: StyledTextProps) =>
  headerType === "h1" ? (
    <h1
      id={id}
      className={`text-light-text1 dark:text-dark-text1 ${
        centered && "my-4 text-center"
      }`}
    >
      {children}
    </h1>
  ) : headerType === "h2" ? (
    <h2
      id={id}
      className={`text-light-text1 dark:text-dark-text1 ${
        centered && "my-4 text-center"
      }`}
    >
      {children}
    </h2>
  ) : headerType === "h3" ? (
    <h3
      id={id}
      className={`text-light-text1 dark:text-dark-text1 ${
        centered && "my-4 text-center"
      }`}
    >
      {children}
    </h3>
  ) : headerType === "h4" ? (
    <h4
      id={id}
      className={`text-light-text1 dark:text-dark-text1 ${
        centered && "my-4 text-center"
      }`}
    >
      {children}
    </h4>
  ) : headerType === "h5" ? (
    <h5
      id={id}
      className={`text-light-text1 dark:text-dark-text1 ${
        centered && "my-4 text-center"
      }`}
    >
      {children}
    </h5>
  ) : (
    <h6
      id={id}
      className={`text-light-text1 dark:text-dark-text1 ${
        centered && "my-4 text-center"
      }`}
    >
      {children}
    </h6>
  )

export const StyledParagraph = ({
  children,
  centered,
  id,
}: StyledTextProps) => (
  <p
    id={id}
    className={`text-light-text2 dark:text-dark-text2 ${
      centered && "my-4 text-center"
    }`}
  >
    {children}
  </p>
)

export const StyledBold = ({ children, centered, id }: StyledTextProps) => (
  <b
    id={id}
    className={`text-light-text1 dark:text-dark-text1 ${
      centered && "my-4 text-center"
    }`}
  >
    {children}
  </b>
)

const CommercialDisclosure = () => (
  <div className="bg-light-bgMain p-6 dark:bg-dark-bgMain md:py-24 md:px-60">
    <StyledHeader headerType="h1" centered>
      Commercial Disclosure
    </StyledHeader>
    <StyledParagraph centered>Last updated November 20, 2023</StyledParagraph>
    <StyledHeader headerType="h3" centered>
      Legal Name
    </StyledHeader>
    <StyledParagraph centered>PARK JOON BIN</StyledParagraph>
    <StyledHeader headerType="h3" centered>
      Address
    </StyledHeader>
    <StyledParagraph centered>
      We will disclose without deplay if requested
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      Phone Number
    </StyledHeader>
    <StyledParagraph centered>
      We will disclose without deplay if requested
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      Contact Email
    </StyledHeader>
    <StyledParagraph centered>
      We will disclose without deplay if requested
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      Contact Email
    </StyledHeader>
    <StyledParagraph centered>inquiry@wasedatime.com</StyledParagraph>
    <StyledHeader headerType="h3" centered>
      Head of Operations
    </StyledHeader>
    <StyledParagraph centered>PARK JOON BIN</StyledParagraph>
    <StyledHeader headerType="h3" centered>
      Additional Fees
    </StyledHeader>
    <StyledParagraph centered>None</StyledParagraph>
    <StyledHeader headerType="h3" centered>
      Exchanges & Returns Policy
    </StyledHeader>
    <StyledParagraph centered>
      <ul className="text-light-text2 dark:text-dark-text2">
        <li>
          <i>Events before Date.</i> You can cancel your order by pressing the
          cancel button on the luma website. Or contact us at
          inquiry@wasedatime.com
        </li>
        <li>
          <i>Events after date.</i> You will not be able to return or exchange
          after the event date.
        </li>
      </ul>
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      Delivery times
    </StyledHeader>
    <StyledParagraph centered>
      Orders will be processed instantly through lu.ma website
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      Accepted Payment Methods
    </StyledHeader>
    <StyledParagraph centered>Credit cards</StyledParagraph>
    <StyledHeader headerType="h3" centered>
      Payment period
    </StyledHeader>
    <StyledParagraph centered>
      Credit card payments are processed immediately
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      Price
    </StyledHeader>
    <StyledParagraph centered>
      Price listed on each event page in luma.
    </StyledParagraph>
  </div>
)

export default CommercialDisclosure
