// SectionBlock.tsx
import React from "react";
import type { BlockComponentProps } from "../types";
import { uniqueClass } from "../utils";

const SectionBlock: React.FC<BlockComponentProps> = ({ style, className, data }) => {
  return (
    <section style={style} className={className ? className : uniqueClass()}>
      {data ? "Section Content" : "Section"}
    </section>
  );
};

export default SectionBlock;
