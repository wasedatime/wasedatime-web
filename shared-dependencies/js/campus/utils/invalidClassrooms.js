export default filterInvalidClassrooms = (
  courses,
  school,
  classroomNameLength
) => {
  return courses.filter((course) => {
    const keys = course.ks;
    const schools = keys.map((key) => key.school);
    if (!schools.includes(school)) return false;

    const occurrences = course.os;
    for (let i = 0; i < occurrences.length; i++) {
      const classroom = occurrences[i].classroom;
      const building = occurrences[i].building;
      if (classroom.length >= classroomNameLength) {
        console.log(`${building}-${classroom}`);
        return true;
      }
    }
    return false;
  });
};
