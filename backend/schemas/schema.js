import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import photos from "./photos";
import gallery from "./gallery";
import information from "./information";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([photos, gallery, information]),
});
