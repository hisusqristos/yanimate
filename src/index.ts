import readline from "readline";
import { sleep } from "./sleep";

const animate = (frames: string[], fps: number, duration: number) => {
  duration = duration || 1;
  const speed = 1000 / fps; // how long to wait after playing a frame
  const repeatThisTimes = (duration * 1000) / speed;

  for (let count = 0; count < repeatThisTimes; count++) {
    for (let i = 0; i < frames.length; i++) {
      readline.clearScreenDown(process.stdout); // clears terminal
      console.log(frames[i]);
      sleep(speed);
    }
  }
};

animate(["ads", "asg", "asdf"], 12, 4);
