import React from "react";
import { BlockComponentProps } from "../utils/types";

const SpanBlock: React.FC<BlockComponentProps> = ({ style, className, data }) => {
    return(
        <span className={className} style={style}>
            { data ? "Span Content" : "Span"}
        </span>
    )
}

export default SpanBlock;