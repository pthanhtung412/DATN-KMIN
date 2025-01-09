import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./HomePage.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchProtectedData } from "../../utils/authUtils.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faTrophy,
  faFire,
  faEye, // Icon Mắt (Lượt xem)
  faComment, // Icon Bong bóng (Bình luận)
  faArrowUp, // Icon Mũi tên lên (Đánh giá)
} from "@fortawesome/free-solid-svg-icons";
import Tags from "../TagsPage/index.jsx";

const Home = () => {
  const [listPost, setListPost] = useState([]);
  const [listTag, setListTag] = useState([[]]);

  const getTags = async (postId) => {
    try {
      const response = await fetch()
    } catch {
      console.error("Error during get tags:", error);
      alert("An error occurred while getting tags");
    }
  };

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await fetch("http://localhost:5173/api/posts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json(); // Chuyển đổi response thành JSON
          setListPost(data);
          let arrTagOfPost = [[]]
          data.forEach((item) => {

          })
          console.log(data);
        } else {
          alert("find post failed");
        }
      } catch {
        console.error("Error during post creation:", error);
        alert("An error occurred while creating the post");
      }
    };

    getAllPosts();
  }, []);

  return (
    <div className={clsx(styles.questionPage)}>
      <div className={clsx(styles.listTag)}>
        <div className={clsx(styles.tagFilter)}>
          <FontAwesomeIcon
            style={{
              color: "blue",
            }}
            icon={faClock}
            className={clsx(styles.iconFilter)}
          />{" "}
          {/* Sử dụng icon */}
          New
        </div>
        <div className={clsx(styles.tagFilter)}>
          <FontAwesomeIcon
            icon={faTrophy}
            style={{
              color: "#eed202",
            }}
            className={clsx(styles.iconFilter)}
          />{" "}
          {/* Sử dụng icon */}
          Top
        </div>
        <div className={clsx(styles.tagFilter)}>
          <FontAwesomeIcon
            style={{
              color: "#F90000",
            }}
            icon={faFire}
            className={clsx(styles.iconFilter)}
          />{" "}
          {/* Sử dụng icon */}
          Hot
        </div>
      </div>
      <div id="listPost" className={clsx(styles.listOfPost)}>
        {listPost.map((post) => (
          <div key={post._id} className={clsx(styles.postItem)}>
            <div
              style={{
                color: "var(--mint-teal)",
                fontSize: "1.5em",
                textDecoration: "underline",
                wordWrap: "break-word",
              }}
            >
              {post.post_title}
            </div>
            <div
              style={{
                wordWrap: "break-word",
                marginTop: "5px",
              }}
            >
              {post.post_content}
            </div>
            <div>
              <div className={clsx(styles.listOfVoteIcon)}>
              </div>
              <div className={clsx(styles.listOfVoteIcon)}>
                <div className={clsx(styles.voteIconContent)}>
                  <FontAwesomeIcon
                    icon={faEye}
                    className={clsx(styles.voteIcon)}
                  />{" "}
                  {post.post_likes}
                </div>
                <div className={clsx(styles.voteIconContent)}>
                  <FontAwesomeIcon
                    icon={faComment}
                    className={clsx(styles.voteIcon)}
                  />{" "}
                  {post.post_views}
                </div>
                <div className={clsx(styles.voteIconContent)}>
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className={clsx(styles.voteIcon)}
                  />{" "}
                  {post.post_answers}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
