import React, { useRef, useEffect, useState } from "react";
import "./TitleCards.css";
import cardsData from "../../assets/cards/Cards_data.js";
import { Link } from "react-router-dom";

function TitleCards({ title, category }) {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmYwMzM4Y2MxZTVjMjUzOGViNTRkYjVkNWI2OGM4MCIsIm5iZiI6MTczMDQ4ODIwNC43MDU1ODI2LCJzdWIiOiI2NmQ0NDkxYTVmNTk0NWUwNjg0NTkzOGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pDsBLnKTCqlNuGtNPpItXXtvaONyKGtgn3SdFzj9RX0'
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="titleCards">
      <h2> {title ? title : "Popular on Netflix"}</h2>
      <div className="cardList" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
              alt=""
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TitleCards;
