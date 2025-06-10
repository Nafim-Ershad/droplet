import React from "react";
import { BlockComponentProps } from "../utils/types";

const DefaultBlock: React.FC<BlockComponentProps> = ({ style, className, data }) => {
    return(
        <div className={className} style={style}>
            { data ? "Default Content" : "Default"}
        </div>
    )
}

export default DefaultBlock;