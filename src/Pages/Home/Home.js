import React from "react";
import Donate from "../../Components/Donate/Donate";
import MainText from "../../Components/MainText/MainText";
import OurServers from "../../Components/OurServers/OurServers";
import Posts from "../../Components/Posts/Posts";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <MainText />
      <Posts />
      <OurServers />
      <Donate />
    </div>
  );
}
