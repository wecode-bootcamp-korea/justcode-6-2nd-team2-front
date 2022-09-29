import React from 'react';
import MovieComment from './MovieComment';
import { useLocation } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import MovieTrailers from '../../../pages/MovieDetail/MovieTrailers';
import MoviePost from '../../../pages/MovieDetail/MoviePost';

function MovieDetailTabContent({ movieList }) {
  const location = useLocation();

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
      {location.pathname === '/moviedetail/1/movieinfo' ||
      location.pathname === '/moviedetail/1' ? (
        <MovieInfo movieList={movieList} />
      ) : null}
      {location.pathname === '/moviedetail/1/comment' ? (
        <MovieComment movieList={movieList} />
      ) : null}
      {location.pathname === '/moviedetail/1/moviepost' ? <MoviePost /> : null}
      {location.pathname === '/moviedetail/1/trailers' ? <MovieTrailers /> : null}
    </>
  );
}
export default MovieDetailTabContent;
