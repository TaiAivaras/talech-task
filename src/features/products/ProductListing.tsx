import React, { useEffect, useState } from "react";
import { deleteProduct, getProducts, updateProduct } from "./client";
import { Product } from "./types";
import { ProductTable } from "./components/ProductTable";

export type ProductListingProps = {
  onEditClick: (product: Product) => void;
  onViewClick: (product: Product) => void;
};

export function ProductListing(props: ProductListingProps) {
  const [products, setProducts] = useState<Product[]>([]);

  const refreshProducts = () => {
    const p = getProducts();

    setProducts(p);
  };

  useEffect(refreshProducts, []);

  const handleActiveToggle = (product: Product, value: boolean) => {
    const request = { ...product, active: value };

    updateProduct(product.id, request);
    refreshProducts();
  };

  const handleDeleteClick = (product: Product) => {
    deleteProduct(product.id);
    refreshProducts();
  };

  const handleQuantityChange = (product: Product, value: string) => {
    const request = { ...product, quantity: Number(value) };

    updateProduct(product.id, request);
    refreshProducts();
  };

  const handlePriceChange = (product: Product, value: string) => {
    const request = { ...product, price: Number(value) };

    updateProduct(product.id, request);
    refreshProducts();
  };

  return (
    <ProductTable
      onActiveToggle={handleActiveToggle}
      onDeleteClick={handleDeleteClick}
      onEditClick={props.onEditClick}
      onPriceChange={handlePriceChange}
      onQuantityChange={handleQuantityChange}
      onViewClick={props.onViewClick}
      products={products}
    />
  );
}
