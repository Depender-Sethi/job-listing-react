import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import NewJob from "./components/Job/NewJob";
import CompanyVerification from "./components/CompanyVerification";

const routing = (<BrowserRouter><Routes>
    <Route path="/" element={<App />} />
    <Route exact path="/new-job" element={<NewJob />} />
    <Route exact path="/company-verification" element={<CompanyVerification />} />
</Routes></BrowserRouter>
)
ReactDOM.render(
    routing,
    document.getElementById("root")
);
