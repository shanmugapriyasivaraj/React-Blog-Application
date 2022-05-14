import React from "react";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/posts/Posts";
import SideBar from "../../Components/sidebar/SideBar";
import TopBar from "../../Components/topbar/TopBar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
