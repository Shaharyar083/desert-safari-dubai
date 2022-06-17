import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Footer from "../src/components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "../src/components/DetailPage";
import SliderDetail from "../src/components/SliderDetsilPage";
import ComboDeals from "../src/components/comboDeals";
import GroupBooking from "../src/components/GroupBooking";
import AdminDashboard from "../src/components/Admin/Admin Dashboard";
import Login from "../src/components/Login"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/detail-page" element={<DetailPage />} />
          <Route path="/tour-detail" element={<SliderDetail />} />
          <Route path="/combo-deals" element={<ComboDeals />} />
          <Route path="/group-booking" element={<GroupBooking />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin-login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
