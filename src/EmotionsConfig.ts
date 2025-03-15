import fauna1 from "./assets/Emote-fauna1.png";
import fauna2 from "./assets/Emote-fauna2.png";
import fauna3 from "./assets/Emote-fauna3.png";
import fauna4 from "./assets/Emote-fauna4.png";
import fauna5 from "./assets/Emote-fauna5.png";
import fauna6 from "./assets/Emote-fauna6.png";
import fauna7 from "./assets/Emote-fauna7.png";
import fauna8 from "./assets/Emote-fauna8.png";
import fauna11 from "./assets/Emote-fauna11.png";
import fauna17 from "./assets/Emote-fauna17.png";
import fauna18 from "./assets/Emote-fauna18.png";
import fauna19 from "./assets/Emote-fauna19.png";
import fauna20 from "./assets/Emote-fauna20.png";
import fauna21 from "./assets/Emote-fauna21.png";
import fauna22 from "./assets/Emote-fauna22.png";
import fauna29 from "./assets/Emote-fauna29.png";
import fauna30 from "./assets/Emote-fauna30.png";
import fauna31 from "./assets/Emote-fauna31.png";
import fauna32 from "./assets/Emote-fauna32.png";

export enum Emotion {
  default = "default",
  angry = "angry",
  happy = "happy",
  inLove = "inLove",
  shocked = "shocked",
  worried = "worried",
  sad = "sad",
  laughing = "laughing",
  bored = "bored",
  disgusted = "disgusted",
}

export const emotions = {
  [Emotion.default]: [fauna11],
  [Emotion.angry]: [fauna1, fauna5, fauna7, fauna31],
  [Emotion.happy]: [fauna2, fauna8, fauna11, fauna17, fauna22],
  [Emotion.inLove]: [fauna3, fauna8],
  [Emotion.shocked]: [fauna21, fauna30, fauna32],
  [Emotion.worried]: [fauna29, fauna30],
  [Emotion.sad]: [fauna6],
  [Emotion.laughing]: [fauna4],
  [Emotion.bored]: [fauna19],
  [Emotion.disgusted]: [fauna20],
};
