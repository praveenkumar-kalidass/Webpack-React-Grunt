import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import App from "./Components/Container/App.react";

const AppRouter = () => (
  <Router basename="/">
    <Route path="/" component={App}>
    </Route>
  </Router>
);
export default AppRouter;
