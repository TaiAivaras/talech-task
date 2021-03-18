import React, { useEffect, useState } from "react";
import { ProductForm, ProductFormValues } from "./components/ProductForm";
import { getProduct, updateProduct } from "./client";
import { Product, ProductBase } from "./types";
import { Error } from "../../components/Error/Error";

export type ProductEditProps = {
  productId: string;
  onEdit: (product: Product) => void;
};

export function ProductEdit(props: ProductEditProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      setError(null);

      const p = getProduct(props.productId);

      setProduct(p);
    } catch (e) {
      setError(e);
    }
  }, [props.productId]);

  const handleSubmit = (formValues: ProductFormValues) => {
    const request: ProductBase = {
      ...formValues,
      weight: Number(formValues.weight),
      quantity: Number(formValues.quantity),
      price: Number(formValues.price),
    };

    const product = updateProduct(props.productId, request);

    props.onEdit(product);
  };

  const getInitialValues = (product: Product): ProductFormValues => {
    return {
      ...product,
      weight: product.weight.toString(),
      quantity: product.quantity.toString(),
      price: product.price.toString(),
    };
  };

  return (
    <div>
      {error && <Error text={error.message} />}
      {product && (
        <ProductForm
          initialValues={getInitialValues(product)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
