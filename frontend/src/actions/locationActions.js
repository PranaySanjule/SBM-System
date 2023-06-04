import axios from "axios";
import {
  LOCATION_DATA_FAIL,
  LOCATION_DATA_REQUEST,
  LOCATION_DATA_SUCCESS,
} from "../constants/locationConstants";

export const listCoordinates = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LOCATION_DATA_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/location`, config);

    dispatch({
      type: LOCATION_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: LOCATION_DATA_FAIL,
      payload: message,
    });
  }
};
