import React from "react";
import { BlockComponentProps } from "../utils/types";

const ParagraphBlock: React.FC<BlockComponentProps> = ({ style, className, data }) => {
    return(
        <p className={className} style={style}>
            { data ? "Paragraph Content" : "Paragraph"}
        </p>
    )
}

export default ParagraphBlock;