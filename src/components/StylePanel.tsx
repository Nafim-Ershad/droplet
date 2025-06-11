// StylePanel.tsx
import React, { useState, useEffect } from "react";
import type { Block } from "../types";

interface StylePanelProps {
  block: Block;
  updateBlockStyle: (blockId: string, newProps: Partial<Block>) => void;
}

const StylePanel: React.FC<StylePanelProps> = ({ block, updateBlockStyle }) => {
  const [styles, setStyles] = useState<React.CSSProperties>(block.styles);
  const [className, setClassName] = useState<string>(block.className);

  useEffect(() => {
    setStyles(block.styles);
    setClassName(block.className);
  }, [block]);

  const handleStyleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedStyles = { ...styles, [name]: value };
    setStyles(updatedStyles);
    updateBlockStyle(block.id, { styles: updatedStyles });
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassName(e.target.value);
    updateBlockStyle(block.id, { className: e.target.value });
  };

  return (
    <div style={{ padding: "16px", border: "1px solid #ddd" }}>
      <h3>Style Panel for {block.type}</h3>
      <div>
        <label>
          Background:
          <input
            type="text"
            name="background"
            value={(styles.background as string) || ""}
            onChange={handleStyleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Padding:
          <input
            type="text"
            name="padding"
            value={(styles.padding as string) || ""}
            onChange={handleStyleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Class Name:
          <input
            type="text"
            value={className}
            onChange={handleClassChange}
          />
        </label>
      </div>
      {/* Add more input fields as needed */}
    </div>
  );
};

export default StylePanel;
