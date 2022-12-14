import "./App.css";
import { Route, Routes, Link, BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dasboard";
import MedDashboard from "./pages/MedDasboard";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import OrderMed from "./pages/OrderMed";
import Cart from "./pages/Cart";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import AppContext from "./Components/context";
import YourOrders from "./pages/YourOrders";
import Payment from "./pages/Payment";
import PaymentProcessing from "./pages/PaymentProcessing";
import WalletRecharge from "./pages/WalletRecharge";
import "react-toastify/dist/ReactToastify.css";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import Signin from "./pages/Signin";
import About from "./pages/About";
import DeleteAccount from "./pages/DeleteAccount";
import OrderHistory from "./pages/OrderHistory";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AddMeds from "./pages/AddMeds";
import IMedicineOrderList from "./pages/IMedicineOrderList";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import ViewOrder from "./pages/ViewOrder";
import Register from "./pages/Register";
import Medicines from "./pages/Medicines";
import NotFound from "./pages/NotFound";
import EditMedicineDetails from "./pages/EditMedicineDetails";

function App() {
  const [orderlist, setOrderlist] = useState([]);
  return (
    <>
      <AppContext.Provider
        value={{
          orderlist: orderlist,
          setOrderlist: setOrderlist,
          payment_bool: false,
          wallet: 0,
        }}
      >
        <div className="App">
          <BrowserRouter>
            <div className="header">
              <Navbar />
            </div>

            {/* <Test/> */}

            <div className="main">
              <Routes>
                <Route exact path="/" element={<Home />} />

                <Route exact path="dashboard" element={<Dashboard />} />
                <Route exact path="meddashboard" element={<MedDashboard />} />
                <Route exact path="about" element={<About />} />
                <Route exact path="services" element={<About />} />
                <Route exact path="signin" element={<Signin />} />
                <Route exact path="profile" element={<Profile />} />
                <Route
                  exact
                  path="changePassword"
                  element={<ChangePassword />}
                />
                <Route exact path="signup" element={<Register />} />
                <Route exact path="order" element={<OrderMed />} />
                <Route exact path="cart" element={<Cart />} />
                <Route exact path="yourorders" element={<YourOrders />} />
                <Route exact path="payment" element={<Payment />} />
                <Route
                  exact
                  path="processing"
                  element={<PaymentProcessing />}
                />
                <Route exact path="deleteAccount" element={<DeleteAccount />} />
                <Route
                  exact
                  path="ordersummary"
                  element={<OrderSummaryPage />}
                />
                <Route exact path="orderhistory" element={<OrderHistory />} />
                <Route exact path="wallet" element={<WalletRecharge />} />
                <Route exact path="addMeds" element={<AddMeds />} />
                <Route exact path="faq" element={<FAQs />} />
                <Route exact path="contact" element={<ContactUs />} />
                <Route exact path="medicines" element={<Medicines />} />
                <Route
                  exact
                  path="editMedicine"
                  element={<EditMedicineDetails />}
                />
                <Route
                  exact
                  path="medicineorderlist"
                  element={<IMedicineOrderList />}
                />
                <Route exact path="vieworder" element={<ViewOrder />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ToastContainer position="top-center" autoClose={2000} />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
