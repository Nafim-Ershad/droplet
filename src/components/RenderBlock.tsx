import DefaultBlock from "../blocks/DefaultBlock";

import { BLOCK_TYPES } from "../blocksConfig";
import type { Block } from "../types";

// Render each block and attach an onClick event to allow editing
const RenderBlock: React.FC<{ block: Block, blockClick: (block: Block) => void }> = ({ block, blockClick }) => {
    const blockConfig = BLOCK_TYPES[block.type];

    const BlockComponent = blockConfig ? blockConfig.component : DefaultBlock;
    return (
        <div onClick={() => blockClick(block)}>
            <BlockComponent
                style={block.styles}
                className={block.className}
                data={block}
            />
        </div>
    );
};

export default RenderBlock;