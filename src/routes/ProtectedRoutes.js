import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "../components/organisms/Footer/Footer";
import Header from "../components/organisms/Header/Header";
import Home from "../components/pages/Home/Home";
import MovieDetail from "../components/pages/MoviesDetails/MovieDetail";
import PageNotFound from "../components/templates/PageNotFound/PageNotFound.";

const ProtectedRoutes = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbId" element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default ProtectedRoutes;
