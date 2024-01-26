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
    has_coupon,
    coupon_count,
    has_first_coupon,
    backgroundImage,
    is_eco,
    cuisinesArray,
}) {
    const { t } = useTranslation();
    return (
        <li className="vendor-item">
            <header className="vendor-item--cover">
                <div className="vendor-item--cover-image">
                    <img
                        className="vendor-item--cover-image-img"
                        src={
                            coverPath
                                ? coverPath.replace("300x100", "350x233")
                                : backgroundImage
                        }
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
                        {countReview ? (
                            <span className="reviews-count">
                                <span>(</span>
                                <p>{countReview.toLocaleString("fa-IR")}</p>
                                <span>)</span>
                            </span>
                        ) : null}
                        <div className="rate">
                            {rate > 0 ? (
                                <>
                                    <FaStar className="icon" />
                                    <p>{rate.toFixed(1)}</p>
                                </>
                            ) : (
                                <p>{t("TEXT_BADGE_NEW")}</p>
                            )}
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
                <div className="vendor-item--cuisines">
                    {cuisinesArray.slice(0, 5).map((cuisine) => (
                        <p key={cuisine.id}>{cuisine.title}</p>
                    ))}
                </div>
                <div className="vendor-item--badges">
                    {has_coupon ? (
                        <>
                            {/* TODO: it's better to have these badges componentized */}
                            <div className="badge">
                                {t("has {{coupon}} coupons", {
                                    coupon: coupon_count,
                                })}
                            </div>
                            {has_first_coupon && (
                                <div className="badge">
                                    {t("TEXT_HAS_FIRST_ORDER_COUPON")}
                                </div>
                            )}
                        </>
                    ) : null}
                    {is_eco && (
                        <div className="badge">{t("TEXT_VENDOR_IS_ECO")}</div>
                    )}
                </div>
            </div>
        </li>
    );
};

export default React.memo(VendorItem);
