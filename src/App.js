// App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WorldMap from "./Components/WorldMap";
import SitePage from "./pages/SitePage";
import Scene from "./components/Scene";
import { styled } from "@stitches/react";

const Main = styled("main", {
  height: "100vh",
  width: "100vw"
});

const App = () => {
  return (
    <Router>
      <Switch>
        <Main>
          <Scene />
        </Main>
        <Route exact path="/" component={WorldMap} />
        <Route path="/site/:siteId" component={SitePage} />
      </Switch>
    </Router>
  );
};

export default App;
