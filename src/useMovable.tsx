import {useCallback, useEffect, useRef, useState} from 'react';

export const useMovable = (
    initialPosition: {x: number; y: number},
    size: number
) => {
    const [position, setPosition] = useState(initialPosition);
    const updatePositionRef = useRef(false);

    const startRef = useRef<{x: number; y: number}>({x: 0, y: 0});

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

    const ensureVisible = useCallback(() => {
        setPosition((prevPosition) => {
            const newX = Math.max(
                size / 2,
                Math.min(prevPosition.x, window.innerWidth - size / 2)
            );
            const newY = Math.max(
                size / 2,
                Math.min(prevPosition.y, window.innerHeight - size / 2)
            );
            return {x: newX, y: newY};
        });
    }, [size]);

    useEffect(() => {
        ensureVisible();
    }, [ensureVisible, size]);

    useEffect(() => {
        const handleMouseUp = () => {
            ensureVisible();
            updatePositionRef.current = false;
        };
        document.addEventListener('pointerup', handleMouseUp);
        return () => {
            document.removeEventListener('pointerup', handleMouseUp);
        };
    }, [ensureVisible]);

    useEffect(() => {
        const handleMouseMove = (moveEvent: MouseEvent) => {
            if (updatePositionRef.current) {
                const newX = moveEvent.clientX - startRef.current.x;
                const newY = moveEvent.clientY - startRef.current.y;

                setPosition({x: newX, y: newY});
            }
        };

        document.addEventListener('pointermove', handleMouseMove);
        return () => {
            document.removeEventListener('pointermove', handleMouseMove);
        };
    }, [position.x, position.y]);

    useEffect(() => {
        const handleResize = () => {
            ensureVisible();
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [ensureVisible]);

    return {position, handleMouseDown, ensureVisible};
};
