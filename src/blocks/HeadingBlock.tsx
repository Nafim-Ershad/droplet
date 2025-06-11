// HeadingBlock.tsx
import React from "react";
import type { BlockComponentProps } from "../types";
import { uniqueClass } from "../utils";


const HeadingBlock: React.FC<BlockComponentProps> = ({ style, className, data }) => {
  return (
    <h1 style={style} className={className ? className : uniqueClass()}>
      {data ? "Heading Content" : "Heading"}
    </h1>
  );
};

export default HeadingBlock;
