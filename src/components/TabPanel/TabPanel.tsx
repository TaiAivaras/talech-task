import React, { ReactNode } from "react";
import { makeStyles, Paper } from "@material-ui/core";

export type TabPanelProps = {
  children: ReactNode;
  index: number;
  value: number;
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Paper className={classes.paper}>{children}</Paper>}
    </div>
  );
}
