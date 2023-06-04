import {
  LOCATION_DATA_FAIL,
  LOCATION_DATA_REQUEST,
  LOCATION_DATA_SUCCESS,
} from "../constants/locationConstants";

export const locationDataReducer = (state = { locations: [] }, action) => {
  switch (action.type) {
    case LOCATION_DATA_REQUEST:
      return { loading: true };
    case LOCATION_DATA_SUCCESS:
      return { loading: false, locations: action.payload };
    case LOCATION_DATA_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
