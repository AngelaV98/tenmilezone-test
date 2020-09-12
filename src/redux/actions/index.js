import { GET_STATISTICS, GET_STATISTICS_FAILURE } from "../constants";
import StatisticsService from "../../services/StatisticsService";

const getStatistics = (startDate, endDate) => async (dispatch) => {
  try {
    const statistics = await StatisticsService.getStatistics(startDate, endDate);
    dispatch({ type: GET_STATISTICS, payload: { statistics } });
  } catch (error) {
    dispatch({ type: GET_STATISTICS_FAILURE, payload: { error } });
  }
};

export { getStatistics };
