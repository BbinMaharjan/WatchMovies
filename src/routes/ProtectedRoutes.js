import React from "react";
import { Routes } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/organisms/Footer/Footer";
import Header from "../components/organisms/Header/Header";
import Home from "../components/pages/Home/Home";
import PageNotFound from "../components/templates/PageNotFound/PageNotFound.";

const ProtectedRoutes = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact component={Home} />
          <Route component={PageNotFound} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default ProtectedRoutes;
