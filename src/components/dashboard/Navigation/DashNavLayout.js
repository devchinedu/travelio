import React from "react";
import DashNav from "./DashNav";
import Sidebar from "./Sidebar";

function DashNavLayout({ children }) {
  return (
    <div>
      <DashNav />
      <Sidebar />
      {children}
    </div>
  );
}

export default DashNavLayout;