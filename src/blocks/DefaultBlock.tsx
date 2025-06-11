// DefaultBlock.tsx
import React from "react";
import { uniqueClass } from "../utils";

interface DefaultBlockProps {
  style: React.CSSProperties;
  className: string;
  children?: React.ReactNode
}

const DefaultBlock: React.FC<DefaultBlockProps> = ({ style, className, children }) => {
  return (
    <div style={style} className={className ? className : uniqueClass()}>
      {children || "Default Content"}
    </div>
  );
};

export default DefaultBlock;
