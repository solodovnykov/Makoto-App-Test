import React, { useEffect, useState } from "react";
import "./TitleLine.css";
import updatesIcon from "../../images/UpdatesIcon.svg";
import ourServers from "../../images/OurServers.svg";
import donate from "../../images/Donate.svg";

export default function TitleLine(props) {
  const [type, setType] = useState(updatesIcon);

  useEffect(() => {
    if (props.type === "update") {
      setType(updatesIcon);
    } else if (props.type === "servers") {
      setType(ourServers);
    } else {
      setType(donate);
    }
  }, [props.type]);

  return (
    <div className="title">
      <div
        className="title-icon"
        style={{
          backgroundImage: `url(${type})`,
        }}
      ></div>
      <div className="title-text">{props.children}</div>
      <div className="title-line"></div>
    </div>
  );
}
