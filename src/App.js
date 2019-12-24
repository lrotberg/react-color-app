import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import seedColors from "./seedColors";
import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Hi</h1>} />
        <Route exact path="/palette/:id" render={() => <h1>lolo</h1>} />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
