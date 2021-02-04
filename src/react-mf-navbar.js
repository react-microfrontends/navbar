import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import singleSpaCss from "single-spa-css";
import "./hi.css";

const cssLifecyles = singleSpaCss({
  cssUrls: [],
  webpackExtractedCss: true,
});

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return (
      <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
        Error
      </div>
    );
  },
});

export const bootstrap = [cssLifecyles.bootstrap, reactLifecycles.bootstrap];
export const mount = [cssLifecyles.mount, reactLifecycles.mount];
export const unmount = [reactLifecycles.unmount, cssLifecyles.unmount];
