import "./BlogDetail.css";
import BlogDataFetch from "../../components/BlogDataFetch";
import TypingAnimation from "../../components/TypingAnimation";

import { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function BlogDetail() {
  let { id } = useParams();
  const { blogData, isLoading } = BlogDataFetch();
  const navigate = useNavigate();

  const post = blogData.filter((item) => item.id === Number(id));

  const handleDeletePost = async () => {
    const isConfirmed = window.confirm("이 글을 정말 삭제하시겠습니까?");
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:4000/api/posts/${id}`);
        alert("글이 삭제되었습니다.");
        sessionStorage.setItem("blogCurrentPage", "1");
        navigate("/blog", { replace: true }); // 메인 페이지로 리다이렉트
      } catch (error) {
        console.error("글 삭제 중 오류가 발생했습니다.", error);
      }
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isLoading && post.length === 0) {
      alert("Error: Post not found.");
      navigate("/blog");
    }
  }, [isLoading, post, navigate]);

  return (
    <>
      <TypingAnimation text="Blog Post" class="blog-detail-typing-animation" />
      {isLoading || post.length === 0 ? (
        <SkeletonBlogDetail />
      ) : (
        <div className="blog-detail animation-slow">
          <div className="blog-detail-post-container">
            <h1 className="blog-detail-post-title">{post[0].title}</h1>

            <div className="blog-detail-post-tag-date-container">
              <div className="blog-detail-tag-container">
                <p>Tag: </p>
                <button className="blog-post-tag">{post[0].tag}</button>
              </div>
              <p>{post[0].date}</p>
            </div>

            <div
              dangerouslySetInnerHTML={{
                __html: post[0].content,
              }}
              className="blog-detail-post-content"
            />

            <div className="blog-detail-edit-delete-container">
              <button onClick={() => navigate(`/edit/${post[0].id}`)}>
                EDIT
              </button>
              <button onClick={handleDeletePost}>DELETE</button>
            </div>
          </div>

          <center>
            <button
              className="blog-detail-back-button"
              onClick={() => navigate(-1)}
            >
              Go Back to Blog
            </button>
          </center>
        </div>
      )}
    </>
  );
}

function SkeletonBlogDetail() {
  return (
    <div className="blog-detail-post-container skeleton skleton-blog-detail">
      <div className="skeleton-blog-detail-title"></div>
      <div className="skeleton-blog-detail-tag-date-container">
        <div className="skeleton-blog-detail-tag"></div>
        <div className="skeleton-blog-detail-date"></div>
      </div>
      <div className="skeleton-blog-detail-content"></div>
    </div>
  );
}
