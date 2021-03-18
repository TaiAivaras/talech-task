import React from "react";
import { PageHeadline } from "../components/page-headline/PageHeadline";
import { useHistory, useRouteMatch } from "react-router-dom";
import { routes } from "../routes";
import { ProductEdit } from "../features/products/ProductEdit";
import { useTranslation } from "react-i18next";

export function ProductEditPage() {
  const history = useHistory();
  const route = useRouteMatch<{ id: string }>();

  const [t] = useTranslation("common");

  const handleProductEdit = () => {
    history.push(routes.ProductListing);
  };

  return (
    <div>
      <PageHeadline>{t("productEditPage.title")}</PageHeadline>
      <ProductEdit productId={route.params.id} onEdit={handleProductEdit} />
    </div>
  );
}
