// server/index.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

const dataFilePath = path.join(
  __dirname,
  "..",
  "public",
  "db",
  "blogData.json"
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/api/posts", (req, res) => {
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the JSON file:", err);
      return res.status(500).send("Server error while reading blog data");
    }

    res.status(200).send(data);
  });
});

// POST 요청 처리
app.post("/api/posts", (req, res) => {
  const newPost = req.body;

  // JSON 파일에서 기존 데이터를 불러옵니다.
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the JSON file:", err);
      return res.status(500).send("Server error");
    }

    // 기존 데이터를 JSON 객체로 변환
    let blogData;
    try {
      blogData = JSON.parse(data);
    } catch (parseError) {
      console.error("Error parsing JSON data:", parseError);
      return res.status(500).send("Error parsing JSON data");
    }

    // 새로운 포스트 ID 할당
    const newId =
      blogData.length > 0
        ? Math.max(...blogData.map((post) => post.id)) + 1
        : 0;
    newPost.id = newId;

    // 새로운 포스트를 데이터 배열에 추가
    blogData.push(newPost);

    // 데이터 파일 업데이트
    fs.writeFile(
      dataFilePath,
      JSON.stringify(blogData, null, 2),
      "utf8",
      (writeErr) => {
        if (writeErr) {
          console.error("Error writing the JSON file:", writeErr);
          return res.status(500).send("Server error while saving the post");
        }
        res.status(200).send({ message: "Post saved successfully", id: newId });
      }
    );
  });
});
