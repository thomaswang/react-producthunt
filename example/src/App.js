import React, { Component } from "react";

import { ShipWidget, Badge } from "react-producthunt";

export default class App extends Component {
  render() {
    return (
      <div>
        <ShipWidget appId="17824" />
        <Badge username="thomaswangio" />
      </div>
    );
  }
}
