import React, { ChangeEvent } from "react";
import { Product } from "../types";
import { AppBar, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import { FieldWrapper } from "../../../components/forms/FieldWrapper";
import { TabPanel } from "../../../components/TabPanel/TabPanel";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import uniqBy from "lodash.uniqby";
import takeRight from "lodash.takeright";
import { useTranslation } from "react-i18next";

Highcharts.setOptions({
  time: {
    useUTC: false,
  },
});

export type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails(props: ProductDetailsProps) {
  const MAX_HISTORY_ENTRIES = 5;

  const [value, setValue] = React.useState(0);

  const [t] = useTranslation("common");

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const time = {};

  const priceChanges = uniqBy(props.product.history, (h) => h.price);
  const limitedPriceChanges = takeRight(priceChanges, MAX_HISTORY_ENTRIES);

  const priceData = limitedPriceChanges.map((h) => {
    return {
      x: new Date(h.createdOn),
      y: h.price,
    };
  });

  const priceHistoryOptions = {
    title: {
      text: t("productDetailsPage.priceHistory"),
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: { title: "" },
    series: [
      {
        name: t("product.price"),
        data: priceData,
      },
    ],
  };

  const quantityChanges = uniqBy(props.product.history, (h) => h.quantity);
  const limitedQuantityChanges = takeRight(
    quantityChanges,
    MAX_HISTORY_ENTRIES
  );

  const quantityData = limitedQuantityChanges.map((h) => {
    return {
      x: new Date(h.createdOn),
      y: h.quantity,
    };
  });

  const quantityHistoryOptions = {
    title: {
      text: t("productDetailsPage.quantityHistory"),
    },
    xAxis: {
      type: "datetime",
      time,
    },
    yAxis: { title: "" },
    series: [
      {
        name: t("product.quantity"),
        data: quantityData,
      },
    ],
  };

  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label={t("productDetailsPage.title")} />
          <Tab label={t("productDetailsPage.priceHistory")} />
          <Tab label={t("productDetailsPage.quantityHistory")} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid container item sm={12} md={4}>
            <FieldWrapper id="name" label={t("product.name")}>
              <Typography align="left">{props.product.name}</Typography>
            </FieldWrapper>
          </Grid>
          <Grid container item sm={12} md={4}>
            <FieldWrapper id="ean" label={t("product.ean")}>
              <Typography align="left">{props.product.ean}</Typography>
            </FieldWrapper>
          </Grid>
          <Grid container item sm={12} md={4}>
            <FieldWrapper id="type" label={t("product.type")}>
              <Typography align="left">{props.product.type}</Typography>
            </FieldWrapper>
          </Grid>
          <Grid container item sm={12} md={4}>
            <FieldWrapper id="weight" label={t("product.weight")}>
              <Typography align="left">{props.product.weight}</Typography>
            </FieldWrapper>
          </Grid>
          <Grid container item sm={12} md={4}>
            <FieldWrapper id="color" label={t("product.color")}>
              <Typography align="left">{props.product.color}</Typography>
            </FieldWrapper>
          </Grid>
          <Grid container item sm={12} md={4}>
            <FieldWrapper id="quantity" label={t("product.quantity")}>
              <Typography align="left">{props.product.quantity}</Typography>
            </FieldWrapper>
          </Grid>
          <Grid container item sm={12} md={4}>
            <FieldWrapper id="price" label={t("product.price")}>
              <Typography align="left">{props.product.price}</Typography>
            </FieldWrapper>
          </Grid>
          <Grid container item sm={12} md={4}>
            <FieldWrapper id="active" label={t("product.active")}>
              <Typography align="left">
                {props.product.active ? t("common.yes") : t("common.no")}
              </Typography>
            </FieldWrapper>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HighchartsReact
          time={time}
          highcharts={Highcharts}
          options={priceHistoryOptions}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HighchartsReact
          time={time}
          highcharts={Highcharts}
          options={quantityHistoryOptions}
        />
      </TabPanel>
    </>
  );
}
