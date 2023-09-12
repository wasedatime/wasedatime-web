import React from "react"

import { Wrapper, media } from "wasedatime-ui"
import {
  faBook,
  faCalendarAlt,
  faCommentAlt,
  faForward,
  faNewspaper,
  faPlayCircle,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import styled from "styled-components"
import "react-vertical-timeline-component/style.min.css"
import ForumOutlined from "@mui/icons-material"

const MainParagraph = styled("p")`
  align-items: center;
  padding: 0 20vw;
  ${media("tablet", `padding: 0 5vw;`)};
  color: #666;
  width: 90%;
  margin: 0 auto;
  font-size: 0.9em;
`

const OurMission = () => (
  <Wrapper className="bg-light-bgMain dark:bg-dark-bgMain">
    <MainParagraph>
      <br />
      <h2
        className="text-light-text1 dark:text-dark-text1"
        style={{ textAlign: "center" }}
      >
        <b>
          <span role="img" aria-label="smile">
            🔎
          </span>{" "}
          Who we are
        </b>
      </h2>
      <hr />
      <br />
      <p className="text-light-text2 dark:text-dark-text2">
        A team formed by Waseda students and graduates, committed to developing
        and improving WasedaTime. Feeling that Waseda's official syllabus was
        not convenient and comfortable enough to use, our founder, Oscar,
        inspired by a timetable website for National University of Singapore as
        well as an information design course in Waseda Faculty of Science and
        Engineering, creates the first version of WasedaTime.
      </p>
      <br />
      <h2
        className="text-light-text1 dark:text-dark-text1"
        style={{ textAlign: "center" }}
      >
        <b>
          <span role="img" aria-label="smile">
            🚀
          </span>{" "}
          Future goals
        </b>
      </h2>
      <hr />
      <br />
      <p className="text-light-text2 dark:text-dark-text2">
        In the future, it will become not merely a tool, but a 'platform' for
        Waseda students, with different cultural backgrounds, different majors
        and different career development plans, to interact and communicate on
        it. Current functionalities like course reviews and user login feature
        are our first step toward this goal. As our long-term goal, we will
        continue to develop functions that can support all aspects of campus
        life for Waseda students, and may radiate to other schools.
      </p>
      <br />
      <h2
        className="text-light-text1 dark:text-dark-text1"
        style={{ textAlign: "center" }}
      >
        <b>
          <span role="img" aria-label="smile">
            😎
          </span>{" "}
          Member description
        </b>
      </h2>
      <hr />
      <br />
      <h3
        className="text-light-text1 dark:text-dark-text1"
        style={{ textAlign: "center" }}
      >
        <span role="img" aria-label="smile">
          💻
        </span>{" "}
        Tech
      </h3>
      <p className="text-light-text2 dark:text-dark-text2">
        From the driven newcomer to the experienced veteran, wasedatime's tech
        team will be responsible for turning ideas into reality. With a wealth
        of hands-on experience, some of our team members have internship
        experience at start-ups and can apply their experience to overcome
        technical challenges, enrich page functionality and improve the user
        experience. Our tech team will continue to learn and experiment with new
        technologies as they develop, honing their skills as well as
        contributing to the students.
      </p>
      <br />
      <h3
        className="text-light-text1 dark:text-dark-text1"
        style={{ textAlign: "center" }}
      >
        <span role="img" aria-label="smile">
          💼
        </span>{" "}
        Non-Tech
      </h3>

      <p className="text-light-text2 dark:text-dark-text2">
        Our marketers come from various academic and cultural backgrounds. Each
        has an extensive internship experience (investment bank/internet
        maker/consulting firm).Our functions included but not limited to brand
        promotion, team consulting(start up new programs ), finding
        collaboration opportunities and market investigations . All members are
        full of creativity and passion for product operations as well as
        brainstorming. Although the non-tech team has not been established for
        long, the role could not be ignored. With the efforts that we made and
        the smooth cooperation with the tech team, We believe that the fantastic
        results won’t be far.
      </p>
      <br />
      <h2
        className="text-light-text1 dark:text-dark-text1"
        style={{ textAlign: "center" }}
      >
        <b>
          <span role="img" aria-label="smile">
            📆
          </span>{" "}
          Timeline
        </b>
      </h2>
      <hr />
      <br />
    </MainParagraph>

    <div className="vertical-timeline-wrapper">
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{
            background: "rgb(38, 38, 38)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(38, 38, 38)" }}
          className="vertical-timeline-element--work"
          date="September 2023"
          iconStyle={{
            background: "rgb(38, 38, 38)",
            color: "#fff",
            fontSize: "24px",
          }}
          icon={<FontAwesomeIcon icon={faNewspaper} />}
        >
          <h6 className="vertical-timeline-element-subtitle">September 2023</h6>
          <h4>Forums</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "rgb(166,47,58)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(166,47,58)" }}
          className="vertical-timeline-element--work"
          date="March 2021"
          iconStyle={{
            background: "rgb(166,47,58)",
            color: "#fff",
            fontSize: "24px",
          }}
          icon={<FontAwesomeIcon icon={faNewspaper} />}
        >
          <h6 className="vertical-timeline-element-subtitle">March 2021</h6>
          <h4>Feeds</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "rgb(38, 38, 38)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(38, 38, 38)" }}
          className="vertical-timeline-element--work"
          date="February 2021"
          iconStyle={{
            background: "rgb(38, 38, 38)",
            color: "#fff",
            fontSize: "24px",
          }}
          icon={<FontAwesomeIcon icon={faUserAlt} />}
        >
          <h6 className="vertical-timeline-element-subtitle">February 2021</h6>
          <h4>New layout, User login, About US Page</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "rgb(166,47,58)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(166,47,58)" }}
          className="vertical-timeline-element--work"
          date="December 2020"
          iconStyle={{
            background: "rgb(166,47,58)",
            color: "#fff",
            fontSize: "24px",
          }}
          icon={<FontAwesomeIcon icon={faBook} />}
        >
          <h6 className="vertical-timeline-element-subtitle">December 2020</h6>
          <h4>All schools support</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "rgb(38, 38, 38)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(38, 38, 38)" }}
          className="vertical-timeline-element--work"
          date="September 2020"
          iconStyle={{
            background: "rgb(38,38,38)",
            color: "#fff",
            fontSize: "24px",
          }}
          icon={<FontAwesomeIcon icon={faCommentAlt} />}
        >
          <h6 className="vertical-timeline-element-subtitle">September 2020</h6>
          <h4> Course reviews release</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            background: "rgb(166,47,58)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(166,47,58)" }}
          className="vertical-timeline-element--work"
          date="May 2020"
          iconStyle={{
            background: "rgb(166,47,58)",
            color: "#fff",
            fontSize: "24px",
          }}
          icon={<FontAwesomeIcon icon={faForward} />}
        >
          <h6 className="vertical-timeline-element-subtitle">May 2020</h6>
          <h4> WasedaTime is back!</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "rgb(38, 38, 38)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(38, 38, 38)" }}
          className="vertical-timeline-element--work"
          date="2018"
          iconStyle={{
            background: "rgb(38,38,38)",
            color: "#fff",
            fontSize: "24px",
          }}
          icon={<FontAwesomeIcon icon={faCalendarAlt} />}
        >
          <h6 className="vertical-timeline-element-subtitle">May 2018</h6>
          <h4> Timetable, Syllabus, Bus</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "rgb(166,47,58)",
            color: "#fff",
            fontSize: "24px",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(166,47,58)" }}
          className="vertical-timeline-element--education"
          date="Late 2017"
          iconStyle={{
            background: "rgb(166,47,58)",
            color: "#fff",
            fontSize: "24px",
          }}
          icon={<FontAwesomeIcon icon={faPlayCircle} />}
        >
          <h6 className="vertical-timeline-element-subtitle">Late 2017</h6>
          <h4>Development starts</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    <br />
  </Wrapper>
)

export default OurMission
