import React from 'react';
import { connect } from "react-redux";
import { SyllabusKey } from "../../constants/syllabus-data";
import rawReviews from "../../constants/reviews.json"
import schoolCodeMap from '../../constants/school-code';
import { ReduxRootState } from "../../redux/reducers";
import { Course } from '../../types/course';
import ReviewStars from '../courseInfo/ReviewStars';
import { getFetchedCoursesList } from '../../redux/reducers/fetchedCourses';
import CourseItem from '../CourseItem';
import PSE from './PSE';
import CJL from './CJL';
import SILS from './SILS';
import SSS from './SSS';
import Rikou from './Rikou';
import MediaQuery from "react-responsive";
import { sizes } from '@bit/wasedatime.core.ts.utils.responsive-utils';
import cover from "./images/cover.jpg";
import mobileCover from "./images/cover-mobile.jpg";

interface ReduxStateProps {
  fetchedCourses: Course[],
  fetchedCoursesBySchool: {
    [school: string]: {
      [id: string]: Course
    }
  };
}

class Milestone extends React.Component<ReduxStateProps> {
  state = {
    isLoaded: false,
    school: "",
    courseKeys: rawReviews.map(r => r.Item.course_key.S).filter((value, index, self) => self.indexOf(value) === index),
    courses: {},
    reviews: rawReviews.reduce(function (result, review) {
      if (!result[review.Item.course_key.S]) result[review.Item.course_key.S] = [];
      result[review.Item.course_key.S].push({
        benefit: parseInt(review.Item.benefit.N),
        comment_en: review.Item.comment_en.S,
        comment_ja: review.Item.comment_ja.S,
        comment_ko: review.Item.comment_ko.S,
        "comment_zh-CN": review.Item["comment_zh-CN"].S,
        "comment_zh-TW": review.Item["comment_zh-TW"].S,
        course_key: review.Item.course_key.S,
        created_at: review.Item.created_at.S,
        difficulty: parseInt(review.Item.difficulty.N),
        instructor: review.Item.instructor.S,
        instructor_jp: review.Item.instructor_jp.S,
        satisfaction: parseInt(review.Item.satisfaction.N),
        src_lang: review.Item.src_lang.S,
        title: review.Item.title.S,
        title_jp: review.Item.title_jp.S,
        uid: review.Item.uid.S,
        updated_at: review.Item.updated_at.S,
        year: parseInt(review.Item.year.N),
        school: schoolCodeMap[review.Item.course_key.S.substring(0, 2)]
      })
      return result;
    }, {})
  }

  componentDidMount () {
    // console.log(this.state.reviews);
  }
  
  render () {
    const { courseKeys, school } = this.state;
    const courses = this.props.fetchedCourses
      .filter(c => 
        courseKeys.includes(c[SyllabusKey.ID].substring(0, 12))
        && (
          c[SyllabusKey.SCHOOL] === school
          || school === "Rikou" && ["FSE", "CSE", "ASE"].includes(c[SyllabusKey.SCHOOL])
        )
        && c[SyllabusKey.TERM].match(/0|1|f/g)
      );
      return (
        <div className="theme-default">
          {!school && <MediaQuery maxWidth={sizes.tablet}>
            {(matches) =>
              matches ? (
                <img src={mobileCover} />
              ) : (
                <img src={cover} />
              )
            }
          </MediaQuery>}
          
          <div style={{ textAlign: "center" }}>
            <button style={{ padding: "0px 0.5em", margin: "0.2em 0.5em", border: "1px solid red", borderRadius: "5px" }} onClick={() => this.setState({ school: "PSE" })}>PSE</button>
            <button style={{ padding: "0px 0.5em", margin: "0.2em 0.5em", border: "1px solid red", borderRadius: "5px" }} onClick={() => this.setState({ school: "CJL" })}>CJL</button>
            <button style={{ padding: "0px 0.5em", margin: "0.2em 0.5em", border: "1px solid red", borderRadius: "5px" }} onClick={() => this.setState({ school: "SILS" })}>SILS</button>
            <button style={{ padding: "0px 0.5em", margin: "0.2em 0.5em", border: "1px solid red", borderRadius: "5px" }} onClick={() => this.setState({ school: "SSS" })}>SSS</button>
            <button style={{ padding: "0px 0.5em", margin: "0.2em 0.5em", border: "1px solid red", borderRadius: "5px" }} onClick={() => this.setState({ school: "Rikou" })}>Rikou</button>
          </div>
          {school === "PSE" && <PSE courses={courses} reviews={this.state.reviews} />}
          {school === "CJL" && <CJL courses={courses} reviews={this.state.reviews} />}
          {school === "SILS" && <SILS courses={courses} reviews={this.state.reviews} />}
          {school === "SSS" && <SSS courses={courses} reviews={this.state.reviews} />}
          {school === "Rikou" && <Rikou courses={courses} reviews={this.state.reviews} />}
        </div>
      )
  }
}

const mapStateToProps = (state: ReduxRootState) => ({
  fetchedCourses: getFetchedCoursesList(state.fetchedCourses.coursesBySchool),
  fetchedCoursesBySchool: state.fetchedCourses.coursesBySchool
});

export default connect<ReduxStateProps, {}>(
  mapStateToProps,
  null
)(Milestone);