import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyle";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <GlobalStyles/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/game/:id" exact element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
