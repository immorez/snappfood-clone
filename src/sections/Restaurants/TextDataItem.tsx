import React from "react";

interface TextDataItemProps {
    data: string;
}

const TextDataItem: React.FC<TextDataItemProps> = function ({ data }) {
    return <div>{data}</div>;
};

export default React.memo(TextDataItem);
