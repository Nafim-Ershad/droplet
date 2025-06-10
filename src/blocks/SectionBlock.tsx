import React from "react";
import { BlockComponentProps } from "../utils/types";

const SectionBlock: React.FC<BlockComponentProps> = ({ style, className, data }) => {
    return(
        <section className={className} style={style}>
            { data ? "Section Content" : "Section"}
        </section>
    )
}

export default SectionBlock;