// ParagraphBlock.tsx
import React from "react";
import type { BlockComponentProps } from "../types";
import { uniqueClass } from "../utils";

const ParagraphBlock: React.FC<BlockComponentProps> = ({ style, className, data }) => {
  return (
    <p style={style} className={className ? className : uniqueClass()}>
      {data ? "Paragraph Content" : "Paragraph"}
    </p>
  );
};

export default ParagraphBlock;
