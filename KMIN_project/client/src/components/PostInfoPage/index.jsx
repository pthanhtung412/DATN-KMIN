import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./PostInfo.module.css";
import { useNavigate, useLocation } from "react-router-dom";
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

const PostInfo = () => {
  const location = useLocation(); 
  const { postInfo } = location.state || {}; // Lấy dữ liệu từ state

  return (
    <div className={clsx(styles.postContainer)}>
      <div className={clsx(styles.post)}>
        <div className={clsx(styles.postTitle)}>
          {postInfo.post_title}
        </div>
        <div></div>
      </div>
      <div className={clsx(styles.postComment)}>
        {postInfo.post_content}
      </div>
      <div className={clsx(styles.postComment)}>
        {postInfo.post_content}
      </div>
    </div>
  );
};

export default PostInfo;
