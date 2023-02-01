// (*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ♡ sweeet dreams

const sleep = (milliseconds:number) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};

export { sleep };
