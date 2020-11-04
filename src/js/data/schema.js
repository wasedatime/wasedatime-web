import { schema } from "normalizr";

const courseSchema = new schema.Entity("courses", {}, { idAttribute: "a" });

export const coursesSchema = [courseSchema];

//{ _id: '51', name: '51' }
const buildingSchema = new schema.Entity(
  "buildings",
  {},
  { idAttribute: "_id" }
);
//shorthand syntax for new schema.Array(bldgSchema)
export const buildingsSchema = [buildingSchema];
// { id: "51-04-05", name: "04-05" }
const buildingClassroomSchema = new schema.Entity(
  "classrooms",
  {},
  { idAttribute: "id" }
);

export const buildingClassroomsSchema = [buildingClassroomSchema];

// {
//   _id: "63-201",
//   name: "201",
//   courses: {
//     id: "2603023001012018260701200326",
//     title: "Signal Processing"
//   }
// }
const occupiedClassroomSchema = new schema.Entity(
  "occupiedClassrooms",
  {},
  {
    idAttribute: "_id",
    processStrategy: (entity) => {
      return {
        id: entity._id,
        name: entity.name,
        courses: entity.courses,
      };
    },
  }
);

export const occupiedClassroomsSchema = [occupiedClassroomSchema];
