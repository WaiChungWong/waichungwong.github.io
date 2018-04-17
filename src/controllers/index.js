import {
  checkConnection,
  onConnectionCheck,
  onConnectionSuccess,
  onConnectionFailed
} from "./controller.connection";
import {
  CHECK_CONNECTION as CONNECTING,
  CHECK_CONNECTION_SUCCESS as CONNECTION_SUCCESS,
  CHECK_CONNECTION_FAILED as CONNECTION_FAILED
} from "../actions/actiontypes";
import { dispatch } from "../store";

export const initialize = () => {
  onConnectionCheck(() => dispatch({ type: CONNECTING }));
  onConnectionSuccess(() => dispatch({ type: CONNECTION_SUCCESS }));
  onConnectionFailed(error => dispatch({ type: CONNECTION_FAILED, error }));

  checkConnection();
};
