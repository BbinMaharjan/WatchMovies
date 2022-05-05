import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "../components/organisms/Footer/Footer";
import Header from "../components/organisms/Header/Header";
import Home from "../components/pages/Home/Home";
import PageNotFound from "../components/templates/PageNotFound/PageNotFound.";

const ProtectedRoutes = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default ProtectedRoutes;
