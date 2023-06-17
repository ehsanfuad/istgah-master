import { useRef, useState, useEffect } from "react";

const useDraggableContainer = () => {
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [moveX, setMoveX] = useState(null);
  const [moveY, setMoveY] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    function handleMouseUp(e) {
      if (isDragging) {
        setMoveX(e.pageX - startX);
        setMoveY(e.pageY - startY);
        const dist = Math.abs(moveX);
        const elapsedTime = new Date().getTime() - startTime;
        const threshold = 50;
        const allowedTime = 100;
        // if (elapsedTime <= allowedTime && dist >= threshold) {
        //   containerRef.current.scrollLeft +=
        //     (moveX < 0 ? 1 : -1) * containerRef.current.offsetWidth;
        // }
        setIsDragging(false);
        e.preventDefault();
      }
    }

    function handleMouseMove(e) {
      if (isDragging) {
        containerRef.current.scrollLeft -= e.movementX;
        e.preventDefault();
      }
    }

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, moveX, startTime, startX, startY]);

  useEffect(() => {
    function handleTouchEnd(e) {
      if (isDragging) {
        const touch = e.changedTouches[0];
        setMoveX(touch.pageX - startX);
        setMoveY(touch.pageY - startY);
        const dist = Math.abs(moveX);
        const elapsedTime = new Date().getTime() - startTime;
        const threshold = 500;
        const allowedTime = 1000;
        if (elapsedTime <= allowedTime && dist >= threshold) {
          containerRef.current.scrollLeft +=
            (moveX < 0 ? 1 : -1) * containerRef.current.offsetWidth;
        }
        setIsDragging(false);
        // e.preventDefault();
      }
    }

    function handleTouchMove(e) {
      if (isDragging) {
        const touch = e.changedTouches[0];
        containerRef.current.scrollLeft -= touch.screenX - startX;
        setStartX(touch.screenX);
        // e.preventDefault();
      }
    }

    // document.addEventListener("touchend", handleTouchEnd);
    // document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging, moveX, startTime, startX, startY]);

  function handleMouseDown(e) {
    setStartX(e.pageX);
    setStartY(e.pageY);
    setStartTime(new Date().getTime());
    setIsDragging(true);
    e.preventDefault();
  }

  function handleTouchStart(e) {
    const touch = e.changedTouches[0];
    setStartX(touch.screenX);
    setStartY(touch.screenY);
    setStartTime(new Date().getTime());
    setIsDragging(true);
    // e.preventDefault();
  }

  return { containerRef, handleMouseDown, handleTouchStart };
};

export default useDraggableContainer;
