import {useCallback, useEffect, useRef, useState} from 'react';

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
        document.addEventListener('pointerup', handleMouseUp);
        return () => {
            document.removeEventListener('pointerup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (moveEvent: MouseEvent) => {
            if (updateSizeRef.current) {
                const newSize = moveEvent.clientX - startRef.current;
                setSize(newSize);
            }
        };

        document.addEventListener('pointermove', handleMouseMove);
        return () => {
            document.removeEventListener('pointermove', handleMouseMove);
        };
    }, [size]);

    return {size: Math.max(size, minSize), handleMouseDown};
};
