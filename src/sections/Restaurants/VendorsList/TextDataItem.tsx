import React from "react";

interface TextDataItemProps {
    text: string;
}

const TextDataItem: React.FC<TextDataItemProps> = function ({ text }) {
    return <div className="text-item">{text}</div>;
};

export default React.memo(TextDataItem);
