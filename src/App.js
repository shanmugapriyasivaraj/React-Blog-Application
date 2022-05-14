import React from "react";
import TopBar from "./Components/topbar/TopBar";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/Reg/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const user = false;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
