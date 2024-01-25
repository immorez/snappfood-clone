import { IVendor } from "@/redux/services/restaurantApi/types";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa6";
import { MdSportsMotorsports } from "react-icons/md";

interface VendorItemProps extends IVendor {}

const VendorItem: React.FC<VendorItemProps> = function ({
    title,
    coverPath,
    logo,
    discountValueForView,
    countReview,
    rate,
    isZFExpress,
    max_eta,
    deliveryFee,
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
                    <div className="vendor-item--details-row--rating">
                        <span className="reviews-count">
                            <span>(</span>
                            <p>{countReview.toLocaleString("fa-IR")}</p>
                            <span>)</span>
                        </span>
                        <div className="rate">
                            <FaStar className="icon" />
                            <p>{rate}</p>
                        </div>
                    </div>
                </div>
                <div className="vendor-item--delivery">
                    <span className="description">
                        {isZFExpress ? (
                            <>
                                <MdSportsMotorsports className="icon" />
                                <p>{t("TEXT_VENDOR_ITEM_DELIVERY")}: </p>
                            </>
                        ) : (
                            <p>{t("TEXT_VENDOR_ITEM_IN_HOUSE_DELIVERY")}:</p>
                        )}
                        <p>
                            {deliveryFee > 0
                                ? `${deliveryFee.toLocaleString("fa-IR")} ${t("TEXT_VENDOR_ITEM_PRICE_UNIT")}`
                                : t("TEXT_DELIVERY_FREE")}
                        </p>

                        {max_eta !== -1 ? (
                            <p>
                                | {t("TEXT_UP_TO")} {max_eta}{" "}
                                {t("TEXT_ETA_UNIT")}
                            </p>
                        ) : null}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default React.memo(VendorItem);
