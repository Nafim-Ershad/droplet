import React from 'react';

// types.ts
export interface Block {
  id: string;
  type: string;
  styles: React.CSSProperties;
  className: string;
  children?: Block[]; // Allow nested elements
}

// Props to pass to each block component
export interface BlockComponentProps {
  style: React.CSSProperties;
  className: string;
  data?: Block; // optional, allows you to pass the full block object if needed
}

// A configuration interface for each block type
export interface BlockTypeConfig {
  type: string;
  component: React.FC<BlockComponentProps>;
  defaultStyles: React.CSSProperties;
  defaultClass: string;
}