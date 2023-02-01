const validate = (frames, duration, fps) => {
  if (typeof duration != "number") {
    console.log("duration should be number");
    return false;
  }
  if (typeof fps != "number") {
    console.log("fps should be Number");
    return false;
  }
  if (!Array.isArray(frames)) {
    console.log("frames should be Array");
    return false;
  }

  const allStrings = frames.every((i) => typeof i == "string");

  if (!allStrings) {
    console.log("items of array `frames` should be String");
    return false;
  }

  return true;
};

export { validate };
