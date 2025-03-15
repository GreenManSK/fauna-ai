import { useCallback, useEffect, useRef, useState } from "react";

export const useResizable = (initialSize: number, minSize: number) => {
  const [size, setSize] = useState(initialSize);
  const updateSizeRef = useRef(false);

  const startRef = useRef<number>(0);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      startRef.current = e.clientX - size;
      updateSizeRef.current = true;
    },
    [size]
  );

  useEffect(() => {
    const handleMouseUp = () => (updateSizeRef.current = false);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (updateSizeRef.current) {
        const newSize = moveEvent.clientX - startRef.current;
        setSize(newSize);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size]);

  return { size: Math.max(size, minSize), handleMouseDown };
};
