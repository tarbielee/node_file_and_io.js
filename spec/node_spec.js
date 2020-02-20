let Visitor = require("../src/nodeio");
let visitor = new Visitor(
  "alice",
  19,
  "05/07/19",
  "11Oclock",
  "jolly",
  "John Greek"
);

describe("Visitor", function() {
  it("should expect fullName", function() {
    expect(visitor.fullName).toBe("alice");
  });
  it("should expect age", function() {
    expect(visitor.age).toBe(19);
  });
  it("should expect dateOfvisit", function() {
    expect(visitor.dateOfVisit).toBe("05/07/19");
  });
  it("should expect timeOfVisit", function() {
    expect(visitor.timeOfVisit).toBe("11Oclock");
  });
  it("should expect comments", function() {
    expect(visitor.comments).toBe("jolly");
  });
  it("should expect assistor", function() {
    expect(visitor.assistor).toBe("John Greek");
  });
});
