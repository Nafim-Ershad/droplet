import DivBlock from "../blocks/DivBlock";
import HeadingBlock from "../blocks/HeadingBlock";
import ParagraphBlock from "../blocks/ParagraphBlock";
import SectionBlock from "../blocks/SectionBlock";
import SpanBlock from "../blocks/SpanBlock";


export interface Block {
  id: string;
  type: string;
  styles: React.CSSProperties;
  className: string;
  children?: Block[]
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

export const BLOCK_TYPES: { [key: string]: BlockTypeConfig } = {
  SECTION: {
    type: "SECTION",
    component: SectionBlock,
    defaultStyles: { padding: "20px", background: "#f0f0f0" },
    defaultClass: "section-default",
  },
  PARAGRAPH: {
    type: "PARAGRAPH",
    component: ParagraphBlock,
    defaultStyles: { fontSize: "16px", lineHeight: "1.5" },
    defaultClass: "paragraph-default",
  },
  HEADING: {
    type: "HEADING",
    component: HeadingBlock,
    defaultStyles: { fontSize: "24px", fontWeight: "bold" },
    defaultClass: "heading-default",
  },
  DIV: {
    type: "DIV",
    component: DivBlock,
    defaultStyles: { margin: "10px 0" },
    defaultClass: "div-default",
  },
  SPAN: {
    type: "SPAN",
    component: SpanBlock,
    defaultStyles: { margin: "5px 0" },
    defaultClass: "span-default",
  },
};