import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import backArrowIcon from "../../assets/back_arrow_icon.png";
import "./Player.css";

function Player() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [aipData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmYwMzM4Y2MxZTVjMjUzOGViNTRkYjVkNWI2OGM4MCIsIm5iZiI6MTczMDQ4ODIwNC43MDU1ODI2LCJzdWIiOiI2NmQ0NDkxYTVmNTk0NWUwNjg0NTkzOGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pDsBLnKTCqlNuGtNPpItXXtvaONyKGtgn3SdFzj9RX0",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);
  
  return (
    <div className="player">
      <img src={backArrowIcon} alt="" onClick={() => {navigate(-2)}}/>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${aipData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="playerInfo">
        <p>{aipData.published_at.slice(0,10)}</p>
        <p>{aipData.name}</p>
        <p>{aipData.type}</p>
      </div>
    </div>
  );
}

export default Player;
