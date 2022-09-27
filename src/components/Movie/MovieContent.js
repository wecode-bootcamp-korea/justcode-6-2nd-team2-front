import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';

import MovieContentBar from './MovieContentBar';
import MovieList from './MovieList';

function MovieContent() {
  const location = useLocation();
  const [movieList, setMovieList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [sort, setSort] = useState(null); // null, title, date
  const [search, setSearch] = useState('');

  const getCategory = pathname => {
    switch (pathname) {
      case '/movie/now': {
        return {
          category: 'now',
        };
      }
      case '/movie/upcoming': {
        return {
          category: 'upcoming',
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
      default: {
        return {};
      }
    }
  };

  const pageSize = 20;

  const getQuery = params => {
    let obj = {};

    if (params.pathname) {
      obj = {
        ...obj,
        showing: getCategory(params.pathname).category,
      };
    }

    if (params.sort) {
      obj = {
        ...obj,
        sort: params.sort,
      };
    }

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

    return obj;
  };

  const getLoader = async params => {
    // mock data
    // let url = 'https://60c1a3544f7e880017dbff1f.mockapi.io/posts';
    // STARBOX API
    let url = 'http://localhost:10010/movie/list';
    if (params) {
      url += qs.stringify(getQuery(params), {
        addQueryPrefix: true,
      });
    }
    //영화 리스트 GET
    const response = await axios.get(url);
    //mock data
    // setMovieList(response.data);
    // STARBOX DATA
    setMovieList(response.data.data);
  };

  const onLoadMore = () => {
    const startPageNo = (pageNo - 1) * pageSize;
    const endPageNo = startPageNo + pageSize;
    const currentList = [...movieList].splice(startPageNo, endPageNo);
    if (currentList.length < 20) return;
    const params = {
      pathname: location.pathname,
      page: pageNo + 1,
      search,
      sort,
    };
    setPageNo(params.page);
    getLoader(params);
  };

  const likeLoader = () => {
    const params = {
      pathname: location.pathname,
      page: pageNo,
      search,
      sort,
    };
    getLoader(params);
  };

  useEffect(() => {
    getLoader({
      page: 1,
      pathname: location.pathname,
    });
  }, [location.pathname]);

  const onSearch = value => {
    getLoader({
      page: 1,
      pathname: location.pathname,
      sort,
      ...(value && {
        search: value,
      }),
    });
    setSearch(value);
  };

  return (
    <>
      <MovieContentBar
        sort={sort}
        setSort={value => {
          setSort(value);
          setPageNo(1);
          getLoader({
            page: 1,
            pathname: location.pathname,
            sort: value,
            search,
          });
        }}
        totalCount={movieList.length}
        search={search}
        onSearch={onSearch}
      />
      <MovieList
        movieList={movieList}
        setSearch={setSearch}
        likeLoader={likeLoader}
        onLoadMore={onLoadMore}
      />
    </>
  );
}

export default MovieContent;
