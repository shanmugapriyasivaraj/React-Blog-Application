import React from "react";

import SideBar from "../../Components/sidebar/SideBar";
import SinglePost from "../../Components/singlePost/SinglePost";
import "./Single.css";
const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
};

export default Single;
