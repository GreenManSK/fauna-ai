import { useMemo, useState } from "react";
import "./App.css";
import { emotions } from "./EmotionsConfig";

function App() {
  const [emotion, setEmotion] = useState("Default");
  const [emotionImage, setEmotionImage] = useState(emotions.default[0]);
  const [size, setSize] = useState(200);
  const [position, setPosition] = useState({ x: size, y: size });

  const styles = useMemo(
    () => ({
      width: `${size}px`,
      height: `${size}px`,
      top: `${position.y}px`,
      left: `${position.x}px`,
    }),
    [size, position]
  );

  return (
    <div className="App" style={styles}>
      <img src={emotionImage} alt={`${emotion} Fauna`} />
    </div>
  );
}

export default App;
