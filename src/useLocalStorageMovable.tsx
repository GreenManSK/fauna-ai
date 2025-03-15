import { useEffect } from "react";
import { useLocalStorageValue } from "./useLocalStorageValue";
import { useMovable } from "./useMovable";
import { DEFAULT_POSITION } from "./defaults";

export const useLocalStorageMovable = (size: number) => {
  const [initialPosition, updatePosition] = useLocalStorageValue(
    "fauna-position",
    DEFAULT_POSITION
  );
  const { position, handleMouseDown } = useMovable(initialPosition, size);

  useEffect(() => {
    updatePosition(position);
  }, [position, updatePosition]);

  return { position, handleMouseDown };
};
