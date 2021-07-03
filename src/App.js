// import data from

import Data from "./Data";

// import useState

import { useState } from "react";

function App() {
  const [data, setData] = useState(Data);

  console.log(data);

  return (
    <div className="App">
      <h1>Hello sku</h1>
    </div>
  );
}

export default App;
