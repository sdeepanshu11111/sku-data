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

  const [searchState, setSearchState] = useState(Data);

  console.log(data);

  return (
    <div className="App">
      <Switch>
        <Route path="/sku-data" exact>
          <Nav />

          <Products
            mainData={mainData}
            searchState={searchState}
            setSearchState={setSearchState}
            setMainData={setMainData}
            setData={setData}
            data={data}
          />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
