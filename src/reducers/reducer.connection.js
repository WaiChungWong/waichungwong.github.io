import {
  CHECK_CONNECTION_SUCCESS as SUCCESS,
  CHECK_CONNECTION_FAILED as FAILED
} from "../actions/actiontypes";

export default (state = { connected: false }, action) => {
  let { type, data } = action;

  switch (type) {
    case SUCCESS:
      return { connected: true };
    case FAILED:
      return { connected: false, error: data && data.error };
    default:
      return state;
  }
};
