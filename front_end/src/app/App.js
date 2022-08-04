import React from "react";
import RentalRequest from "../components/customer/RentalRequest";
import Home from "../pages/customer/home/home";
import ManageCar from "../pages/admin/manageCar";

import { Route,BrowserRouter, Link,Routes } from 'react-router-dom'

function App() {
    return (
        /*<Home/>*/





        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path="/manageCar" element={<ManageCar/>} />
            </Routes>
        </BrowserRouter>







        /*<HomeNavBar/>*/
        /* <Dashboard/>*/
        /*<RegisterCustomer/>*/
        /*<RentalRequest/>*/
        /*<ManageDriver/>*/
        /*<ManageCar/>*/
        /*<AdminNavBar/>*/
        /*<Home/>*/

    );
}

export default App;























