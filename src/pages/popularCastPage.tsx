import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getPopularCast} from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { BaseMovieProps } from "../types/interfaces";

const PopularCastPage: React.FC = () => {
  const { data: movies, error, isLoading, isError } = useQuery<BaseMovieProps[], Error>("popular", getPopularCast);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <PageTemplate
      title="Most Popular Cast"
      movies={movies || []}
      action={(movie) => {
        return <AddToFavouritesIcon {...movie} />
      }}
    />
  );
};

export default PopularCastPage;