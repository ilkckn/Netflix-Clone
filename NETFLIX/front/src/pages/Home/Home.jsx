import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import heroBanner from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import playIcon from "../../assets/play_icon.png";
import infoIcon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={heroBanner} alt="" className="bannerImage" />
        <div className="heroCaption">
          <img src={heroTitle} alt="" className="captionImg" />
          <p>
            discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks o a quest to save the city from an
            immortal enemy.
          </p>
          <div className="heroButtons">
            <button className="btn">
              <img src={playIcon} alt="" />
              Play
            </button>
            <button className="btn darkBtn">
              <img src={infoIcon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="moreCards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
