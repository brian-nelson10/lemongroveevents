import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Book from "../pages/Book";
import PackageOne from "../pages/PackageOne";
import PackageTwo from "../pages/PackageTwo";
import PackageThree from "../pages/PackageThree";
import PackageFour from "../pages/PackageFour";
import AddOns from "../pages/AddOns";
import Success from "../pages/Success";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
           
<Routes location={location} key={location.pathname}>
            <Route
               path="/"
              exact element={<Home/>}
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
                path="/celebrate"
                element={<PackageFour/>}
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
          </Routes>
          </AnimatePresence>
    );
};
export default AnimatedRoutes;