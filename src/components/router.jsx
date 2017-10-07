import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./app";
import Add from "./add";
import Header from "./header";
import ErrorPage from "./404error";

const AppRouter = (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/Add" component={Add} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );

export default AppRouter;