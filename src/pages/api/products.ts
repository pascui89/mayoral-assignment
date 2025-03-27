import type { NextApiRequest, NextApiResponse } from "next";
import type { Product } from "@/types/product";

const products: Product[] = [
  {
    id: "1",
    name: "Black Sports Sneaker Totally Awesome and Cool",
    description: "more colors available",
    price: 59.99,
    discountPrice: 49.99,
    image: "/images/products/pexels-1.jpg",
    featured: true,
    createdAt: "2024-03-15T00:00:00Z"
  },
  {
    id: "2",
    name: "Oversized Black T-Shirt",
    description: "more colors available",
    price: 24.99,
    image: "/images/products/pexels-2.jpg",
    featured: true,
    createdAt: "2024-02-10T00:00:00Z",
  },
  {
    id: "3",
    name: "Casual Navy Blue Polo",
    description: "more colors available",
    price: 34.99,
    image: "/images/products/pexels-3.jpg",
    createdAt: "2024-01-05T00:00:00Z",
  },
  {
    id: "4",
    name: "Vintage Printed T-Shirt",
    description: "",
    price: 29.99,
    image: "/images/products/pexels-4.jpg",
    createdAt: "2023-12-20T00:00:00Z",
  },
  {
    id: "5",
    name: "Minimalist Beige T-Shirt",
    description: "more colors available",
    price: 22.99,
    discountPrice: 9.99,
    image: "/images/products/pexels-5.jpg",
    featured: true,
    createdAt: "2023-11-15T00:00:00Z",
  },
  {
    id: "6",
    name: "Olive Green T-Shirt",
    description: "",
    price: 21.99,
    image: "/images/products/pexels-6.jpg",
    createdAt: "2023-10-30T00:00:00Z",
  },
  {
    id: "7",
    name: "Gray Organic Cotton T-Shirt",
    description: "",
    price: 26.99,
    image: "/images/products/pexels-7.jpg",
    featured: true,
    createdAt: "2023-06-25T00:00:00Z",
  },
  {
    id: "8",
    name: "White Sports Polo",
    description: "",
    price: 32.99,
    image: "/images/products/pexels-8.jpg",
    createdAt: "2023-08-10T00:00:00Z",
  },
  {
    id: "9",
    name: "Black T-Shirt with Pocket",
    description: "more colors available",
    price: 25.99,
    image: "/images/products/pexels-9.jpg",
    createdAt: "2023-07-20T00:00:00Z",
  },
  {
    id: "10",
    name: "Striped Nautical T-Shirt",
    description: "more colors available",
    price: 27.99,
    discountPrice: 19.99,
    image: "/images/products/pexels-10.jpg",
    createdAt: "2023-09-15T00:00:00Z",
  }
];


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Simulate network delay
    setTimeout(() => {
      res.status(200).json(products);
    }, 800);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
