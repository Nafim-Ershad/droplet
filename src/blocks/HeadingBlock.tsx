import React from "react";
import { BlockComponentProps } from "../utils/types";

const HeadingBlock: React.FC<BlockComponentProps> = ({ style, className, data }) => {
    return(
        <h1 className={className} style={style}>
            { data ? "Heading Content" : "Heading"}
        </h1>
    )
}

export default HeadingBlock;