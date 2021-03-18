import React from "react";
import { Formik, Form } from "formik";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import { FieldWrapper } from "../../../components/forms/FieldWrapper";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import { productValidator } from "./validators";
import { useTranslation } from "react-i18next";

export type ProductFormProps = {
  initialValues?: ProductFormValues;
  onSubmit: (value: ProductFormValues) => void;
};

export type ProductFormValues = {
  active: boolean;
  color: string;
  ean: string;
  name: string;
  type: string;
  weight: string;
  quantity: string;
  price: string;
};

const defaultValues: ProductFormValues = {
  active: false,
  color: "",
  ean: "",
  name: "",
  type: "",
  weight: "",
  quantity: "",
  price: "",
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export function ProductForm(props: ProductFormProps) {
  const classes = useStyles();

  const [t] = useTranslation("common");

  return (
    <Paper className={classes.paper}>
      <Formik<ProductFormValues>
        initialValues={props.initialValues || defaultValues}
        onSubmit={async (values) => await props.onSubmit(values)}
        validationSchema={productValidator}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form autoComplete="off" noValidate>
            <Grid container spacing={3}>
              <Grid container item sm={12} md={4}>
                <FieldWrapper
                  id="name"
                  error={touched.name && errors.name ? errors.name : undefined}
                  label={t("product.name")}
                >
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder={t("common.placeholder")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </FieldWrapper>
              </Grid>
              <Grid container item sm={12} md={4}>
                <FieldWrapper
                  id="ean"
                  error={touched.ean && errors.ean ? errors.ean : undefined}
                  label={t("product.ean")}
                >
                  <Input
                    id="ean"
                    type="text"
                    name="ean"
                    placeholder={t("common.placeholder")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.ean}
                  />
                </FieldWrapper>
              </Grid>
              <Grid container item sm={12} md={4}>
                <FieldWrapper
                  id="type"
                  error={touched.type && errors.type ? errors.type : undefined}
                  label={t("product.type")}
                >
                  <Input
                    id="type"
                    type="text"
                    name="type"
                    placeholder={t("common.placeholder")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.type}
                  />
                </FieldWrapper>
              </Grid>
              <Grid container item sm={12} md={4}>
                <FieldWrapper
                  id="weight"
                  error={
                    touched.weight && errors.weight ? errors.weight : undefined
                  }
                  label={t("product.weight")}
                >
                  <Input
                    id="weight"
                    inputMode="numeric"
                    type="text"
                    name="weight"
                    placeholder={t("common.placeholder")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.weight}
                  />
                </FieldWrapper>
              </Grid>
              <Grid container item sm={12} md={4}>
                <FieldWrapper
                  id="color"
                  error={
                    touched.color && errors.color ? errors.color : undefined
                  }
                  label={t("product.color")}
                >
                  <Input
                    id="color"
                    type="text"
                    name="color"
                    placeholder={t("common.placeholder")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.color}
                  />
                </FieldWrapper>
              </Grid>{" "}
              <Grid container item sm={12} md={4}>
                <FieldWrapper
                  id="quantity"
                  error={
                    touched.quantity && errors.quantity
                      ? errors.quantity
                      : undefined
                  }
                  label={t("product.quantity")}
                >
                  <Input
                    id="quantity"
                    type="text"
                    name="quantity"
                    placeholder={t("common.placeholder")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.quantity}
                  />
                </FieldWrapper>
              </Grid>
              <Grid container item sm={12} md={4}>
                <FieldWrapper
                  id="price"
                  error={
                    touched.price && errors.price ? errors.price : undefined
                  }
                  label={t("product.price")}
                >
                  <Input
                    id="price"
                    type="text"
                    name="price"
                    placeholder={t("common.placeholder")}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                  />
                </FieldWrapper>
              </Grid>
              <Grid container item sm={12} md={4}>
                <FieldWrapper id="active" label={t("product.active")}>
                  <div>
                    <Checkbox
                      id="active"
                      name="active"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.color}
                    />
                  </div>
                </FieldWrapper>
              </Grid>
            </Grid>

            <Grid container item sm={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                {t("common.submit")}
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}
