import React from "react";
import "./Post.css";

const Post = ({ img }) => {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae cumque
        quam saepe asperiores non fugit totam, aliquid quod nam reprehenderit.
        Alias blanditiis nostrum ullam pariatur odio saepe qui repellendus esse!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae cumque
        quam saepe asperiores non fugit totam, aliquid quod nam reprehenderit.
        Alias blanditiis nostrum ullam pariatur odio saepe qui repellendus esse!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae cumque
        quam saepe asperiores non fugit totam, aliquid quod nam reprehenderit.
        Alias blanditiis nostrum ullam pariatur odio saepe qui repellendus esse!
      </p>
    </div>
  );
};

export default Post;
