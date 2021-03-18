import React, { useEffect, useState } from "react";
import { getProduct } from "./client";
import { Product } from "./types";
import { ProductDetails } from "./components/ProductDetails";
import { Error } from "../../components/Error/Error";

export type ProductPreviewProps = {
  productId: string;
};

export function ProductPreview(props: ProductPreviewProps) {
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

  return (
    <div>
      {error && <Error text={error.message} />}
      {product && <ProductDetails product={product} />}
    </div>
  );
}
