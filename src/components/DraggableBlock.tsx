import React from 'react';
import { useDrag } from 'react-dnd';

export interface DraggableBlockProps {
  blockType: string;
  blockData: { type: string };
}

const DraggableBlock: React.FC<DraggableBlockProps> = ({ blockType, blockData }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: blockType,
    item: { ...blockData },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [blockData]);

  return (
    <div
      ref={dragRef}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
    >
      {blockType}
    </div>
  );
};

export default DraggableBlock;