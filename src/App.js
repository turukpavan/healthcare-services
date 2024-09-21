import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react'
import ServiceList from './Components/ServiceList';
import AddNewServices from "./Components/AddNewServices";
import ServiceProvider from "./Components/Store/ServiceProvider";
import {  Route, Routes } from "react-router-dom";
import UpdateServices from "./Components/UpdateServices";

const App = () => {
  return (
    <ServiceProvider>
          <Routes>
            <Route exact path="/"  element={<ServiceList />} />
            <Route exact path="/AddNewServices" element={<AddNewServices/>} />
            <Route exact path="/updateServices/:id" element={<UpdateServices/>} />
          </Routes>
    </ServiceProvider>
  )
}

export default App
