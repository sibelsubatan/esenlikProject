import React, { Component } from "react";

import Router from "./src/Router";
import { Provider } from "mobx-react";

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router />
      </Provider>

    );
  }
}
