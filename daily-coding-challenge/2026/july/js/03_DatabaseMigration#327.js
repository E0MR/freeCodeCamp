/*

Database Migration

Given two database objects, return the second object with any missing properties from the first filled in.
  Fields that already exist in the record should not be overwritten.

Tests:
  migrateRecord({ username: "", posts: 0 }, { verified: true }) should return { username: "", posts: 0, verified: true }.
  migrateRecord({ username: "", posts: 0 }, { username: "camper", posts: 5 }) should return { username: "camper", posts: 5 }.
  migrateRecord({ username: "", posts: 0, verified: false }, { username: "camper" }) should return { username: "camper", posts: 0, verified: false }.
  migrateRecord({ username: "", posts: 0 }, { username: "camper", role: "admin" }) should return { username: "camper", role: "admin", posts: 0 }.
  migrateRecord({ username: "", email: "", posts: 0, verified: false, role: "user", banned: false }, { username: "camper", email: "camper@freecodecamp.org", role: "admin" }) should return { username: "camper", email: "camper@freecodecamp.org", role: "admin", posts: 0, verified: false, banned: false }.

*/

function migrateRecord(schema, record) {
  return { ...schema, ...record };
}

console.log(migrateRecord({ username: "", posts: 0 }, { verified: true })); // { username: "", posts: 0, verified: true }.
console.log(
  migrateRecord({ username: "", posts: 0 }, { username: "camper", posts: 5 }),
); // { username: "camper", posts: 5 }.
console.log(
  migrateRecord(
    { username: "", posts: 0, verified: false },
    { username: "camper" },
  ),
); // { username: "camper", posts: 0, verified: false }.
console.log(
  migrateRecord(
    { username: "", posts: 0 },
    { username: "camper", role: "admin" },
  ),
); // { username: "camper", role: "admin", posts: 0 }.
console.log(
  migrateRecord(
    {
      username: "",
      email: "",
      posts: 0,
      verified: false,
      role: "user",
      banned: false,
    },
    { username: "camper", email: "camper@freecodecamp.org", role: "admin" },
  ),
); // { username: "camper", email: "camper@freecodecamp.org", role: "admin", posts: 0, verified: false, banned: false }.
