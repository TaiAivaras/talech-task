import React, { ChangeEvent, useState } from "react";
import Input from "@material-ui/core/Input";
import { FieldWrapper } from "../../../components/forms/FieldWrapper";
import * as Yup from "yup";

export type ProductTableFieldProps = {
  id: string;
  onChange: (value: string) => void;
  validationSchema?: Yup.AnySchema;
  value?: string | number;
};

export function ProductTableField(props: ProductTableFieldProps) {
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<string | number | undefined>(props.value);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setValue(value);

    if (!props.validationSchema) {
      props.onChange(value);

      return;
    }
    try {
      await props.validationSchema.validate(value);

      setError(null);
      props.onChange(value);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <FieldWrapper id={props.id} error={error || undefined}>
      <Input
        id={props.id}
        type="text"
        placeholder="Enter"
        onChange={handleChange}
        value={value}
      />
    </FieldWrapper>
  );
}
