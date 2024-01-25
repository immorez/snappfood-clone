export enum DataEnumType {
    VENDOR = "VENDOR",
    TEXT = "TEXT",
}

export enum EstablishmentEnumType {
    Cafe = "CAFE",
    Fastfood = "FASTFOOD",
    Restaurant = "RESTAURANT",
}

export enum VendorEnumType {
    Confectionery = "CONFECTIONERY",
    Restaurant = "RESTAURANT",
}

export enum UserImageEnumType {
    ProductImage = "PRODUCT_IMAGE",
}

export enum UserEnumType {
    Zoodfood = "ZOODFOOD",
}

export enum StatusTitleEnumType {
    Active = "ACTIVE",
}

export enum NewEnumType {
    Restaurant = "RESTAURANT",
    Store = "Store",
}

export interface ISchedule {
    type: number;
    weekday: number;
    allDay: boolean;
    startHour: string;
    stopHour: string;
}

export interface IBadge {
    title: string;
    description: string;
    image: string;
    white_image: string;
}

export interface IPreorderToday {
    weekday: string;
    name: string;
    startHour: string;
    intervals: null;
}

export interface IUserImage {
    id: number;
    description: null;
    fileName: string;
    thumbNailSource: string;
    likeCount: number;
    commentCount: number;
    timeDifference: number;
    imageType: UserImageEnumType;
    userType: UserEnumType;
}

export interface IVendor {
    id: number;
    vendorCode: string;
    noOrder: boolean;
    title: string;
    description: string;
    rate: number;
    rating: number;
    logo: string;
    defLogo: string;
    taxEnabled: boolean;
    taxIncluded: boolean;
    taxEnabledInProducts: boolean;
    taxEnabledInPackaging: boolean;
    taxEnabledInDeliveryFee: boolean;
    tax: number;
    serviceFee: number;
    deliveryArea: string;
    discount: number;
    isOpen: boolean;
    minDeliveryFee: number;
    maxDeliveryFee: number;
    deliveryTime: number;
    paymentTypes: number[];
    schedules: ISchedule[];
    minOrder: number;
    address: string;
    phone: string;
    website: string;
    status: number;
    lat: number;
    lon: number;
    restaurantClass: string;
    foodTypes: any[];
    restaurantTypes: any[];
    isFavorite: boolean;
    priority: number;
    city: string;
    area: string;
    commentCount: number;
    recommendedFor: string;
    establishment: EstablishmentEnumType;
    mostPopularItems: string;
    costsForTwo: number;
    onlineOrder: boolean;
    voteCount: number;
    discountType: null;
    menuUrl: string;
    discountValue: number;
    discountForAll: boolean;
    containerFee: number;
    deliveryGuarantee: boolean;
    badges: IBadge[];
    discountStartHour1: string;
    discountStopHour1: string;
    discountStartHour2: string;
    discountStopHour2: string;
    discountValueForView: number;
    coverPath: string;
    preOrderEnabled: boolean;
    preorderToday: IPreorderToday;
    vendorType: VendorEnumType;
    childType: VendorEnumType;
    budgetClass: string;
    vendorTypeTitle: string;
    isZFExpress: boolean;
    deliveryFee: number;
    backgroundImage: string;
    backgroundImageCustom: string;
    has_coupon: boolean;
    coupon_count: number;
    best_coupon: string;
    is_pro: boolean;
    has_first_coupon: boolean;
    userImage: IUserImage[];
    menuImage: any[];
    countReview: number;
    countOfUserImages: number;
    deliveryFeeDiscount: number;
    trendingScore: number;
    delay: string;
    deliver: boolean;
    eta: number;
    min_eta: number;
    max_eta: number;
    open_at_eta: boolean;
    action: string;
    has_delay: boolean;
    delay_time: number;
    total_time: number;
    bid: boolean;
    superTypeAlias: string;
    is_food_party: boolean;
    is_market_party: boolean;
    click_id: null;
    cpc_campaign_hash: null;
    cpc_spot: null;
    is_ecommerce: boolean;
    is_economical: boolean;
    is_grocery_vip: boolean;
    is_grocery_returnable: boolean;
    is_grocery_economic: boolean;
    vendor_status: null;
    status_title: StatusTitleEnumType;
    status_text: string;
    status_description: string;
    has_cashback: boolean;
    new_type: NewEnumType;
    new_type_title: string;
    is_eco: boolean;
}

export type TGetVendorsListResponse = {
    render_type: number;
    status: boolean;
    data: {
        count: number;
        open_count: number;
        finalResults: { type: DataEnumType; data: IVendor | string }[];
    };
};

export type TGetVendorsListParams = {
    page: number;
    page_size: number;
    lat: number;
    long: number;
};
