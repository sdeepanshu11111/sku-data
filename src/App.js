// import styles
import "./styles/app.scss";

// Material ui
import { Button } from "@material-ui/core";

// import Switch and route

import { Switch, Route } from "react-router-dom";

// import component
import Nav from "./components/Nav";

import Products from "./components/Products";

import Login from "./components/pages/login";

// import data from
import Data from "./Data";

// import useState
import { useState } from "react";

function App() {
  const [mainData, setMainData] = useState(Data);

  const [data, setData] = useState(Data);

  console.log(data);

  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path="/" exact>
          <Products mainData={mainData} setData={setData} data={data} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
