import React, { useState } from "react"

import { Colors } from "wasedatime-ui"
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { WithTranslation, withTranslation } from "react-i18next"
import Table from "semantic-ui-react/dist/commonjs/collections/Table"
import Accordion from "semantic-ui-react/dist/commonjs/modules/Accordion"
import styled from "styled-components"

import Label from "@app/components/styles/Label"
import { SyllabusKey } from "@app/constants/syllabus-data"
import Course from "@app/types/course"
import { ThemeContext } from "@app/utils/theme-context"

interface Props extends WithTranslation {
  course: Course
}

interface ScheduleProps {
  content: string
}

interface TextbooksProps {
  content: string
}

const Schedule = ({ content }: ScheduleProps) => {
  const { theme } = React.useContext(ThemeContext)

  const items = content
    .split("\n")
    .filter((c) => c)
    .filter((c, i) => i % 2 === 1)

  return (
    <Table basic="very">
      {items.map((item, i) => (
        <Table.Body key={i}>
          <Table.Row>
            <Table.Cell>
              <div>
                <Label filled color={Colors[theme].lighter}>
                  {i + 1}
                </Label>
              </div>
            </Table.Cell>
            <Table.Cell className="dark:text-dark-text1">
              <p>{item}</p>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      ))}
    </Table>
  )
}

const Textbooks = ({ content }: TextbooksProps) => {
  // const [isBookLoaded, setIsBookLoaded] = useState(false);
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   API.post("wasedatime-dev", "/syllabus/book-info", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: {
  //       data: content,
  //     },
  //   })
  //     .then((res) => {
  //       setBooks(res.data);
  //       setIsBookLoaded(true);
  //     })
  //     .catch((error) => {
  //       setBooks([]);
  //       setIsBookLoaded(true);
  //     });
  // }, []);

  return (
    <div>
      {content.split("\n").map((c, i) => c && <p key={i}>{c}</p>)}
      {/* <div style={{ display: "flex", flexDirection: "row" }}>
        {isBookLoaded ? (
          books.map((book, i) => (
            <a
              key={i}
              href={book.link}
              target="_blank"
              style={{ margin: "0px 1em" }}
            >
              <img width="100" height="150" src={book.thumbnail} />
            </a>
          ))
        ) : (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Placeholder style={{ width: 100, height: 150, margin: "1em" }}>
              <Placeholder.Image />
            </Placeholder>
            <Placeholder style={{ width: 100, height: 150, margin: "1em" }}>
              <Placeholder.Image />
            </Placeholder>
            <Placeholder style={{ width: 100, height: 150, margin: "1em" }}>
              <Placeholder.Image />
            </Placeholder>
          </div>
        )}
      </div> */}
    </div>
  )
}

const CourseMoreDetails = ({ course, t }: Props) => {
  const [activeDetailsIndex, setActiveDetailsIndex] = useState(-1)
  const details = [
    {
      title: t("courseMoreDetails.Outline"),
      content:
        course[SyllabusKey.OUTLINE] &&
        course[SyllabusKey.OUTLINE]
          .split("\n")
          .map((c, i) => c && <p key={i}>{c}</p>),
    },
    {
      title: t("courseMoreDetails.Objective"),
      content:
        course[SyllabusKey.OBJECTIVE] &&
        course[SyllabusKey.OBJECTIVE]
          .split("\n")
          .map((c, i) => c && <p key={i}>{c}</p>),
    },
    {
      title: t("courseMoreDetails.Schedule"),
      content: course[SyllabusKey.SCHEDULE] && (
        <Schedule content={course[SyllabusKey.SCHEDULE]} />
      ),
    },
    {
      title: t("courseMoreDetails.Self Study"),
      content:
        course[SyllabusKey.SELF_STUDY] &&
        course[SyllabusKey.SELF_STUDY]
          .split("\n")
          .map((c, i) => c && <p key={i}>{c}</p>),
    },
    {
      title: t("courseMoreDetails.Textbook"),
      content: course[SyllabusKey.TEXT] && (
        <Textbooks content={course[SyllabusKey.TEXT]} />
      ),
    },
    {
      title: t("courseMoreDetails.Reference"),
      content: course[SyllabusKey.REFERENCE] && (
        <Textbooks content={course[SyllabusKey.REFERENCE]} />
      ),
    },
    {
      title: t("courseMoreDetails.Note"),
      content:
        course[SyllabusKey.NOTE] &&
        course[SyllabusKey.NOTE]
          .split("\n")
          .map((c, i) => c && <p key={i}>{c}</p>),
    },
  ]

  return (
    <Accordion
      style={{ padding: "0px 2em" }}
      className="mb-4 dark:bg-dark-bgMain"
    >
      {details.map(
        (detail, i) =>
          detail.content && (
            <React.Fragment key={i}>
              <Accordion.Title
                active={activeDetailsIndex === i}
                index={i}
                style={{ borderBottom: "1px solid #ccc" }}
                onClick={() => {
                  activeDetailsIndex === i
                    ? setActiveDetailsIndex(-1)
                    : setActiveDetailsIndex(i)
                }}
              >
                <h4 className="text-2xl dark:text-dark-text1">
                  <FontAwesomeIcon
                    icon={
                      activeDetailsIndex === i ? faChevronDown : faChevronRight
                    }
                  />{" "}
                  {detail.title}
                </h4>
              </Accordion.Title>
              <Accordion.Content
                active={activeDetailsIndex === i}
                className="dark:text-dark-text1"
              >
                {detail.content}
              </Accordion.Content>
            </React.Fragment>
          )
      )}
    </Accordion>
  )
}

export default withTranslation("translation")(CourseMoreDetails)
