import React, { useEffect, useState } from "react";
import API from "@aws-amplify/api";
import { WithTranslation, withTranslation } from "react-i18next";
import { SyllabusKey } from "@bit/wasedatime.syllabus.ts.constants.syllabus-data";
import Accordion from "semantic-ui-react/dist/commonjs/modules/Accordion";
import Course from "../../types/course";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";

interface Props extends WithTranslation {
  course: Course;
}

interface TextbooksProps {
  content: string;
}

const Textbooks = ({ content }: TextbooksProps) => {
  const [isBookLoaded, setIsBookLoaded] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.post("wasedatime-dev", "/syllabus/book-info", {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        data: content,
      },
    })
      .then((res) => {
        setBooks(res.data);
        setIsBookLoaded(true);
      })
      .catch((error) => {
        setBooks([]);
        setIsBookLoaded(true);
      });
  }, []);

  return (
    <div>
      <p>{content}</p>
      <div style={{ display: "flex", flexDirection: "row" }}>
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
          <LoadingSpinner message="Loading books..." />
        )}
      </div>
    </div>
  );
};

const CourseMoreDetails = ({ course, t }: Props) => {
  const [activeDetailsIndex, setActiveDetailsIndex] = useState(-1);
  const details = [
    {
      title: t(`courseMoreDetails.Outline`),
      content: course[SyllabusKey.OUTLINE] && (
        <p>{course[SyllabusKey.OUTLINE]}</p>
      ),
    },
    {
      title: t(`courseMoreDetails.Objective`),
      content: course[SyllabusKey.OBJECTIVE] && (
        <p>{course[SyllabusKey.OBJECTIVE]}</p>
      ),
    },
    {
      title: t(`courseMoreDetails.Schedule`),
      content: course[SyllabusKey.SCHEDULE] && (
        <p>{course[SyllabusKey.SCHEDULE]}</p>
      ),
    },
    {
      title: t(`courseMoreDetails.Self Study`),
      content: course[SyllabusKey.SELF_STUDY] && (
        <p>{course[SyllabusKey.SELF_STUDY]}</p>
      ),
    },
    {
      title: t(`courseMoreDetails.Textbook`),
      content: course[SyllabusKey.TEXT] && (
        <Textbooks content={course[SyllabusKey.TEXT]} />
      ),
    },
    {
      title: t(`courseMoreDetails.Reference`),
      content: course[SyllabusKey.REFERENCE] && (
        <p>{course[SyllabusKey.REFERENCE]}</p>
      ),
    },
    {
      title: t(`courseMoreDetails.Note`),
      content: course[SyllabusKey.NOTE] && <p>{course[SyllabusKey.NOTE]}</p>,
    },
  ];

  return (
    <Accordion style={{ padding: "0px 2em" }}>
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
                    : setActiveDetailsIndex(i);
                }}
              >
                <h6>
                  <FontAwesomeIcon icon={faChevronDown} /> {detail.title}
                </h6>
              </Accordion.Title>
              <Accordion.Content active={activeDetailsIndex === i}>
                {detail.content}
              </Accordion.Content>
            </React.Fragment>
          )
      )}
    </Accordion>
  );
};

export default withTranslation("translation")(CourseMoreDetails);
