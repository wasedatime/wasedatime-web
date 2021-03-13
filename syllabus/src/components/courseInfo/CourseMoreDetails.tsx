import React, { useEffect, useState } from "react";
import API from "@aws-amplify/api";
import { WithTranslation, withTranslation } from "react-i18next";
import { SyllabusKey } from "../../constants/syllabus-data";
import Accordion from "semantic-ui-react/dist/commonjs/modules/Accordion";
import Course from "../../types/course";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Placeholder from "semantic-ui-react/dist/commonjs/elements/Placeholder";

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
      {
        content.split("\n").map(c => c && <p>{c}</p>)
      }
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
      </div>
    </div>
  );
};

const CourseMoreDetails = ({ course, t }: Props) => {
  const [activeDetailsIndex, setActiveDetailsIndex] = useState(-1);
  const details = [
    {
      title: t(`courseMoreDetails.Outline`),
      content: course[SyllabusKey.OUTLINE] && course[SyllabusKey.OUTLINE].split("\n").map(c => c && <p>{c}</p>)
    },
    {
      title: t(`courseMoreDetails.Objective`),
      content: course[SyllabusKey.OBJECTIVE] && course[SyllabusKey.OBJECTIVE].split("\n").map(c => c && <p>{c}</p>)
    },
    {
      title: t(`courseMoreDetails.Schedule`),
      content: course[SyllabusKey.SCHEDULE] && course[SyllabusKey.SCHEDULE].split("\n").map(c => c && <p>{c}</p>)
    },
    {
      title: t(`courseMoreDetails.Self Study`),
      content: course[SyllabusKey.SELF_STUDY] && course[SyllabusKey.SELF_STUDY].split("\n").map(c => c && <p>{c}</p>)
    },
    {
      title: t(`courseMoreDetails.Textbook`),
      content: course[SyllabusKey.TEXT] && course[SyllabusKey.TEXT].split("\n").map(c => c && <p>{c}</p>)
    },
    {
      title: t(`courseMoreDetails.Reference`),
      content: course[SyllabusKey.REFERENCE] && course[SyllabusKey.REFERENCE].split("\n").map(c => c && <p>{c}</p>)
    },
    {
      title: t(`courseMoreDetails.Note`),
      content: course[SyllabusKey.NOTE] && course[SyllabusKey.NOTE].split("\n").map(c => c && <p>{c}</p>)
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
                  <FontAwesomeIcon icon={activeDetailsIndex === i ? faChevronDown : faChevronRight} /> {detail.title}
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
