import { useCallback, useState } from "react";
import { emotions, Emotions } from "./EmotionsConfig";

export const useEmotion = () => {
  const [emotion, setEmotion] = useState(Emotions.default);
  const [emotionImage, setEmotionImage] = useState(emotions[emotion][0]);

  const setNewEmotion = useCallback((newEmotion: Emotions) => {
    setEmotion(newEmotion);
    const newEmotionImages = emotions[newEmotion];
    const randomIndex = Math.floor(Math.random() * newEmotionImages.length);
    setEmotionImage(newEmotionImages[randomIndex]);
  }, []);

  return {
    emotion,
    emotionImage,
    setEmotion: setNewEmotion,
  };
};
