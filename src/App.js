// import styles
import "./styles/app.scss";

// Material ui
import { Button } from "@material-ui/core";

// import components

import Nav from "./components/Nav";

import Products from "./components/Products";

import Login from "./components/pages/login";

// import data from
import Data from "./Data";

// import useState

import { useState } from "react";

function App() {
  const [data, setData] = useState(Data);

  console.log(data);

  return (
    <div className="App">
      <Nav />

      <Products data={data} />
      <Login />
    </div>
  );
}

export default App;
