import { useEffect } from "react";
import { randomEmotionParser } from "./emotionParsers/RandomEmotionParser";
import { EmotionSetter } from "./emotionParsers/iEmotionParser";

// Parsers are used in order, first that returns true is used and rest is ignored
const parsers = [randomEmotionParser];

export const useEmotionParsers = (setEmotion: EmotionSetter) => {
  useEffect(() => {
    for (const parser of parsers) {
      if (parser.isValidParser()) {
        parser.startParser(setEmotion);
        return;
      }
    }
  }, [setEmotion]);
};
