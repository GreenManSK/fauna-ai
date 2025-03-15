import { useMemo, useState } from "react";
import "./App.css";
import { emotions } from "./EmotionsConfig";
import { useMovable } from "./useMovable";
import { useResizable } from "./useResizable";

function App() {
  const [emotion, setEmotion] = useState("Default");
  const [emotionImage, setEmotionImage] = useState(emotions.default[0]);
  const { size, handleMouseDown: handleResizeMouseDown } = useResizable(200);
  const { position, handleMouseDown } = useMovable({
    x: size,
    y: size,
  });

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
