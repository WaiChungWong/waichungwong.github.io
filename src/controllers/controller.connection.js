import axios from "axios";

import {
  CHECK_CONNECTION as CHECK,
  CHECK_CONNECTION_SUCCESS as SUCCESS,
  CHECK_CONNECTION_FAILED as FAILED
} from "../actions/actiontypes";

const checkEvents = [];
const succeedEvents = [];
const failedEvents = [];

const fireConnectionCheck = () => {
  for (var i = 0; i < checkEvents.length; i++) {
    checkEvents[i]();
  }
};

const fireConnectionSuccess = () => {
  for (var i = 0; i < succeedEvents.length; i++) {
    succeedEvents[i]();
  }
};

const fireConnectionFailed = data => {
  for (var i = 0; i < failedEvents.length; i++) {
    failedEvents[i](data);
  }
};

const addEvent = (events, event) => {
  if (typeof event === "function") {
    events.push(event);
  }

  return () => {
    const index = events.indexOf(event);

    if (index !== -1) {
      events.splice(index, 1);
    }
  };
};

window.addEventListener("online", () => checkConnection());
window.addEventListener("offline", () => checkConnection());

export const onConnectionCheck = event => addEvent(checkEvents, event);

export const onConnectionSuccess = event => addEvent(succeedEvents, event);

export const onConnectionFailed = event => addEvent(failedEvents, event);

export const checkConnection = async () => {
  fireConnectionCheck();

  let error;

  try {
    let { status, data } = await axios.get("/");

    if (status !== 200) {
      error = data;
    }
  } catch (e) {
    error = (e && e.response) || "no response from API";
  }

  if (error) {
    fireConnectionFailed(error);
  } else {
    fireConnectionSuccess();
  }
};

export const initialize = dispatch => {
  onConnectionCheck(() => dispatch({ type: CHECK }));
  onConnectionSuccess(() => dispatch({ type: SUCCESS }));
  onConnectionFailed(data => dispatch({ type: FAILED, data }));

  checkConnection();
};
