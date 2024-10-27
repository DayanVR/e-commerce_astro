import type { Product, Category, ApiResponse } from "./types";

const products: Category[] = [
  {
    slug: "mens-shirts",
    name: "Mens Shirts",
    url: "https://dummyjson.com/products/category/mens-shirts",
  },
  {
    slug: "mens-shoes",
    name: "Mens Shoes",
    url: "https://dummyjson.com/products/category/mens-shoes",
  },
  {
    slug: "womens-bags",
    name: "Womens Bags",
    url: "https://dummyjson.com/products/category/womens-bags",
  },
  {
    slug: "womens-dresses",
    name: "Womens Dresses",
    url: "https://dummyjson.com/products/category/womens-dresses",
  },
  {
    slug: "womens-shoes",
    name: "Womens Shoes",
    url: "https://dummyjson.com/products/category/womens-shoes",
  },
];

export async function fetchProducts(products: Category[]): Promise<Product[]> {
  const allProducts: Product[] = [];

  for (const product of products) {
    try {
      const response = await fetch(product.url);
      const data: ApiResponse = await response.json();
      allProducts.push(...data.products);
    } catch (error) {
      console.error(`Error fetching ${product.name}:`, error);
    }
  }

  return allProducts;
}

async function getNewArrivals(products: Product[]): Promise<Product[]> {
  return products
    .sort(
      (a, b) =>
        new Date(b.meta.createdAt).getTime() -
        new Date(a.meta.createdAt).getTime(),
    )
    .slice(0, 4);
}

async function getTopRatedProducts(products: Product[]): Promise<Product[]> {
  return products.sort((a, b) => b.rating - a.rating).slice(0, 4);
}

async function fetchAndFilterProducts(products: Category[]) {
  const allProducts = await fetchProducts(products);

  const newArrivals = await getNewArrivals(allProducts);
  const topRatedProducts = await getTopRatedProducts(allProducts);

  return { topRatedProducts, newArrivals };
}

export const { topRatedProducts, newArrivals } =
  await fetchAndFilterProducts(products);
