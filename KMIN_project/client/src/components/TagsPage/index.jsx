import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Tags.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Tags = () => {
  const [listTag, setListTag] = useState([]);

  useEffect(() => {
    const getListTag = async () => {
      try {
        const response = await fetch("http://localhost:5173/api/tags", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json(); // Chuyển đổi response thành JSON
          setListTag(data);
          console.log(data);
        }
      } catch {
        console(error);
      }
    };
    getListTag();
  }, []);

  return (
    <>
      <div className={clsx(styles.tagPage)}>
        <span className={clsx(styles.tagContent)}>Tags</span>
        <br></br>
        <br></br>
        <span>
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using the right tags<br></br> makes it easier for
          others to find and answer your question.
        </span>
        <div className={clsx(styles.tagGridContainer)}>
          {listTag.map((tag) => (
            <div key={tag._id} className={clsx(styles.tagItem)}>
              <span className={clsx(styles.tagName)}>{tag.tag_name}</span>
              <p className={clsx(styles.tagDescription)}>
                {tag.tag_describe || "No description available for this tag."}
              </p>
              <div className={clsx(styles.tagStats)}>
                <span>{tag.tag_search_count || 0} search</span>
                <span>{tag.tag_vote_count || 0} vote</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tags;
