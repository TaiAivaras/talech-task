import React from "react";
import { ProductCreate } from "../features/products/ProductCreate";
import { PageHeadline } from "../components/page-headline/PageHeadline";
import { useHistory } from "react-router-dom";
import { routes } from "../routes";
import { useTranslation } from "react-i18next";

export function ProductCreatePage() {
  const history = useHistory();

  const [t] = useTranslation("common");

  const handleProductCreate = () => {
    history.push(routes.ProductListing);
  };

  return (
    <div>
      <PageHeadline>{t("productCreatePage.title")}</PageHeadline>
      <ProductCreate onCreate={handleProductCreate} />
    </div>
  );
}
