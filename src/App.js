// import styles
import "./styles/app.scss";

// import components

import Products from "./components/Products";

// import data from
import Data from "./Data";

// import useState

import { useState } from "react";

function App() {
  const [data, setData] = useState(Data);

  console.log(data);

  return (
    <div className="App">
      <Products data={data} />
    </div>
  );
}

export default App;
