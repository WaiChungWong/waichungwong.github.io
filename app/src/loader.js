import React from "react";
import Loadable from "react-loadable";
import LoadableVisibility from "react-loadable-visibility/react-loadable";

const LoadComponent = (
  loadFunction,
  { loader, Loading, Error, Timeout, timeout }
) => {
  return loadFunction({
    loader,
    loading: props => {
      if (props.error && Error) {
        return <Error retry={props.retry} />;
      } else if (props.timedOut && Timeout) {
        return <Timeout retry={props.retry} />;
      } else if (props.isLoading && Loading) {
        return <Loading />;
      }
    },
    timeout
  });
};

export const Load = options => LoadComponent(Loadable, options);

export const LoadWhenVisible = options =>
  LoadComponent(LoadableVisibility, options);
