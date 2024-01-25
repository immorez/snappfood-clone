import { IVendor } from "@/redux/services/restaurantApi/types";
import React from "react";
import { useTranslation } from "react-i18next";

interface VendorItemProps extends IVendor {}

const VendorItem: React.FC<VendorItemProps> = function ({
    title,
    coverPath,
    logo,
    discountValueForView,
}) {
    const { t } = useTranslation();
    return (
        <div className="vendor-item">
            <header className="vendor-item--cover">
                <div className="vendor-item--cover-image">
                    <img
                        className="vendor-item--cover-image-img"
                        src={coverPath.replace("300x100", "350x233")}
                        alt={title}
                    />
                </div>
                <div className="vendor-item--cover-logo">
                    <img
                        className="vendor-item--cover-logo-img"
                        src={logo}
                        alt={title}
                    />
                </div>
            </header>
            <div className="vendor-item--details">
                <div className="vendor-item--details-row">
                    <div className="vendor-item--details-row--title">
                        <h3>{title}</h3>
                        {discountValueForView ? (
                            <span className="vendor-item--details-row--discount-badge">
                                <p>
                                    {t("up to {{discount}}%", {
                                        discount:
                                            discountValueForView.toLocaleString(
                                                "fa-IR",
                                            ),
                                    })}
                                </p>
                            </span>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(VendorItem);
