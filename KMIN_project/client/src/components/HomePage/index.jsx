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
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [listPost, setListPost] = useState([]);
  const [listTag, setListTag] = useState([[]]);

  const handlePostContentClick = (postInfo) => {
    navigate("/PostInfo", { state: {postInfo}});
  }

  const getTags = async (postId, index) => {
    try {
      console.log(postId);

      const response = await fetch("http://localhost:5173/api/getTagByPostId", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          posts_id: postId,
        }),
      });

      if (response.ok) {
        const data = await response.json(); // Chuyển đổi response thành JSON
        console.log(data);
        return data;
      } else {
        alert("Find tag failed");
      }
      // const response = await fetch()
    } catch {
      console.error("Error during get tags:", error);
      alert("An error occurred while getting tags");
    }

    return [];
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

          let arrTagOfPost = [[]];
          // data.forEach((item) => {
          //   getTags(item._id)
          // })
          const tempArrList = [];
          for (let i = 0; i < data.length; i++) {
            tempArrList.push(await getTags(data[i]._id, i));
          }
          setListPost(data);
          setListTag(tempArrList);
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
        {listPost.map((post, index) => (
          <div key={post._id} className={clsx(styles.postItem)}>
            <div
              onClick={() => handlePostContentClick(post)}
              className={clsx(styles.postTitle)}
            >
              {post.post_title}
            </div>
            <div
              style={{
                wordWrap: "break-word",
                marginTop: "5px",
                marginBottom: "5px"
              }}
            >
              {post.post_content}
            </div>
            <div>
              <div className={clsx(styles.listOfTag)}>
                {listTag[index].map((tag, indexTag) => (
                  <div className={clsx(styles.tagFilter)} key={tag._id}>{tag.tag_name}</div>
                ))}
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
