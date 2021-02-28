import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import singleSpaCss from "single-spa-css";
import Root from "./root.component";

const cssLifecycles = singleSpaCss({
  // required: a list of CSS URLs to load
  // can be omitted if webpackExtractedCss is set to true, do not specify webpack extracted css files here
  cssUrls: ["syllabus/main.css"],

  // optional: defaults to false. This controls whether extracted CSS files from webpack
  // will automatically be loaded. This requires using the ExposeRuntimeCssAssetsPlugin,
  // which is documented below.
  webpackExtractedCss: false,

  // optional: defaults to true. Indicates whether the <link> element for the CSS will be
  // unmounted when the single-spa microfrontend is unmounted.
  shouldUnmount: true,

  // optional: defaults to 5000. The number of milliseconds to wait on the <link> to load
  // before failing the mount lifecycle.
  timeout: 5000,
});

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

// export const { bootstrap, mount, unmount } = reactLifecycles;

// Export an array of lifecycles to integrate with a framework's
// single-spa lifecycles. The order matters.
export const bootstrap =
  process.env.NODE_ENV !== "production"
    ? [cssLifecycles.bootstrap, reactLifecycles.bootstrap]
    : reactLifecycles.bootstrap;

export const mount =
  process.env.NODE_ENV !== "production"
    ? [
        // The css lifecycles should be before your framework's mount lifecycle,
        // to avoid a Flicker of Unstyled Content (FOUC)
        cssLifecycles.mount,
        reactLifecycles.mount,
      ]
    : reactLifecycles.mount;

export const unmount =
  process.env.NODE_ENV !== "production"
    ? [
        // The css lifecycles should be after your framework's unmount lifecycle,
        // to avoid a Flicker of Unstyled Content (FOUC)
        reactLifecycles.unmount,
        cssLifecycles.unmount,
      ]
    : reactLifecycles.unmount;
