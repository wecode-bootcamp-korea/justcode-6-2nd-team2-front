import React from 'react';
import { useParams } from 'react-router-dom';

import MovieComment from './MovieComment';
import { useLocation } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import MovieTrailers from '../../../pages/MovieDetail/MovieTrailers';
import MoviePost from '../../../pages/MovieDetail/MoviePost';

function MovieDetailTabContent({ movieList }) {
  const location = useLocation();
  const movieId = useParams();

  //   const [movieList, setMovieList] = useState([]);
  //   const movieGetLoader = () => {
  //     fetch(`http://localhost:10010/movie/detail/1`)
  //       .then(res => res.json())
  //       .then(res => console.log(res.data));
  //   };
  //   useEffect(() => {
  //     movieGetLoader();
  //     // console.log(setMovieList.data);
  //   }, []);
  // console.log(location.pathname);
  return (
    <>
      {location.pathname === `/moviedetail/${movieId.id}/movieinfo` ||
      location.pathname === `/moviedetail/${movieId.id}` ? (
        <MovieInfo movieList={movieList} />
      ) : null}
      {location.pathname === `/moviedetail/${movieId.id}/comment` ? (
        <MovieComment movieList={movieList} />
      ) : null}
      {location.pathname === `/moviedetail/${movieId.id}/moviepost` ? <MoviePost /> : null}
      {location.pathname === `/moviedetail/${movieId.id}/trailers` ? <MovieTrailers /> : null}
    </>
  );
}
export default MovieDetailTabContent;
