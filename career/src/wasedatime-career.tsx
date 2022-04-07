import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import singleSpaReact from "single-spa-react"

// const lifecycles = singleSpaReact({
//   React,
//   ReactDOM,
//   rootComponent: App,
//   errorBoundary: (
//     err,
//     info,
//     props // Customize the root error boundary for your microfrontend here.
//   ) => {
//     console.log("====================================");
//     console.error(err);
//     console.log(info);
//     console.log(props);
//     console.log("====================================");

//     return null;
//   },
// });

// export const { bootstrap, mount, unmount } = lifecycles;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
