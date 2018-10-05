export const filterInvalidClassrooms = (
  courses,
  school,
  classroomNameLength
) => {
  return courses.filter(course => {
    const links = course.links;
    const schools = links.map(link => link.school);
    if (!schools.includes(school)) return false;

    const occurrences = course.occurrences;
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
