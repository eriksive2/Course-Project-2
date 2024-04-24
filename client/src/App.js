import React from "react";
// Components
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// Pages
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import PageFramework from "./pages/framework";
import ProductPage from "./pages/productpage";
import StructureSelectionPage from "./pages/structureselectionpage";
import Structure from "./pages/structure";
import CheckoutPage from "./pages/CheckoutPage"
import OrdersPage from "./pages/OrdersPage";


function App() {
    return (
        <Router>
            <Routes>
                <Route 
                    exact path="/" 
                    element={<PageFramework component={<Home/>} />} />
                <Route 
                    path="/about" 
                    element={<PageFramework component={<About/>} />} />
                <Route
                    path="/contact"
                    element={<PageFramework component={<Contact/>} />} />
                <Route 
                    path="/blogs" 
                    element={<PageFramework component={<Blogs/>} />} />
                <Route
                    path="/sign-up"
                    element={<PageFramework component={<SignUp/>} />} />
                <Route
                    path="/structureselectionpage"
                    element={<PageFramework component={<StructureSelectionPage/>} />} />
                <Route
                    path="/productpage"
                    element={<PageFramework component={<ProductPage />} />} />
                <Route
                    path="/structure/:structure_id"
                    element={<PageFramework component={<Structure />} />}
                />
                <Route
                    path="/orders"
                    element={<PageFramework component={<OrdersPage/>}/>}/>
                <Route 
                    path="/checkout"
                    element={<PageFramework component={<CheckoutPage/>}/>}/>
            </Routes>
        </Router>
    );
}
 
export default App;