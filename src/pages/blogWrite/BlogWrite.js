import "./BlogWrite.css";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const BlogWrite = () => {
  const [post, setPost] = useState({ title: "", content: "", tag: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const verifyPassword = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const body = {};
    for (const [key, value] of form.entries()) {
      body[key] = value;
    }

    const password = body.password;

    if (password === process.env.REACT_APP_BLOG_PASSWORD) {
      return setIsAuthenticated(true);
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const handleSavePost = async () => {
    // 오늘 날짜를 MM/DD/YYYY 형식으로 생성
    const today = new Date();
    const dateFormat = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(today);
    const [month, day, year] = dateFormat.split("/");
    const formattedDate = `${month}/${day}/${year}`;

    // 새 글 객체에 날짜 추가
    const newPost = {
      ...post,
      date: formattedDate,
    };

    try {
      await axios.post("http://localhost:4000/api/posts", newPost);
      alert("글이 저장되었습니다.");
      // 성공적으로 저장 후 필요한 로직 구현 (예: 페이지 이동)
    } catch (error) {
      console.error("글 저장에 실패했습니다.", error);
    }
  };

  if (!isAuthenticated) {
    return (
      <form onSubmit={verifyPassword} className="blog-write-password-form">
        <h2>글 작성 관리자</h2>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          id="password"
          name="password"
        />
        <button>SUBMIT</button>
      </form>
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="제목"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <ReactQuill
        theme="snow"
        value={post.content}
        onChange={(content) => setPost({ ...post, content })}
        style={{ color: "white" }}
      />
      <input
        type="text"
        placeholder="태그"
        value={post.tag}
        onChange={(e) => setPost({ ...post, tag: e.target.value })}
      />
      <button onClick={handleSavePost}>완료</button>
    </div>
  );
};

export default BlogWrite;
