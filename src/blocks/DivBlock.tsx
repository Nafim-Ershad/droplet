// DivBlock.tsx
import React from "react";
import type { BlockComponentProps } from "../types";
import { uniqueClass } from "../utils";

const DivBlock: React.FC<BlockComponentProps> = ({ style, className, data }) => {
  return (
    <div style={style} className={className ? className : uniqueClass()}>
      {data ? "Div Content" : "Div"}
    </div>
  );
};

export default DivBlock;
