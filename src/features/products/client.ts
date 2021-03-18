import { Product, ProductBase, ProductHistoryEntry } from "./types";
import { nanoid } from "nanoid";
import { getItem, setItem } from "../../core/localStorageClient";

const productKey = "products";

export const createProduct = (request: ProductBase): Product => {
  const id = nanoid(4);

  const historyEntry: ProductHistoryEntry = {
    price: request.price,
    quantity: request.quantity,
    createdOn: new Date(),
  };

  const product: Product = { id, ...request, history: [historyEntry] };

  const products = getProducts();

  setItem(productKey, [...products, product]);

  return product;
};

export const getProducts = (): Product[] => {
  const products = getItem<Product[]>(productKey);

  return products || [];
};

export const getProduct = (id: string): Product => {
  const products = getProducts();

  const product = products.find((p) => p.id === id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

export const updateProduct = (id: string, request: ProductBase): Product => {
  const products = getProducts();

  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === undefined) {
    throw new Error("Product not found");
  }

  const { history, ...oldProduct } = products[productIndex];

  const historyEntry: ProductHistoryEntry = {
    price: request.price,
    quantity: request.quantity,
    createdOn: new Date(),
  };

  const updatedProduct: Product = {
    ...oldProduct,
    ...request,
    history: [...history, historyEntry],
  };

  products[productIndex] = updatedProduct;

  setItem(productKey, products);

  return updatedProduct;
};

export const deleteProduct = (id: string): void => {
  const products = getProducts();

  setItem(
    productKey,
    products.filter((p) => p.id !== id)
  );
};
