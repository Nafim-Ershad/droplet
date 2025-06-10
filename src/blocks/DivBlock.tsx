import React from "react";
import { BlockComponentProps } from "../utils/types";

const DivBlock: React.FC<BlockComponentProps> = ({ style, className, data }) => {
    return(
        <div className={className} style={style}>
            { data ? "Div Content" : "Div"}
        </div>
    )
}

export default DivBlock;