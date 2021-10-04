import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import storeConfig from "./store/configureStore";

const store = storeConfig();
//NOTE: 1 here we are getting the store form "./store/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* // 2 NOTE:now everything inside in the provider has access to the store */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
