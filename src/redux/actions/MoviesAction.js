import {
  COMMON_TYPES,
  MOVIES_TYPES,
} from "../../utilities/constants/actionTypes";

export const getAllMovies = (payload) => ({
  type: MOVIES_TYPES.MOVIES_LIST + COMMON_TYPES.REQUEST,
  payload,
});
