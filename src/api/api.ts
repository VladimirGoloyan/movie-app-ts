import { FeaturedMovieType } from "../components/Content/types";
import data from "./data.json";

export const getFeaturedMovie = () => {
  // mimic api call here

  return new Promise<FeaturedMovieType>((resolve) => {
    setTimeout(() => {
      resolve(data.Featured);
    }, 300);
  });
};
