import "./BlogDetail.css";
import BlogDataFetch from "../../components/BlogDataFetch";
import TypingAnimation from "../../components/TypingAnimation";

import { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

export default function BlogDetail() {
  let { id } = useParams();
  const { blogData, isLoading } = BlogDataFetch();
  const navigate = useNavigate();
  const post = blogData.filter((item) => item.id === Number(id));

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, []);

  return (
    <>
      <TypingAnimation text="Blog Post" class="blog-detail-typing-animation" />
      {isLoading ? (
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
