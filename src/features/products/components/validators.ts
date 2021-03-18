import * as Yup from "yup";

export const quantityValidator = Yup.number()
  .required("Required")
  .min(0)
  .integer()
  .typeError("Must specify a number")
  .label("Quantity");

export const priceValidator = Yup.number()
  .min(0)
  .required("Required")
  .typeError("Must specify a number")
  .label("Price");

export const productValidator = Yup.object().shape({
  name: Yup.string().required("Required").label("Name"),
  ean: Yup.string().required("Required").label("EAN"),
  type: Yup.string().required("Required").label("Type"),
  weight: Yup.number()
    .required("Required")
    .min(0)
    .typeError("Must specify a number")
    .label("Weight"),
  color: Yup.string().required("Required").label("Color"),
  quantity: quantityValidator,
  price: priceValidator,
});
