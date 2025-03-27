import {useMemo} from 'react';
import './App.css';
import {useLocalStorageResizable} from './useLocalStorageResizable';
import {useLocalStorageMovable} from './useLocalStorageMovable';
import {BORDER_PERCENTAGE} from './defaults';
import {useEmotion} from './useEmotion';
import {useEmotionParsers} from './useEmotionParsers';

function App() {
    const {emotion, emotionImage, setEmotion} = useEmotion();
    useEmotionParsers(setEmotion);
    const {size, handleMouseDown: handleResizeMouseDown} =
        useLocalStorageResizable();
    const {position, handleMouseDown} = useLocalStorageMovable(size);

    const styles = useMemo(
        () => ({
            width: `${size}px`,
            height: `${size}px`,
            top: `${position.y}px`,
            left: `${position.x}px`,
            '--border-size': `${size * BORDER_PERCENTAGE}px`,
        }),
        [size, position]
    );

    return (
        <div className="App" style={styles}>
            <div
                className="MoveButton FunctionButton"
                onPointerDown={handleMouseDown}
            />
            <div
                className="ResizeButton FunctionButton"
                onPointerDown={handleResizeMouseDown}
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
