import React from "react";
import { Product } from "../types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { ProductTableField } from "./ProductTableField";
import { priceValidator, quantityValidator } from "./validators";
import { useTranslation } from "react-i18next";

export type ProductTableProps = {
  onActiveToggle: (product: Product, value: boolean) => void;
  onDeleteClick: (product: Product) => void;
  onEditClick: (product: Product) => void;
  onPriceChange: (product: Product, value: string) => void;
  onQuantityChange: (product: Product, value: string) => void;
  onViewClick: (product: Product) => void;
  products: Product[];
};

export function ProductTable(props: ProductTableProps) {
  const [t] = useTranslation("common");

  return (
    <TableContainer component={Paper}>
      <Table aria-label="product table">
        <TableHead>
          <TableRow>
            <TableCell>{t("product.name")}</TableCell>
            <TableCell align="left">{t("product.ean")}</TableCell>
            <TableCell align="left">{t("product.type")}</TableCell>
            <TableCell align="left">{t("product.weight")}</TableCell>
            <TableCell align="left">{t("product.color")}</TableCell>
            <TableCell align="left">{t("product.quantity")}</TableCell>
            <TableCell align="left">{t("product.price")}</TableCell>
            <TableCell align="left">{t("product.active")}</TableCell>
            <TableCell align="left">{t("common.actions")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products.map((p) => (
            <TableRow key={p.id}>
              <TableCell component="th" scope="row">
                {p.name}
              </TableCell>
              <TableCell align="left">{p.ean}</TableCell>
              <TableCell align="left">{p.type}</TableCell>
              <TableCell align="left">{p.weight}</TableCell>
              <TableCell align="left">{p.color}</TableCell>
              <TableCell align="left">
                <ProductTableField
                  id={p.id + "quantity"}
                  onChange={(value) => props.onQuantityChange(p, value)}
                  validationSchema={quantityValidator}
                  value={p.quantity}
                />
              </TableCell>
              <TableCell align="left">
                <ProductTableField
                  id={p.id + "price"}
                  onChange={(value) => props.onPriceChange(p, value)}
                  validationSchema={priceValidator}
                  value={p.price}
                />
              </TableCell>
              <TableCell align="left">
                <Checkbox
                  id="active"
                  name="active"
                  checked={p.active}
                  onChange={(e, checked) => props.onActiveToggle(p, checked)}
                />
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="default"
                  onClick={() => props.onViewClick(p)}
                >
                  {t("actions.view")}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => props.onEditClick(p)}
                >
                  {t("actions.edit")}
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => props.onDeleteClick(p)}
                >
                  {t("actions.delete")}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
