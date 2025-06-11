// blocksConfig.ts

import type { BlockTypeConfig } from "./types";

import SectionBlock from "./blocks/SectionBlock";
import ParagraphBlock from "./blocks/ParagraphBlock";
import HeadingBlock from "./blocks/HeadingBlock";
import DivBlock from "./blocks/DivBlock";


// Define your block types here
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
};
