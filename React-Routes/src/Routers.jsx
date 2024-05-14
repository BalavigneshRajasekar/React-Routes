import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FullStackDevelopment from "./FullStackDevelopment";
import DataScience from "./DataScience";
import CyberSecurity from "./CyberSecurity";
import Careers from "./Careers";
import Home from "./Home";
import Nav from "./Nav";

function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/All" element={"/All"}></Route>
          <Route
            path="/FullStackDevelopment"
            element={<FullStackDevelopment></FullStackDevelopment>}
          ></Route>
          <Route
            path="/DataScience"
            element={<DataScience></DataScience>}
          ></Route>
          <Route
            path="/CyberSecurity"
            element={<CyberSecurity></CyberSecurity>}
          ></Route>
          <Route path="/Careers" element={<Careers></Careers>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
