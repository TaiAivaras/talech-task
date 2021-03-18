import React from "react";
import { ProductForm, ProductFormValues } from "./components/ProductForm";
import { createProduct } from "./client";
import { Product, ProductBase } from "./types";

export type ProductCreateProps = {
  onCreate: (product: Product) => void;
};

export function ProductCreate(props: ProductCreateProps) {
  const handleSubmit = (formValues: ProductFormValues) => {
    const request: ProductBase = {
      ...formValues,
      weight: Number(formValues.weight),
      quantity: Number(formValues.quantity),
      price: Number(formValues.price),
    };

    const product = createProduct(request);

    props.onCreate(product);
  };

  return (
    <div>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
}
