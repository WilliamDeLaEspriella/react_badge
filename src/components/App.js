import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Badges from "../pages/Badge";
import Home from "../pages/Home";
import Layout from "./Layout";
import BadgeNew from "../pages/BadgeNew";
import NotFound from "../pages/NotFound";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
