import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import Search from "./components/Search/Search";
import "./assets/App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <Search />
      <Layout />
    </div>
  );
}

export default App;
