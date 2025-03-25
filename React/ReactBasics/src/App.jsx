import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div>
        <Navbar />

        <Dashboard/>
      </div>
    </div>
  );
};

export default App;
