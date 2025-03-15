import {useCallback, useState} from 'react';
import {emotions, Emotion} from './EmotionsConfig';

export const useEmotion = () => {
    const [emotion, setEmotion] = useState(Emotion.default);
    const [emotionImage, setEmotionImage] = useState(emotions[emotion][0]);

    const setNewEmotion = useCallback((newEmotion: Emotion) => {
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
