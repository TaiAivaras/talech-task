import React from "react";
import { PageHeadline } from "../components/page-headline/PageHeadline";
import { ProductListing } from "../features/products/ProductListing";
import { generatePath, useHistory } from "react-router-dom";
import { Product } from "../features/products/types";
import { routes } from "../routes";
import { useTranslation } from "react-i18next";

export function ProductListingPage() {
  const history = useHistory();

  const [t] = useTranslation("common");

  const handleEditClick = (product: Product) => {
    const path = generatePath(routes.ProductEdit, {
      id: product.id,
    });

    history.push(path);
  };

  const handleViewClick = (product: Product) => {
    const path = generatePath(routes.ProductPreview, {
      id: product.id,
    });

    history.push(path);
  };

  return (
    <div>
      <PageHeadline>{t("productListingPage.title")}</PageHeadline>
      <ProductListing
        onEditClick={handleEditClick}
        onViewClick={handleViewClick}
      />
    </div>
  );
}
