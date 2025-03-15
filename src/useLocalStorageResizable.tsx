import { useEffect } from "react";
import { useLocalStorageValue } from "./useLocalStorageValue";
import { useResizable } from "./useResizable";
import { DEFAULT_MIN_SIZE, DEFAULT_SIZE } from "./defaults";

export const useLocalStorageResizable = () => {
  const [initialSize, updateSize] = useLocalStorageValue(
    "fauna-size",
    DEFAULT_SIZE
  );
  const resizableValue = useResizable(initialSize, DEFAULT_MIN_SIZE);
  const { size } = resizableValue;
  useEffect(() => {
    updateSize(size);
  }, [size, updateSize]);

  return resizableValue;
};
