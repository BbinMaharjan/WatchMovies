import {
  COMMON_TYPES,
  MOVIES_TYPES,
} from "../../utilities/constants/actionTypes";

const initialState = {
  loading: false,
  moviesList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_TYPES.MOVIES_LIST + COMMON_TYPES.REQUEST: {
      return { ...state, loading: true };
    }
    case (MOVIES_TYPES.MOVIES_LIST = COMMON_TYPES.SUCCESS): {
      return {
        ...state,
        loading: false,
        moviesList: action.payload.moviesListInfo,
      };
    }
    case MOVIES_TYPES.MOVIES_LIST + COMMON_TYPES.FAILURE: {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};
