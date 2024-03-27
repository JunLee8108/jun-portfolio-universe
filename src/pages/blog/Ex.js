import "./Blog.css";
import { blogData } from "../../utils/data/data";
import TypingAnimation from "../../components/TypingAnimation";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function Blog() {
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(() => {
    return Number(sessionStorage.getItem("blogCurrentPage")) || 1;
  });
  const postsPerPage = 3;
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setCurrentPage(1);
  };

  const handleClickPost = (id) => () => {
    navigate(`/blog/${id}`);
  };

  const handlePageClick = (pageNumber) => () => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(blogData.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const searchedData = searchInput
    ? blogData.filter(
        (item) =>
          item.title
            .replaceAll(" ", "")
            .toLocaleLowerCase()
            .includes(searchInput.replaceAll(" ", "").toLocaleLowerCase()) ||
          item.content
            .replaceAll(" ", "")
            .toLocaleLowerCase()
            .includes(searchInput.replaceAll(" ", "").toLocaleLowerCase())
      )
    : null;

  useEffect(() => {
    sessionStorage.setItem("blogCurrentPage", currentPage);
  }, [currentPage]);

  return (
    <>
      <TypingAnimation text="My Blog" class="blog-typing-animation" />

      <div className="blog animation-slow">
        <div className="blog-search-container">
          <input
            id="blog-search-id"
            type="search"
            placeholder="🔍 Search Post..."
            className="blog-search"
            onChange={handleSearch}
            value={searchInput}
          ></input>
          <label htmlFor="blog-search-id">Search</label>

          {searchInput ? (
            <div className="blog-search-result">
              {searchedData.length > 0 ? (
                <>
                  <h2 className="blog-search-result-title">
                    Search Result - {searchedData.length} results
                  </h2>
                  {searchedData.map((item, index) => {
                    return (
                      <div
                        className="blog-post"
                        key={index}
                        onClick={handleClickPost(item.id)}
                      >
                        <div className="blog-post-title-date-container">
                          <h1 className="blog-post-title">{item.title}</h1>
                          <p className="blog-post-date">{item.date}</p>
                        </div>
                        <p className="blog-post-content">{item.content}</p>
                        <button className="blog-post-tag">{item.tag}</button>
                      </div>
                    );
                  })}
                </>
              ) : (
                <h2 className="blog-search-no-result">No Result.</h2>
              )}
            </div>
          ) : (
            <>
              <div className="blog-post-container">
                {currentPosts.map((item, index) => (
                  // Normal posts
                  <div
                    className="blog-post"
                    onClick={handleClickPost(item.id)}
                    key={index}
                  >
                    <div className="blog-post-title-date-container">
                      <h1 className="blog-post-title">{item.title}</h1>
                      <p className="blog-post-date">{item.date}</p>
                    </div>
                    <p className="blog-post-content">{item.content}</p>
                    <button className="blog-post-tag">{item.tag}</button>
                  </div>
                ))}
              </div>

              <div className="pagination">
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    className={`pagination-button ${
                      currentPage === number ? "pagination-button-active" : ""
                    }`}
                    onClick={handlePageClick(number)}
                  >
                    {number}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
