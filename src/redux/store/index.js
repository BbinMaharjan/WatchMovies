import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import MoviesReducers from "../reducers/MoviesReducers";
import logger from "redux-logger";
import { composeWithDevTools } from "@reduxjs/toolkit";
import moviesSaga from "../sagas/MoviesSagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  combineReducers({ movies: MoviesReducers }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(moviesSaga);
