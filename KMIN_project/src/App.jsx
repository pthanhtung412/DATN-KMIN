import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Layouts/Header";
import Home from "./components/HomePage";
import Layout from "./components/Layouts";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import "./global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home />}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/Register" element={<Register></Register>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
