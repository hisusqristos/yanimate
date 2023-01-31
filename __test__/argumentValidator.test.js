describe("first, we gotta validate the input. bc we are not using typescript", () => {
  test("testing types", () => {
    expect(validate(["ads", "asd", 5], 9, 10)).toEqual(true);
    expect(validate(["ads", "asd", "asd"], true, 10)).toEqual(true);
    expect(validate(["ads", "asd", "asd"], true, 10)).toEqual(true);
  });

});
