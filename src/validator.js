const validate = (frames, duration, fps) => {
  if (typeof duration != "number") {
    return false;
  }
  if (typeof fps != "number") {
    return false;
  }
  if (!Array.isArray(frames)) {
    return false;
  }

  const allStrings = frames.every((i) => typeof i == "string");

  if (!allStrings) {
    return false;
  }

  return true;
};

export { validate };
