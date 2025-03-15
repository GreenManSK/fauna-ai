import { EmotionSetter, IEmotionParser } from "./IEmotionParser";
import { Emotion, emotionsList } from "../EmotionsConfig";

const timerKey = "Fauna-ChatGPT-refreshTimer";
const defaultTimerValue = 250;

class ChatGPTParser implements IEmotionParser {
  private lastEmotion = Emotion.default;
  private lastCheckHash = -1;

  isValidParser() {
    return window.location.href.includes("chatgpt.com");
  }

  startParser(setEmotion: EmotionSetter) {
    let refreshTimer = localStorage.getItem(timerKey);
    if (!refreshTimer) {
      refreshTimer = `${defaultTimerValue}`;
      localStorage.setItem("refreshTimer", refreshTimer);
    }

    this.updateEmotion(setEmotion);
    setInterval(() => {
      this.updateEmotion(setEmotion);
    }, +refreshTimer);
  }

  updateEmotion(setEmotion: EmotionSetter) {
    const newEmotion = this.getNewestEmotion();
    if (newEmotion !== this.lastEmotion) {
      this.lastEmotion = newEmotion;
      console.log("Fauna AI ChatGPTParser: ", newEmotion);
      setEmotion(newEmotion);
    }
  }

  getNewestEmotion() {
    const comments = Array.from(document.querySelectorAll(".markdown *"));
    if (comments.length === this.lastCheckHash) {
      return this.lastEmotion;
    }
    this.lastCheckHash = comments.length;

    for (let i = comments.length - 1; i >= 0; i--) {
      const comment = comments[i] as HTMLElement;
      const commentText = comment.innerText.toLowerCase();
      if (commentText.startsWith(this.lastEmotion)) {
        break;
      }

      for (const emotion of emotionsList) {
        if (commentText.startsWith(emotion)) {
          return emotion;
        }
      }
    }
    return this.lastEmotion;
  }
}

export const chatGPTParser = new ChatGPTParser();
