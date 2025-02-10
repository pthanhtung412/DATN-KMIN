import React, { useEffect, useState } from "react";
import clsx from "clsx";
import $ from "jquery";
import styles from "./YourQuestion.module.css";
import { fetchProtectedData } from "../../utils/authUtils";
import { useNavigate } from "react-router-dom";

const YourQuestion = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tags, setTags] = useState([]); // state để lưu các tags
  const [tagInput, setTagInput] = useState(""); // state cho ô nhập tag

  let postId = null;

  useEffect(() => {
    const checkTokenStatus = async () => {
      try {
        const { isValid } = await fetchProtectedData();
        if (!isValid) {
          navigate("/");
        } else {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error checking token status:", error);
        navigate("/");
      }
    };

    checkTokenStatus();
  }, [navigate]);

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const addPostTag = async (tags_id, posts_id) => {
    try {
      const response = await fetch(
        "http://localhost:5173/api/createPostTag",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tags_id,
            posts_id
          }),
        }
      );

      if (response.ok) {
        const data = await response.json(); // Chuyển đổi response thành JSON
        alert(data);
      } else {
        const errorData = await response.json(); // Chuyển đổi response thành JSON lỗi
        alert("Create tag post failed: " + JSON.stringify(errorData)); // Hiển thị lỗi
      }
    }
    catch {
      alert("error");
    }
  }

  const addSearchCountTag = async (tag_name) => {
    try {
      const response = await fetch(
        "http://localhost:5173/api/addSearchCountTag",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tag_name,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json(); // Chuyển đổi response thành JSON
        alert(data);
        addPostTag(data.tag._id, postId)
      } else {
        const errorData = await response.json(); // Chuyển đổi response thành JSON lỗi
        alert("Create tag failed: " + JSON.stringify(errorData)); // Hiển thị lỗi
      }
    } catch (error) {
      alert("error");
    }
  };

  const createTag = async (tag_name) => {
    try {
      const response = await fetch("http://localhost:5173/api/createTag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tag_name,
          tag_describe: "none",
        }),
      });

      if (response.ok) {
        const data = await response.json(); // Chuyển đổi response thành JSON
        alert(JSON.stringify(data, null, 2)); // Chuyển đổi đối tượng thành chuỗi JSON
        console.log(JSON.stringify(data, null, 2))
        addPostTag(data._id, postId)
      } else {
        alert("Create tag failed");
      }
    } catch (error) {
      alert("error");
    }
  };

  const handleAddTag = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault(); // Ngừng hành động mặc định (space hoặc enter)
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput(""); // Reset ô nhập tag sau khi tạo tag
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const getAllTags = async () => {
    try {
      const response = await fetch("http://localhost:5173/api/tags", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json(); // Chuyển đổi response thành JSON
        return data;
      } else {
        alert("Create post failed");
      }
    } catch {
      console.error("Error during post creation:", error);
      alert("An error occurred while creating the post");
    }

    return false;
  };

  const handleSubmitQuestionForm = async (e) => {
    e.preventDefault(); // Ngăn chặn reload trang
    const post_title = document.getElementById("addQuestionFormTitle").value;
    const post_content = document.getElementById(
      "addQuestionFormContent"
    ).value;

    const user = JSON.parse(localStorage.getItem("user"));
    const user_id = user.id;

    if (post_title == "") {
      alert("Please fill the title");
      $("#addQuestionFormTitle").focus();
      return;
    }

    if (post_content == "") {
      alert("Please fill the content");
      $("#addQuestionFormContent").focus();
      return;
    }

    try {
      const response = await fetch("http://localhost:5173/api/createPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_title,
          post_content,
          user_id,
        }),
      });

      if (response.ok) {
        const data = await response.json(); // Chuyển đổi response thành JSON
        postId = data._id;
        const listTag = await getAllTags();

        if (listTag) {
          // Tạo một Set từ listTag để tra cứu nhanh hơn
          const tagSet = new Set(listTag.map((tag) => tag.tag_name));

          // Duyệt qua các tag trong mảng `tags`
          tags.forEach((item) => {
            if (tagSet.has(item)) {
              // Nếu tag đã tồn tại, tăng số lần tìm kiếm
              addSearchCountTag(item);
            } else {
              // Nếu tag chưa tồn tại, tạo mới
              createTag(item);
            }
          });
        }
      } else {
        alert("Create post failed");
      }
    } catch {
      console.error("Error during post creation:", error);
      alert("An error occurred while creating the post");
    }

    // Reset form
    document.getElementById("addQuestionFormTitle").value = "";
    document.getElementById("addQuestionFormContent").value = "";
    setTags([]);
  };

  return (
    <>
      <div className={clsx(styles.yourQuestionPage)}>
        <span className={clsx(styles.tagContent)}>
          What do you want to ask?
        </span>
        <br />
        <br />
        <span>
          A tag is a keyword or label that categorizes your question with other
          similar questions. Using the right tags
          <br /> makes it easier for others to find and answer your question.
        </span>
        <form
          style={{ display: "flex", justifyContent: "center" }}
          onSubmit={handleSubmitQuestionForm}
        >
          <div className={clsx(styles.addQuestionForm)}>
            <div style={{ textAlign: "center" }}>Add question form:</div>
            <div className={clsx(styles.addQuestionFormRow)}>
              <label htmlFor="addQuestionFormTitle" className="form-label">
                Title
              </label>
              <input
                className={clsx("form-control", styles.titleInput)}
                type="text"
                placeholder="Enter the title of your question"
                id="addQuestionFormTitle"
              />
            </div>
            <div className={clsx(styles.addQuestionFormRow)}>
              <label htmlFor="addQuestionFormContent" className="form-label">
                Content
              </label>
              <textarea
                className={clsx("form-control", styles.titleContent)}
                placeholder="Enter the content of your question"
                id="addQuestionFormContent"
              />
            </div>
            <div className={clsx(styles.addQuestionFormRow)}>
              <label htmlFor="addQuestionFormTag" className="form-label">
                Tags
              </label>
              <input
                className={clsx("form-control", styles.titleInput)}
                type="text"
                value={tagInput}
                onChange={handleTagInputChange}
                onKeyDown={handleAddTag}
                placeholder="Enter tags for your question"
                id="addQuestionFormTag"
              />
              <div className={clsx(styles.tagsContainer)}>
                {tags.map((tag, index) => (
                  <div key={index} className={clsx(styles.tag)}>
                    {tag}
                    <span
                      className={clsx(styles.removeTag)}
                      onClick={() => handleRemoveTag(tag)}
                    >
                      &times;
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "right", marginTop: "20px" }}>
              <button
                id="submitQuestionBtn"
                type="submit"
                className={clsx("btn btn-primary", styles.submitButton)}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default YourQuestion;
