import { schema } from 'normalizr';

const courseSchema = new schema.Entity('courses', {}, { idAttribute: '_id' });

export const coursesSchema = [courseSchema];

//{ _id: '5a3b9b0fd7776b6d49e060b5', name: '51' }
const bldgSchema = new schema.Entity('bldgs', {}, { idAttribute: '_id' });
const buildingSchema = new schema.Entity(
  'buildings',
  {},
  { idAttribute: '_id' }
);
//shorthand syntax for new schema.Array(bldgSchema)
export const bldgListSchema = [bldgSchema];
export const buildingsSchema = [buildingSchema];
// { id: "5a3b7c1ea2b3d21167f156b1", name: "04-05" }
const classroomSchema = new schema.Entity(
  'classrooms',
  {},
  { idAttribute: 'id' }
);

export const classroomListSchema = [classroomSchema];

// { _id: "5a3b7c1ea2b3d21167f15643",
//   courses: {id: "5a3abb8f57ae267ac79fb856", title: "Communication Strategies 2 Mon-1 ISHIDA" },
//   name : "B03" }
const occupiedClassroomSchema = new schema.Entity(
  'occupiedClassrooms',
  {},
  {
    idAttribute: '_id',
    processStrategy: entity => {
      return {
        id: entity._id,
        name: entity.name,
        courses: entity.courses
      };
    }
  }
);

export const occupiedClassroomListSchema = [occupiedClassroomSchema];
