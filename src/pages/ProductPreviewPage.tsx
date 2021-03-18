import React from "react";
import { PageHeadline } from "../components/page-headline/PageHeadline";
import { ProductPreview } from "../features/products/ProductPreview";
import { useRouteMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function ProductPreviewPage() {
  const route = useRouteMatch<{ id: string }>();

  const [t] = useTranslation("common");

  return (
    <div>
      <PageHeadline>{t("productDetailsPage.title")}</PageHeadline>
      <ProductPreview productId={route.params.id} />
    </div>
  );
}
