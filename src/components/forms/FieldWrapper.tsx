import React, { ReactNode } from "react";
import Typography from "@material-ui/core/Typography";
import "./fieldWrapper.scss";

export type FieldWrapperProps = {
  children: ReactNode;
  label?: string;
  error?: string;
  id: string;
};

export function FieldWrapper(props: FieldWrapperProps) {
  return (
    <div className="field-wrapper">
      {props.label && (
        <Typography
          component="label"
          className="field-wrapper__label"
          variant="subtitle1"
          htmlFor={props.id}
        >
          {props.label}
        </Typography>
      )}

      {props.children}

      {props.error && (
        <Typography className="field-wrapper__error" variant="caption">
          {props.error}
        </Typography>
      )}
    </div>
  );
}
