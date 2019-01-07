export class group {
    id: string;
    name: string;
    links: Links;
    priceRange: PriceRange;
    thumbnail: Hero;
    hero: Hero;
    images: Hero[];
    swatches: any[];
    messages: Message[];
    flags: Flag[];
    reviews: Reviews;
}

interface Flag {
    bopisSuppress: boolean;
    rank: number;
    id: ID;
}

enum ID {
    Mono = "mono",
    Organic = "organic",
}

interface Hero {
    size: Size;
    meta: string;
    alt: string;
    rel: Rel;
    width: number;
    href: string;
    height: number;
}

enum Rel {
    Althero = "althero",
    Hero = "hero",
    Thumbnail = "thumbnail",
}

enum Size {
    M = "m",
}

interface Links {
    www: string;
}

enum Message {
    FreeShippingWithCodeBEST = "Free Shipping with code BEST",
}

interface PriceRange {
    regular: Regular;
    selling: Regular;
    type: PriceRangeType;
}

interface Regular {
    high: number;
    low: number;
}

enum PriceRangeType {
    Special = "special",
}

interface Reviews {
    recommendationCount: number;
    likelihood: number;
    reviewCount: number;
    averageRating: number;
    id: string;
    type: ReviewsType;
}

enum ReviewsType {
    GroupReviews = "GROUP_REVIEWS",
}
