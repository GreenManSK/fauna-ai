import { useMemo, useState } from "react";
import "./App.css";
import { emotions } from "./EmotionsConfig";
import { useLocalStorageResizable } from "./useLocalStorageResizable";
import { useLocalStorageMovable } from "./useLocalStorageMovable";
import { BORDER_PERCENTAGE } from "./defaults";

function App() {
  const [emotion, setEmotion] = useState("Default");
  const [emotionImage, setEmotionImage] = useState(emotions.default[0]);
  const { size, handleMouseDown: handleResizeMouseDown } =
    useLocalStorageResizable();
  const { position, handleMouseDown } = useLocalStorageMovable();

  const styles = useMemo(
    () => ({
      width: `${size}px`,
      height: `${size}px`,
      top: `${position.y}px`,
      left: `${position.x}px`,
      "--border-size": `${size * BORDER_PERCENTAGE}px`,
    }),
    [size, position]
  );

  return (
    <div className="App" style={styles}>
      <div
        className="MoveButton FunctionButton"
        onMouseDown={handleMouseDown}
      />
      <div
        className="ResizeButton FunctionButton"
        onMouseDown={handleResizeMouseDown}
      />
      <img
        src={emotionImage}
        alt={`${emotion} Fauna`}
        onDragStart={(e) => e.preventDefault()} // Prevent drag-and-drop behavior
      />
    </div>
  );
}

export default App;
