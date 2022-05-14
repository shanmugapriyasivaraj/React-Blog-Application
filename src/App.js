import React from "react";
import TopBar from "./Components/topbar/TopBar";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";

function App() {
  return (
    <>
      <TopBar />
      <Login />
    </>
  );
}

export default App;
