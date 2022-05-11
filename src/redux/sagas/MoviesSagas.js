import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import { API_KEY, BASE_URL } from "../../utilities/api/config";
import {
  COMMON_TYPES,
  MAKE_API_REQUEST,
  MOVIES_TYPES,
} from "../../utilities/constants/actionTypes";

function* getMoviesList(action) {
  try {
    const { data } = yield call(
      axios.get,
      (`${BASE_URL}/trending/movie/week`,
      {
        params: { api_key: API_KEY },
      })
    );
    yield put({ type: MAKE_API_REQUEST, payload: data });
  } catch (exp) {
    console.log(exp);
  }
}

export default function* moviesSaga() {
  yield takeLatest(
    MOVIES_TYPES.MOVIES_LIST + COMMON_TYPES.REQUEST,
    getMoviesList
  );
}
