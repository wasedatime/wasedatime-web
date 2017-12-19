const assert = require('assert');
const Course = require('../../models/Course');
const mongoose = require('mongoose');

describe('Reading courses', () => {
  let calculus_a = { _id: '5a321dcfb285813cff168c80' };
  it('finds all courses with a title of Calculus A', done => {
    Course.find({ title: 'Calculus A' }).then(courses => {
      assert(courses[0]._id.toString() === calculus_a._id);
      calculus_a = courses[0];
      done();
    });
  });

  it('find a course with a particular id', done => {
    Course.findOne({ _id: calculus_a._id }).then(course => {
      assert(course.title === calculus_a.title);
      done();
    });
  });
});
