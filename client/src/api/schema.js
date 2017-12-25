import { normalize, schema } from 'normalizr';

//{ _id: '5a3b9b0fd7776b6d49e060b5', name: '51' }
export const bldgSchema = new schema.Entity(
  'bldgs',
  {},
  { idAttribute: '_id' }
);

//shorthand syntax for new schema.Array(bldgSchema)
export const bldgListSchema = [bldgSchema];

export const test = 5;
