import React from "react";
import "./MainText.css";

export default function MainText() {
  return (
    <div className="main-text">
      <div className="main-text-header">
        <div className="main-text-h1">MAKOTO</div>
        <div className="main-text-h2">КОМПЛЕКС УЮТНЫХ СЕРВЕРОВ</div>
      </div>
      <div className="main-text-body">
        <div className="main-text-online">
          <div className="square online"/> 28 игроков онлайн
        </div>
        <div className="main-text-discord">3,246 участников
        <div className="dicord-icon-mini"></div>
        </div>
      </div>
    </div>
  );
}
