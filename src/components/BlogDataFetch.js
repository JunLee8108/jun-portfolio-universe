import { useState, useEffect } from "react";

import axios from "axios";

const BlogDataFetch = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get("/db/blogData.json");
        setBlogData(response.data); // 불러온 데이터를 상태에 저장
      } catch (error) {
        console.error("블로그 데이터를 불러오는데 실패했습니다.", error);
      }
    };

    fetchBlogData();
  }, []);

  return blogData;
};

export default BlogDataFetch;
