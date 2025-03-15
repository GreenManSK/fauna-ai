import { EmotionSetter, IEmotionParser } from "./iEmotionParser";
import { Emotion } from "../EmotionsConfig";

class RandomEmotionParser implements IEmotionParser {
  isValidParser() {
    return true;
  }

  startParser(setEmotion: EmotionSetter) {
    // Start a timer and set new emotion every 2 seconds
    setInterval(() => {
      const randomEmotion = this.getRandomEmotion();
      setEmotion(randomEmotion);
    }, 2000);
  }
  getRandomEmotion() {
    const emotions = Object.values(Emotion);
    const randomIndex = Math.floor(Math.random() * emotions.length);
    return emotions[randomIndex];
  }
}

export const randomEmotionParser = new RandomEmotionParser();
