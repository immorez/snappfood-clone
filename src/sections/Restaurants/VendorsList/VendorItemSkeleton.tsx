import React from "react";

const VendorItemSkeleton = function () {
    return (
        <div className="skeleton">
            <div className="skeleton--cover pulse" />
            <div className="skeleton--title pulse" />
            <div className="skeleton--description pulse" />
        </div>
    );
};

export default React.memo(VendorItemSkeleton);
