import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import DocTable from "./components/dashboard/DocTable";
import Inbox from "./components/dashboard/Inbox";
import DashNavLayout from "./components/dashboard/Navigation/DashNavLayout";
import Profile from "./components/dashboard/Profile";
import Settings from "./components/dashboard/Settings";
import Upload from "./components/dashboard/Upload";
import GlobalHeader from "./components/globalHeader/GlobalHeader";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import SignupLogin from "./pages/SignupLogin";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      {window.location.pathname.includes("Dashboard") ? (
        <DashNavLayout>
        <Routes>
          <Route  path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/Dashboard/docs" replace />} />
          <Route exact path="/Dashboard/docs" element={<DocTable />} />
          <Route exact path="/Dashboard/upload" element={<Upload />} />
          <Route exact path="/Dashboard/inbox" element={<Inbox />} />
          <Route exact path="/Dashboard/settings" element={<Settings />} />
          <Route exact path="/Dashboard/profile" element={<Profile />} />
        </Routes>
       </DashNavLayout>
      ) : (
        <GlobalHeader>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signuplogin" element={<SignupLogin />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/about-us" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route path="*" element={<h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-center py-20 px-20" > ⛔️ 404 Not Found...</h1>} />
          </Routes>
        </GlobalHeader>
      )}
    </Router>
  );
}
