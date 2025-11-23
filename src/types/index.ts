export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  category: string;
  is_trending: boolean;
  created_at: string;
}

export interface PriceData {
  id: string;
  product_id: string;
  platform: string;
  price: number;
  discount: string;
  delivery: string;
  url: string;
}

export interface PriceHistory {
  id: string;
  product_id: string;
  platform: string;
  price: number;
  date: string;
}

export interface Review {
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  comment: string;
  created_at: string;
  user?: {
    name: string;
  };
}

export interface ProductWithPrices extends Product {
  price_data: PriceData[];
  price_history: PriceHistory[];
  reviews: Review[];
}
