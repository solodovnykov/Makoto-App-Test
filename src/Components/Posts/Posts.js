import React from "react";
import Post from "../Post/Post";
import TitleLine from "../TitleLine/TitleLine";
import "./Posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <TitleLine type="update">ПОСЛЕДНИЕ ОБНОВЛЕНИЯ</TitleLine>
      <div className="posts-list">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <div className="posts-button-wrapper">
          <div className="posts-button">
            ПОСМОТРЕТЬ ВСЁ
            <div className="arrow-icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
