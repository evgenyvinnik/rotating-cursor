import React, { PropsWithChildren } from "react";
import "./App.css";

export function Cursor() {
  return <div className="overlay_bottom" style={{ background: "blue" }}></div>;
}

type Props = {
  name: string;
};
export function CursorArea({ name, children }: PropsWithChildren<Props>) {
  return (
    <div className="overlay_container">
      <Cursor />
      <div className="overlay_top" style={{ background: "red" }}>
        {children}
      </div>
    </div>
  );
}
