import React, { ReactNode } from "react";
import Typography from "@material-ui/core/Typography";

export type PageHeadlineProps = {
  children: ReactNode;
};

export function PageHeadline(props: PageHeadlineProps) {
  return (
    <Typography component="h1" variant="h2" gutterBottom={true}>
      {props.children}
    </Typography>
  );
}
