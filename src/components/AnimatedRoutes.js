import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Test from '../pages/Test';
import { AnimatePresence } from 'framer-motion';
import Book from "../pages/Book";
import PackageOne from "../pages/PackageOne";
import PackageTwo from "../pages/PackageTwo";
import PackageThree from "../pages/PackageThree";
import AddOns from "../pages/AddOns";
import Success from "../pages/Success";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
           
<Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={<Home/>}
              />
              <Route
              path="/Home"
              element={<Home/>}
              />
              <Route 
                path="/Book"
                element={<Book/>}
                />
                <Route 
                path="/date"
                element={<PackageOne/>}
                />
                <Route 
                path="/event"
                element={<PackageTwo/>}
                />
                  <Route 
                path="/ido"
                element={<PackageThree/>}
                />
                <Route 
                path="/addons"
                element={<AddOns/>}
                />
                <Route 
                text="Success"
                path="/success"
                element={<Success/>}
                />
                <Route 
                path="/Test"
                element={<Test/>}
                />
          </Routes>
         
          </AnimatePresence>
    )
}

export default AnimatedRoutes;