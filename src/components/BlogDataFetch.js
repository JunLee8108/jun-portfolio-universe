import { useState, useEffect } from "react";

import axios from "axios";

const BlogDataFetch = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get("/db/blogData.json");
        setBlogData(response.data); // 불러온 데이터를 상태에 저장
        setIsLoading(false); // 데이터 로딩 완료
        // setTimeout(() => {
        //   setIsLoading(false); // 데이터 로딩 완료
        // }, 1000);
      } catch (error) {
        console.error("블로그 데이터를 불러오는데 실패했습니다.", error);
        setIsLoading(false); // 에러 발생 시에도 로딩 완료 처리
      }
    };

    fetchBlogData();
  }, []);

  return { blogData, isLoading };
};

export default BlogDataFetch;
