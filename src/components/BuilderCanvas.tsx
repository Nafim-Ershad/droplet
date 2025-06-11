import React from "react";
import { useDrop } from "react-dnd";
import { BLOCK_TYPES } from "../blocksConfig";
import DefaultBlock from "../blocks/DefaultBlock";
import type { Block } from "../types";

interface BuilderCanvasProps {
  blocks: Block[];
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
  onBlockClick: (block: Block) => void;
}

export const BuilderCanvas: React.FC<BuilderCanvasProps> = ({
  blocks,
  setBlocks,
  onBlockClick,
}) => {
  // The useDrop hook sets up drop handling for elements with type "BLOCK"
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: Object.values(BLOCK_TYPES).map(obj => obj.type),
    drop: (item: { type: string }) => {
      // Retrieve the block configuration from your BLOCK_TYPES mapping.
      const blockConfig = BLOCK_TYPES[item.type];
      if (blockConfig) {
        const newBlock: Block = {
          id: new Date().getTime().toString(), // simple ID; consider using UUIDs for production.
          type: item.type,
          styles: { ...blockConfig.defaultStyles },
          className: blockConfig.defaultClass,
        };
        setBlocks((prevBlocks) => [...prevBlocks, newBlock]);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }), [setBlocks]);

  // Render each block and attach an onClick event to allow editing
  const RenderBlock: React.FC<{ block: Block }> = ({ block }) => {
    const blockConfig = BLOCK_TYPES[block.type];
    const BlockComponent = blockConfig ? blockConfig.component : DefaultBlock;
    return (
      <div onClick={() => onBlockClick(block)}>
        <BlockComponent
          style={block.styles}
          className={block.className}
          data={block}
        />
      </div>
    );
  };

  return (
    // Attach the dropRef to this div. Even though you don’t see onDrop here,
    // the drop behavior is enabled by the ref provided by useDrop.
    <div
      ref={dropRef}
      style={{
        height: "100%",
        border: "2px dashed #ddd",
        padding: "20px",
        background: isOver ? "#f9f9f9" : "#fff",
      }}
    >
      {blocks.map((block) => (
        <RenderBlock key={block.id} block={block} />
      ))}
    </div>
  );
};

export default BuilderCanvas;
