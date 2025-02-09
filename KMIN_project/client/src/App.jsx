import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import Header from "./components/Layouts/Header";
import Home from "./components/HomePage";
import Layout from "./components/Layouts";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import Tags from "./components/TagsPage";
import YourQuestion from "./components/YourQuestionPage/indes";
import PostInfo from "./components/PostInfoPage";
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
          <Route path="/Tags" element={<Tags></Tags>}></Route>
          <Route path="/YourQuestion" element={<YourQuestion></YourQuestion>}></Route>
          <Route path="/PostInfo" element={<PostInfo></PostInfo>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
