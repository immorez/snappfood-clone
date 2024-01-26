import React from "react";

interface TextDataItemProps {
    text: string;
}

const TextDataItem: React.FC<TextDataItemProps> = function ({ text }) {
    return (
        <li className="text-item" aria-label={text} role="heading">
            {text}
        </li>
    );
};

export default React.memo(TextDataItem);
