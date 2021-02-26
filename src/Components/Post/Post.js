import React from "react";
import "./Post.css";

export default function Post() {
  return (
    <div className="post-card">
      <div className="post-card-header">
        <div className="post-card-tags">
          <div className="tag gray">НОВОЕ</div>
          <div className="tag brown">ВАЖНО</div>
          <div className="tag green">ВЫЖИВАНИЕ</div>
        </div>
        <div className="post-card-date">Восресенье, 19:43</div>
      </div>
      <div className="post-card-body">
        <div className="post-card-footer">
          <div className="post-card-footer-text">
            Изменение политики правил для входа
          </div>
          <div className="post-card-footer-icon"></div>
        </div>
      </div>
    </div>
  );
}
