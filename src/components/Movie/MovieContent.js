import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import MovieContentNav from './MovieContentNav';
import MovieList from './MovieList';

const getCategory = pathname => {
  switch (pathname) {
    case '/movie/special': {
      return {
        category: 'special',
      };
    }
    case '/movie/domestic': {
      return {
        category: 'domestic',
      };
    }
    case '/movie/abroad': {
      return {
        category: 'abroad',
      };
    }
    case '/movie/film': {
      return {
        category: 'film',
      };
    }
    default: {
      return {};
    }
  }
};

const pageSize = 20;

const getQuery = params => {
  let obj = {
    limit: pageSize,
  };

  if (params.showing) {
    obj = {
      ...obj,
      showing: 'upcoming',
    };
  }

  // if (params.sort) {
  //   obj = {
  //     ...obj,
  //     [params.sort.name]: params.sort.value,
  //   };
  // }

  if (params.search) {
    obj = {
      ...obj,
      search: params.search,
    };
  }

  if (params.page) {
    obj = {
      ...obj,
      page: params.page,
    };
  }

  if (params.pathname) {
    obj = {
      ...obj,
      category: getCategory(params.pathname),
    };
  }

  return obj;
};

function MovieContent() {
  const location = useLocation();

  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [pageNo, setPageNo] = useState(1);
  const [movieList, setMovieList] = useState([]);
  // const isMountedRef = useRef(false);

  const getLoader = async params => {
    // let url = 'http://localhost:10010/movie/list';
    let url = 'https://60c1a3544f7e880017dbff1f.mockapi.io/posts';
    if (params) {
      url += qs.stringify(getQuery(params), {
        addQueryPrefix: true,
      });
    }
    //영화 리스트 GET
    const response = await axios.get(url);
    setMovieList([...movieList, ...response.data]);
  };

  const onLoadMore = () => {
    const currentList = [...movieList].splice(0, pageSize * pageNo);
    if (currentList.length < 20) return;
    const params = {
      pathname: location.pathname,
      page: pageNo + 1,
      search,
      showing: filter,
    };
    setPageNo(params.page);
    getLoader(params);
  };

  useEffect(() => {
    // if (!isMountedRef.current) {
    getLoader({
      page: 1,
    }).then(() => {
      // isMountedRef.current = true;
    });

    // return () => {
    //   isMountedRef.current = false;
    // };
  }, []);

  // useEffect(() => {
  //   return () => {
  //     setPageNo(1);
  //     setSearch('');
  //     setFilter(false);
  //     setMovieList([]);
  //     // isMountedRef.current = false;
  //   };
  // }, [location.pathname]);

  // ('https://60c1a3544f7e880017dbff1f.mockapi.io/posts?page=1&limit=20');
  // console.log(movieList.map(i => i.id));

  return (
    <>
      <MovieContentNav
        filter={filter}
        setFilter={setFilter}
        totalCount={movieList.length}
        search={search}
        setSearch={setSearch}
      />
      <MovieList
        movieList={movieList}
        onLoadMore={onLoadMore}
        search={search}
        setSearch={setSearch}
      />
    </>
  );
}

export default MovieContent;
