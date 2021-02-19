import React from "react";
import MediaQuery from "react-responsive";
import { Helmet } from "react-helmet";
import { Wrapper } from "../styled-components/Wrapper";
import { Overlay } from "../styled-components/Overlay";
import styled from "styled-components";
import { Header, List, Divider } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { media } from "../styled-components/utils";
import { sizes } from "../styled-components/utils";
import "../../styles/semantic-ui-css/components/header.min.css";
import "../../styles/semantic-ui-css/components/list.min.css";
import "../../styles/semantic-ui-css/components/divider.min.css";
import { withNamespaces } from "react-i18next";

const ExtendedOverlay = styled(Overlay)`
  align-items: center;
  background-color: #fff;
  padding: 0 20vw;
  color: #666;
  ${media.phone`padding: 0 10vw;`};
`;

const ColoredHeader = styled(Header)`
  color: #555 !important;
`;

const DividerTitle = styled(Divider)`
  width: 60vw;
  ${media.phone`width: 80vw;`};
`;


const JoinUs = () => {
    return (
      <Wrapper>
        <Helmet>
            <title>WasedaTime - Join Us!</title>
            <meta
                name="description"
                content="Recruitment document for WasedaTime."
            />
            <meta property="og:title" content="WasedaTime - Join Us!" />
            <meta
                property="og:description"
                content="Recruitment document for WasedaTime."
            />
            <meta property="og:site_name" content="WasedaTime - Join Us!" />
        </Helmet>
  
        <ExtendedOverlay>
            <Divider hidden />
            <MediaQuery minWidth={sizes.desktop}>
                {(matches) =>
                matches ? (
                    <ColoredHeader
                    size="huge"
                    textAlign="center"
                    content="WasedaTime is back, AND WE WANT YOU!"
                    />
                ) : (
                    <ColoredHeader
                    size="large"
                    textAlign="center"
                    content="WasedaTime is back, AND WE WANT YOU!"
                    />
                )
                }
            </MediaQuery>
            <Divider hidden />
            <p>
                WasedaTime has been working on supporting students' academic
                activities since launching. Its well-tested Syllabus Search feature is
                favored by thousands of students. More than 50% of international
                students are using this website. We never expect this could happen and
                are always grateful for all our users.
            </p>
            <p>
                With the quick iterations of the product, WasedaTime is running short
                of talented minds! We want to extend a sincere invitation to you, and
                let's build this fantastic product together! WasedaTime is a 100%
                student-run, open-source project.
            </p>
    
            <Divider hidden />
            <DividerTitle horizontal>
                <Header size="huge">
                <FontAwesomeIcon icon={faUserCog} /> Technology
                </Header>
            </DividerTitle>
            <p>
            We are looking for experienced developers, but we also love to provide mentorship 
            to passionate beginners with little background! You will be working with a talented 
            team whose members entered the world's top 4 CS schools and interned at recognized 
            employers in the industry: Google, Tencent, Yahoo, Bilibili, etc. 
            They are happy to provide guidance in your career development&nbsp;
                <span role="img" aria-label="smile">
                    😄
                </span>{" "}

            </p>
          
            <Header.Subheader size="huge">
               <b>Roles</b>
            </Header.Subheader> 
            <List bulleted size="medium">
                <List.Item>General Software Developer / Apprentice</List.Item>
                <List.Item>Frontend Developer / Apprentice</List.Item>
                <List.Item>Backend Developer / Apprentice</List.Item>
                <List.Item>Infrastructure Developer / Apprentice</List.Item>
            </List>
            <br></br>
          
            <Header.Subheader size="huge">
               <b>Requirements</b>
            </Header.Subheader> 
            <List bulleted size="medium">
                <List.Item value=''>Have passion on learning & creating</List.Item>
                <List.Item value=''>Self-motivation</List.Item>
                <List.Item value=''>Have learned any programming language</List.Item>
                <small>* Not necessary but better to know about Git, <br></br> &nbsp; React or HTML/CSS (for frontend), AWS (for backend)</small>
            </List>
            <br></br>

            <Header.Subheader size="huge">
               <b>Job description</b>
            </Header.Subheader> 
            <List bulleted size="medium">
                <List.Item value=''>Develop new features for WasedaTime</List.Item>
                <List.Item value=''>Backend automation & maintenance</List.Item>
                <List.Item value=''>Direction: Make WasedaTime a <b>platform</b> for students</List.Item>
                <small>* Using React on Frontend and AWS on Backend</small>
                <br></br>
                <small>* Preparing for adoption of other frontend frameworks</small>
            </List>
            <br></br>

            <Header.Subheader size="huge">
               <b>What you will get</b>
            </Header.Subheader> 
            <List bulleted size="medium">
                <List.Item value=''>Technical skills and Practical experience on development</List.Item>
                <List.Item value=''>Knowledges shared by each other</List.Item>
                <List.Item value=''>Teammates who can fight together to make Waseda better<b>platform</b> for students</List.Item>
                <small>* All students are welcome, especially 1st & 2nd grade students</small>
                <br></br>
                
            </List>
            <br></br>
            
          <Divider hidden />
          <DividerTitle horizontal>
            <Header size="huge">
              <FontAwesomeIcon icon={faUserTie} />
              <MediaQuery minWidth={sizes.desktop}>
                {(matches) => (matches ? " " : <br />)}
              </MediaQuery>
              Performance Marketing
              <MediaQuery minWidth={sizes.desktop}>
                {(matches) => (matches ? " " : <br />)}
              </MediaQuery>
              & Business Operations
            </Header>
          </DividerTitle>

          <p>
            The “Non-Tech” team builds bridges across technology to users. They
            transform WasedaTime from code to a vivid product. We are looking for
            innovative minds who possess outstanding analytical skills. You will
            be working with our excellent members who entered the world's top 10
            business schools and interned at prestigious companies: Morgan
            Stanley, Accenture, etc.
          </p>

          <Header.Subheader size="huge">
              <b>Roles</b>
          </Header.Subheader> 
          <List bulleted size="medium">
            <List.Item value=''>Product management</List.Item>
            <List.Item value=''>Marketing & Advertising</List.Item>
            <List.Item value=''>Business expansion/liaison</List.Item>
          </List>
            <br></br>

          <Header.Subheader size="huge">
            <b>Requirements</b>
          </Header.Subheader> 
          <List bulleted size="medium">
            <List.Item value=''>Have passion on learning, presenting new ideas, building connection</List.Item>
            <List.Item value=''>Sense of responsibility, business sense (experience in product operation is better)</List.Item>
          </List>
            <br></br>

          <Header.Subheader size="huge">
            <b>Job description</b>
          </Header.Subheader> 
          <List bulleted size="medium">
            <List.Item value=''>Marketing & Advertising（Assist in the growth of new users of the platform、increase awareness、Market research & user analysis）</List.Item>
            <List.Item value=''>Business development (Looking for business partners) </List.Item>
            <List.Item value=''>Participate in the new function design and brain storm of Wasedatime.</List.Item>
          </List>
            <br></br>

          <Header.Subheader size="huge">
            <b>What you will get</b>
          </Header.Subheader> 
          <List bulleted size="medium">
            <List.Item value=''>A unique project experience on marketing/advertising/business or opportunities to realize your unique ideas</List.Item>
            <List.Item value=''>Knowledges shared by each other</List.Item>
            <List.Item value=''>You will meet creative people with different backgrounds, fighting together to make Waseda better!</List.Item>
          </List>
            <br></br>
  
          <Divider hidden />
          <DividerTitle horizontal>
            <Header size="huge">
              <span role="img" aria-label="smile">
                🤗
              </span>{" "}
              How to get started
            </Header>
          </DividerTitle>
          <p>
            We welcome students who are interested to send an email with a brief
            self-introduction or a CV/resume to the following address:{" "}
            <b><a href="mailto:joinus@wasedatime.com" target="_blank">joinus@wasedatime.com</a></b>
          </p>
          <p>
            The self-introduction should contain your name, department, year,
            interests, and highlight projects (if possible). You're welcome to add
            more information, especially your <b>experience</b> related to our requirements!
          </p>
  
          <Divider hidden />
          <ColoredHeader
            size="medium"
            textAlign="center"
            content="We look forward to hearing from you!"
          />
          <Divider hidden />
        </ExtendedOverlay>
      </Wrapper>
    );
  };
  
  export default withNamespaces("translation")(JoinUs);