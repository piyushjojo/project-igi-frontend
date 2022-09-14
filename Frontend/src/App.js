import "./App.css";
import { Route, Routes, Link, BrowserRouter, Switch } from "react-router-dom";
import PatientLogin from "./pages/PatientLogin";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/Dasboard";
import Signin from "./pages/Signin";
import MedInchargeLogin from "./pages/MedInchargeLogin";
import LabInchargeLogin from "./pages/LabInchargeLogin";

function App() {
  return (
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
