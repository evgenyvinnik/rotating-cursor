import React, { PropsWithChildren, SyntheticEvent, useState } from "react";
import "./App.css";

type Props = {
  padding: string;
};

export function CursorArea({ padding, children }: PropsWithChildren<Props>) {
  const [isMouseInside, setIsMouseInside] = useState(false);

  const mouseOverEvent = () => {
    console.log("mouse over");
  };

  const mouseOutEvent = () => {
    console.log("mous out");
  };

  const mouseEnterEvent = () => {
    console.log("mouse enter");
    setIsMouseInside(true);
  };

  const mouseLeaveEvent = () => {
    console.log("mouse leave");
    setIsMouseInside(false);
  };

  const mouseMoveEvent = (e: SyntheticEvent) => {
    // e.preventDefault();
    console.log(e);
  };

  return (
    <div
      onMouseEnter={mouseEnterEvent}
      onMouseLeave={mouseLeaveEvent}
      onMouseMove={mouseMoveEvent}
      onMouseOut={mouseOutEvent}
      onMouseOver={mouseOverEvent}
      style={{ background: "red", padding: `${padding}` }}
    >
      <>
        {isMouseInside && <style>{`html, body { cursor: none; }`}</style>}
        {children}
      </>
    </div>
    // <div className="overlay_container">
    //   <Cursor />
    //   <div className="overlay_bottom" style={{ background: "red" }}>
    //     {children}
    //   </div>
    // </div>
  );
}
