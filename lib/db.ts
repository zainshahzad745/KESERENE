// Mock Database / Seed Data
export const PRODUCTS = [
    { id: "1", name: "Radiant Essence Serum", price: 4500, image: "/images/product-1.png", category: "Serum", description: "Deeply hydrating serum." },
    { id: "2", name: "Deep Moisture Cream", price: 3200, image: "/images/product-2.png", category: "Moisturizer", description: "Rich cream for dry skin." },
    { id: "3", name: "Calming Green Tea Toner", price: 2800, image: "/images/product-1.png", category: "Toner", description: "Soothing and refreshing." },
    { id: "4", name: "Gentle Matcha Cleanser", price: 2100, image: "/images/product-2.png", category: "Cleanser", description: "Low pH daily cleanser." },
    { id: "5", name: "Glow Recovery Oil", price: 4100, image: "/images/product-1.png", category: "Oil", description: "Nourishes the skin barrier." },
    { id: "6", name: "Barrier Repair Ampoule", price: 3800, image: "/images/product-2.png", category: "Ampoule", description: "Intensive repair treatment." },
    { id: "7", name: "Soothing Rice Water Foam", price: 1900, image: "/images/product-1.png", category: "Cleanser", description: "Brightening foam cleanser." },
    { id: "8", name: "Snail Mucin Gel", price: 2500, image: "/images/product-2.png", category: "Moisturizer", description: "Lightweight gel moisturizer." },
];

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export interface Order {
    id: string;
    date: string;
    items: CartItem[];
    total: number;
}

export const CART: CartItem[] = [];
export const ORDERS: Order[] = [];
