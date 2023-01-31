import { validate } from "../src/validator";

describe("first, we gotta validate the input. bc we are not using typescript", () => {
  test("testing types", () => {
    expect(validate(["ads", "asd", "asd"], 9, 12)).toEqual(true);
    expect(validate(10, 9, 12)).toEqual(false);
    expect(validate(["ads", "asd", 5], 9, 10)).toEqual(false);
    expect(validate(["ads", "asd", "asd"], true, 10)).toEqual(false);
    expect(validate(["ads", "asd", "asd"], 10, "string")).toEqual(false);
  });
});
