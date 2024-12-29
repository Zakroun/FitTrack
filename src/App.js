import React from "react";
import Header from "./hedearpages/hedear";
import { Route } from "react-router-dom";
import BigTitle from "./Home/bigtitle";
import { Routes } from "react-router-dom";
import Services from "./Home/Services";
export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<><BigTitle></BigTitle><Services></Services></>} />
      </Routes>
    </div>
  );
}