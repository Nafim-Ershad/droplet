// PageBuilder.tsx
import React, { useState } from "react";
import BuilderCanvas from "./BuilderCanvas";
import StylePanel from "./StylePanel";
import type { Block } from "../types";

const PageBuilder: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<Block | null>(null);

  const updateBlockStyle = (blockId: string, newProps: Partial<Block>) => {
    setBlocks(prev =>
      prev.map(block => (block.id === blockId ? { ...block, ...newProps } : block))
    );
    if (selectedBlock && selectedBlock.id === blockId) {
      setSelectedBlock({ ...selectedBlock, ...newProps });
    }
  };

  const handleBlockClick = (block: Block) => {
    setSelectedBlock(block);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: '100%' }}>
        <BuilderCanvas blocks={blocks} setBlocks={setBlocks} onBlockClick={handleBlockClick} />
      </div>
      <div style={{ width: "300px", borderLeft: "1px solid #ddd", padding: "8px" }}>
        {selectedBlock ? (
          <StylePanel block={selectedBlock} updateBlockStyle={updateBlockStyle} />
        ) : (
          <div>Select a block to edit its styles</div>
        )}
      </div>
    </div>
  );
};

export default PageBuilder;
