import React from "react";
import Typography from "@material-ui/core/Typography";

export type ErrorProps = {
  text: string;
};

export function Error(props: ErrorProps) {
  return (
    <div>
      <Typography variant="overline">{props.text}</Typography>
    </div>
  );
}
