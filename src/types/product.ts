export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    discountPrice?: number;
    image: string;
    featured?: boolean;
    createdAt: string;
  }
  
  