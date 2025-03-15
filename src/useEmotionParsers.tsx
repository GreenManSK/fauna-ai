import { useEffect } from "react";
import { randomEmotionParser } from "./emotionParsers/RandomEmotionParser";
import { EmotionSetter } from "./emotionParsers/IEmotionParser";
import { chatGPTParser } from "./emotionParsers/ChatGPTParser";

// Parsers are used in order, first that returns true is used and rest is ignored
const parsers = [chatGPTParser, randomEmotionParser];

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
