import { useCallback, useEffect, useRef, useState } from "react";

export const useMovable = (initialPosition: { x: number; y: number }) => {
  const [position, setPosition] = useState(initialPosition);
  const updatePositionRef = useRef(false);

  const startRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      startRef.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
      updatePositionRef.current = true;
    },
    [position.x, position.y]
  );

  useEffect(() => {
    const handleMouseUp = () => (updatePositionRef.current = false);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (updatePositionRef.current) {
        const newX = moveEvent.clientX - startRef.current.x;
        const newY = moveEvent.clientY - startRef.current.y;

        setPosition({ x: newX, y: newY });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position.x, position.y]);

  return { position, handleMouseDown };
};
