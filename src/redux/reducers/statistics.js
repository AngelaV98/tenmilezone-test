import { GET_STATISTICS, GET_STATISTICS_FAILURE } from "../constants";

const initialState = {
  statistics: {},
  error: {},
};

function statisticsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_STATISTICS: {
      return {
        ...state,
        statistics: payload.statistics,
      };
    }
    case GET_STATISTICS_FAILURE: {
      return {
        ...state,
        error: { msg: payload.error.message },
      };
    }
    default:
      return state;
  }
}
export default statisticsReducer;
