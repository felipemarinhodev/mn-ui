import React from "react";
import "./Divider.css";

export type DividerProps = {
  /**
   * will apply width by percent. So you must provide a value between 0 and 100. By default the width is 90%.
   */
  width?: number;
}

export function Divider({ width = 90 }: DividerProps) {
  return <hr style={{ width: `${width}%` }} className="divider" ></hr >;
}
