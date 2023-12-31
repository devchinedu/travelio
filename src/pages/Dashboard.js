import React from "react";
import Helmet from "react-helmet";
import DocTable from "../components/dashboard/DocTable";

function Dashboard() {
  return (
    // use image background
    <div className="bg-blue-gray-800">
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Helmet app" />
        <link rel="canonical" href="http://example.com/my-app" />
      </Helmet>
      <DocTable/>
    </div>
  );
}

export default Dashboard;
