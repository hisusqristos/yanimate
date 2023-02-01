import { validate } from "./validator";
import { sleep } from "./sleep";

const animate = (frames, fps, duration) => {
  const clear = "\033[2J";
  duration = duration || 1;

  const speed = 1000 / fps; // how long to wait after playing a frame
  const repeatThisTimes = (duration * 1000) / speed;

  for (let count = 0; count < repeatThisTimes; count++) {
    for (let i = 0; i < frames.length; i++) {
      console.log(clear, frames[i]);
      sleep(speed);
    }
  }
};
