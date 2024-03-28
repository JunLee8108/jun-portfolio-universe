import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function BlogEdit() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    content: "",
    tag: "",
    date: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/posts/${id}`
        );
        setPost(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [id, navigate]);

  console.log(id);

  const handleUpdatePost = async () => {
    // 필수 입력 검사
    if (!post.title || !post.tag) {
      alert("Title and tag are required.");
      return;
    }

    try {
      await axios.put(`http://localhost:4000/api/posts/${id}`, post);
      alert("글이 업데이트되었습니다.");
      navigate(`/blog/${id}`, { replace: true }); // 성공적으로 업데이트 후 해당 글 상세 페이지로 이동
    } catch (error) {
      console.error("업데이트에 실패했습니다.", error);
    }
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-write">
      <div className="blog-write-title-tag-container">
        <input
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tag"
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
        />
      </div>

      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={post.content}
        onChange={(content) => setPost({ ...post, content })}
        style={{
          color: "white",
          height: "300px",
          marginBottom: "110px",
          width: "100%",
        }}
      />

      <center>
        <button className="blog-write-submit" onClick={handleUpdatePost}>
          SUBMIT
        </button>
      </center>
    </div>
  );
}
