import type { Product, Category, ApiResponse, Review } from "./types";
import { productsCategories } from "./variables";

// crea un estado para cambiar el limite de productos mostrados, ex: si se mostraran 10 o 20 se divide entre 5

export async function fetchProducts(
  products: Category[],
  limit: number,
): Promise<Product[]> {
  const allProducts: Product[] = [];

  for (const product of products) {
    try {
      if (product.url) {
        const response = await fetch(`${product.url}?limit=${limit}`);
        const data: ApiResponse = await response.json();
        allProducts.push(...data.products);
      }
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

async function getReviews(products: Product[]): Promise<Review[]> {
  return products
    .sort((a, b) => b.reviews[0].rating - a.reviews[0].rating)
    .slice(0, 4)
    .flatMap((product) => product.reviews)
    .filter((review: Review) => review.rating === 5);
}

async function fetchAndFilterProducts(products: Category[]) {
  const allProducts = await fetchProducts(products, 0);
  const generalProducts = await fetchProducts(products, 3);
  const newArrivals = await getNewArrivals(allProducts);
  const topRatedProducts = await getTopRatedProducts(allProducts);
  const reviews = await getReviews(allProducts);

  return {
    topRatedProducts,
    newArrivals,
    reviews,
    allProducts,
    generalProducts,
  };
}

export async function fetchSameCategoryProducts(
  category: string,
): Promise<Product[]> {
  const categoryMatch = productsCategories.find(
    (p) => p.slug.toLowerCase() === category.toLowerCase(),
  );
  if (!categoryMatch) {
    console.log(category);
    throw new Error(`Category ${category} not found`);
  }
  const categorySlug = categoryMatch?.url;

  if (!categorySlug) {
    return [];
  }

  const response = await fetch(categorySlug);
  const data: ApiResponse = await response.json();
  return data.products;
}

export async function fetchProductBySingleCategory(slug: string) {
  const limit = 20;
  const slugMatch = productsCategories.find((p) => p.slug === slug);
  if (!slugMatch) return [];

  const result = [slugMatch];
  const allProducts = await fetchProducts(result, limit);

  return allProducts;
}

export const {
  topRatedProducts,
  newArrivals,
  reviews,
  allProducts,
  generalProducts,
} = await fetchAndFilterProducts(productsCategories);
