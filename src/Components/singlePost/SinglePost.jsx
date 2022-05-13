import React from "react";
import "./SinglePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Noah</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        voluptatibus aliquid alias veniam delectus ducimus iste eveniet sed
        veritatis itaque doloremque, nihil quis magnam rem ab assumenda
        consequatur, sequi labore! Exercitationem adipisci eaque soluta id
        doloribus blanditiis aut ab quod asperiores alias! Ad eos quae, fugit
        velit cumque iusto voluptatibus quidem aliquid harum ab totam libero.
        Vero minima perferendis hic? Veniam quam praesentium dicta dolorum,
        molestiae non nobis quidem, consequuntur nostrum consequatur eum!
        Perspiciatis, quia. Suscipit eum in exercitationem cupiditate itaque
        consequuntur expedita qui. Quam harum maxime odit sed enim? Quaerat
        delectus nemo saepe alias illo voluptates ullam quasi dolore totam,
        voluptas amet laboriosam, eos doloremque! Eligendi enim neque iusto hic
        saepe qui, reprehenderit quasi voluptates nostrum, ea praesentium eos.
        Sapiente similique totam sint harum nostrum assumenda ipsam labore nihil
        dolore earum, blanditiis minima cupiditate quam nesciunt placeat
        necessitatibus sequi. Magnam, rerum molestiae! Enim tenetur ad amet
        exercitationem ipsam? At! Consequuntur rerum qui iusto unde repudiandae
        maxime minus exercitationem, expedita facere labore neque, pariatur
        perspiciatis, ullam at deserunt! Ipsam eum qui laboriosam recusandae
        blanditiis magnam deleniti id nulla similique maiores? Eaque facilis,
        amet beatae dolores sint dicta tempore animi pariatur porro iste ad aut
        cupiditate autem vitae quibusdam nihil eum? Ipsam, dignissimos delectus
        magnam in explicabo iure expedita vitae id. Praesentium officiis non
        debit
      </p>
    </div>
  );
};

export default SinglePost;
