import "./App.css";
import { Route, Routes, Link, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
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
import WalletRecharge from "./pages/WalletRecharge";

// import About from "./pages/About";

import OrderSummaryPage from "./pages/OrderSummaryPage";

import Test from "./pages/Test.js";
import About from "./pages/About";
import SigninModal from "./pages/SigninModal";
import DeleteAccount from "./pages/DeleteAccount";
import OrderHistory from "./pages/OrderHistory";

function App() {
  const [orderlist, setOrderlist] = useState([]);
  return (
    <div>
      <AppContext.Provider
        value={{ orderlist: orderlist, setOrderlist: setOrderlist,payment_bool:false,wallet:0 }}
      >
        <div className="App">
          <BrowserRouter>
            {/* <Navbar /> */}

            {/* <Test/> */}

            <Routes>
              <Route exact path="/" element={<Home />} />
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
              <Route exact path="about" element={<About />} />
              <Route exact path="services" element={<About />} />
              {/* <Route exact path="signin" element={<Signin />} /> */}
              <Route exact path="signin" element={<Test />} />
              <Route exact path="profile" element={<Profile />} />
              <Route exact path="changePassword" element={<ChangePassword />} />
              <Route exact path="signup" element={<PatientSignUp />} />
              <Route exact path="order" element={<OrderMed />} />
              <Route exact path="cart" element={<Cart />} />
              <Route exact path="yourorders" element={<YourOrders />} />
              <Route exact path="payment" element={<Payment />} />
              <Route exact path="processing" element={<PaymentProcessing />} />
              <Route exact path="deleteAccount" element={<DeleteAccount />} />
              <Route exact path="ordersummary" element={<OrderSummaryPage />} />
              <Route exact path="orderhistory" element={<OrderHistory />} />
              <Route exact path="wallet" element={<WalletRecharge />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
