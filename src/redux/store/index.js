import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import MoviesReducers from "../reducers/MoviesReducers";
import logger from "redux-logger";
import moviesSaga from "../sagas/MoviesSagas";
import { all } from "redux-saga/effects";

function* saga() {
  yield all([moviesSaga()]);
}

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  combineReducers({ movies: MoviesReducers }),
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(saga);
