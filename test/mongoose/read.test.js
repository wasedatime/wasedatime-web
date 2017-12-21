const assert = require('assert');
const Course = require('../../models/Course');
const Classroom = require('../../models/Classroom');
const mongoose = require('mongoose');

describe('Reading courses', () => {
  before(done => {
    Course.find({ title: 'Calculus A' })
      .then(courses => {
        calculus_a = courses[0];
        cls1 = calculus_a.occurrences[0].classroom;
        cls2 = calculus_a.occurrences[1].classroom;
        done();
      })
      .catch(err => {
        console.log(err.stack);
        assert(false);
      });
  });

  it('finds the classroom of Calculus A', done => {
    Classroom.find({ 'courses.title': 'Calculus A' })
      .then(classrooms => {
        if (cls1 !== classrooms[0].title) {
          assert(cls1 == classrooms[1].title);
          assert(cls2 == classrooms[0].title);
        } else {
          assert(cls1 == classrooms[0].title);
          assert(cls2 == classrooms[1].title);
        }
        done();
      })
      .catch(err => {
        console.log(err.stack);
        assert(false);
      });
  });
});
