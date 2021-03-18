import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { ProductCreatePage } from "./pages/ProductCreatePage";
import { ProductEditPage } from "./pages/ProductEditPage";
import { ProductListingPage } from "./pages/ProductListingPage";
import { ProductPreviewPage } from "./pages/ProductPreviewPage";
import { routes } from "./routes";
import "./app.scss";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  title: {
    color: "white",
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  const [t, i18n] = useTranslation("common");

  return (
    <Router>
      <Suspense fallback="loading">
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              component={Link}
              to={routes.ProductListing}
              variant="h6"
            >
              {t("layout.home")}
            </Typography>

            <Button color="secondary" onClick={() => i18n.changeLanguage("lt")}>
              LT
            </Button>
            <Button color="secondary" onClick={() => i18n.changeLanguage("en")}>
              EN
            </Button>

            <Button
              component={Link}
              to={routes.ProductCreate}
              variant="contained"
              color="secondary"
            >
              {t("actions.addProduct")}
            </Button>
          </Toolbar>
        </AppBar>

        <div className="app">
          <Switch>
            <Route path={routes.ProductCreate}>
              <ProductCreatePage />
            </Route>

            <Route path={routes.ProductEdit}>
              <ProductEditPage />
            </Route>

            <Route path={routes.ProductPreview}>
              <ProductPreviewPage />
            </Route>

            <Route path={routes.ProductListing}>
              <ProductListingPage />
            </Route>

            <Redirect to={routes.ProductListing} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
