import React, { useEffect, useState } from "react";
import "./Content.css";
import { MOVIE_HEADING } from "./utils";
import { getFeaturedMovie } from "../../api/api";
import { FeaturedMovieType } from "./types";

const movieTitle = require("../../assets/featured/FeaturedTitleImage.png");

const Content = () => {
  const [featuredMovie, setFeaturedMovie] = useState<FeaturedMovieType | null>(
    null
  );

  useEffect(() => {
    getFeaturedMovie()
      .then((data) => {
        setFeaturedMovie(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="content">
      <div className="featured">
        <span className="featured-title">{MOVIE_HEADING}</span>
        <img src={movieTitle} alt="title" />
      </div>
      <div className="trending"></div>
    </div>
  );
};

export default Content;
