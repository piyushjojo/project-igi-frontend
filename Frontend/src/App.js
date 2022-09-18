import "./App.css";
import { Route, Routes, Link, BrowserRouter, Switch } from "react-router-dom";
import PatientLogin from "./pages/PatientLogin";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/Dasboard";
import Signin from "./pages/Signin";
import MedInchargeLogin from "./pages/MedInchargeLogin";
import LabInchargeLogin from "./pages/LabInchargeLogin";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import PatientSignUp from "./pages/PatientSignUp";
import OrderMed from "./pages/OrderMed";
import Cart from "./pages/Cart";
import { useState } from "react";

import AppContext from "./Components/context";
import YourOrders from "./pages/YourOrders";
import Payment from "./pages/Payment";
import PaymentProcessing from "./pages/PaymentProcessing";

function App() {
  const [orderlist,setOrderlist]=useState([]);
  return (
    <AppContext.Provider value={{orderlist:orderlist, setOrderlist:setOrderlist}}>
      <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="patient/signin" element={<PatientLogin />} />
          <Route
            exact
            path="labincharge/signin"
            element={<LabInchargeLogin />}
          />
          <Route
            exact
            path="medincharge/signin"
            element={<MedInchargeLogin />}
          />
          <Route exact path="dashboard" element={<Dashboard />} />
          <Route exact path="signin" element={<Signin />} />
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="changePassword" element={<ChangePassword />} />
          <Route exact path="signup" element={<PatientSignUp />} />
          <Route exact path="order" element={<OrderMed />} />
          <Route exact path="cart" element={<Cart />} />
          <Route exact path="yourorders" element={<YourOrders />} />
          <Route exact path="payment" element={<Payment />} />
          <Route exact path="processing" element={<PaymentProcessing />} />
        </Routes>
      </BrowserRouter>
    </div>
    </AppContext.Provider>
    
  );
}

export default App;
