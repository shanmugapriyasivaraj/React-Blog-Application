import React from "react";
import Header from "../../Components/Header/Header";
import Post from "../../Components/posts/Post";
import SideBar from "../../Components/sidebar/SideBar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
