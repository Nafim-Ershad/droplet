// BlockGallery.tsx
import React from "react";
import DraggableBlock from "./DraggableBlock";

const BlockGallery: React.FC = () => {
  const blocksList = [
    { type: "SECTION" },
    { type: "PARAGRAPH" },
    { type: "HEADING" },
    { type: "DIV" },
  ];

  return (
    <div>
      {blocksList.map((block, index) => (
        <DraggableBlock key={index} blockType={block.type} blockData={block} />
      ))}
    </div>
  );
};

export default BlockGallery;
