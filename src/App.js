import React from "react";
import Header from "./Recurringcomp/hedear";
import { Route } from "react-router-dom";
import BigTitle from "./Home/bigtitle";
import { Routes } from "react-router-dom";
import Services from "./Home/Services";
import Statistics from "./Home/Statistics";
import Footer from "./Recurringcomp/Footer";
import Pages from "./Recurringcomp/Allpages";
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BigTitle />
              <Services />
              <Statistics />
              <Footer />
            </>
          }
        />
        <Route path="/pages/:d" element={<Pages/>} />
      </Routes>
    </div>
  );
}
