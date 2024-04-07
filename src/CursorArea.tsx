import React, { PropsWithChildren, MouseEvent, useState, useRef } from "react";
import "./App.css";

type Props = {
  padding: string;
};

export function CursorArea({ padding, children }: PropsWithChildren<Props>) {
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [angle, setAngle] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  const getAngle = (x: number, y: number) => {
    let angleDegrees = Math.atan2(y, x) * (180 / Math.PI);

    // Ensure angle is positive
    if (angleDegrees < 0) {
      angleDegrees += 360;
    }

    return angleDegrees;
  };

  const mouseEnterEvent = () => {
    setIsMouseInside(true);
  };

  const mouseLeaveEvent = () => {
    setIsMouseInside(false);
  };

  const mouseMoveEvent = (e: MouseEvent<HTMLDivElement>) => {
    if (ref.current != null) {
      const rect = ref.current.getBoundingClientRect();
      const divCenter = {
        y: rect.top + rect.height / 2,
        x: rect.left + rect.width / 2,
      };
      const pointerCoordinates = {
        x: e.clientX - divCenter.x,
        y: divCenter.y - e.clientY,
      };

      setAngle(getAngle(pointerCoordinates.x, pointerCoordinates.y));
    }
  };

  const cursor = () => {
    if (angle > 0 && angle < 15) {
      return "gauntlet0.png";
    } else if (angle > 15 && angle < 37.5) {
      return "gauntlet30.png";
    } else if (angle > 37.5 && angle < 52.5) {
      return "gauntlet45.png";
    } else if (angle > 52.5 && angle < 75) {
      return "gauntlet60.png";
    } else if (angle > 75 && angle < 105) {
      return "gauntlet90.png";
    } else if (angle > 105 && angle < 127.5) {
      return "gauntlet120.png";
    } else if (angle > 127.5 && angle < 142.5) {
      return "gauntlet135.png";
    } else if (angle > 142.5 && angle < 165) {
      return "gauntlet150.png";
    } else if (angle > 165 && angle < 195) {
      return "gauntlet180.png";
    } else if (angle > 195 && angle < 217.5) {
      return "gauntlet210.png";
    } else if (angle > 217.5 && angle < 232.5) {
      return "gauntlet225.png";
    } else if (angle > 232.5 && angle < 255) {
      return "gauntlet240.png";
    } else if (angle > 255 && angle < 285) {
      return "gauntlet270.png";
    } else if (angle > 285 && angle < 307.5) {
      return "gauntlet300.png";
    } else if (angle > 307.5 && angle < 322.5) {
      return "gauntlet315.png";
    } else if (angle > 322.5 && angle < 345) {
      return "gauntlet330.png";
    } else if (angle > 345 && angle <= 360) {
      return "gauntlet0.png";
    }

    return "gauntlet0.png";
  };

  return (
    <div
      id="cursorarea"
      ref={ref}
      onMouseEnter={mouseEnterEvent}
      onMouseLeave={mouseLeaveEvent}
      onMouseMove={mouseMoveEvent}
      style={{ padding: `${padding}` }}
    >
      <>
        {isMouseInside && (
          <style>{`html, body { cursor: url(${cursor()}) 16 16, pointer; }`}</style>
        )}
        {children}
      </>
    </div>
  );
}
