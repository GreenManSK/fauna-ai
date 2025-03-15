import {Emotion} from '../EmotionsConfig';

export type EmotionSetter = (emotion: Emotion) => void;

export interface IEmotionParser {
    /**
     * Check if parser is valid for current site
     * @returns true if parser is valid, false otherwise
     */
    isValidParser: () => boolean;

    startParser: (setEmotion: EmotionSetter) => void;
}
