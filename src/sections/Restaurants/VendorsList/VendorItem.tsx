import { IVendor } from "@/redux/services/restaurantApi/types";
import React from "react";

interface VendorItemProps extends IVendor {}

const VendorItem: React.FC<VendorItemProps> = function ({ title }) {
    return <div>{title}</div>;
};

export default React.memo(VendorItem);
