import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import MovieContentNav from './MovieContentNav';
import MovieList from './MovieList';
import AlertModal from '../AlertModal/AlertModal';

function MovieContent() {
  const location = useLocation();
  const [movieList, setMovieList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [filter, setFilter] = useState(false);
  const [dateOrder, setDateOrder] = useState(false);
  const [alphabeticalOrder, setAlphabeticalOrder] = useState(false);
  const [search, setSearch] = useState('');
  const [alertModal, setAlertModal] = useState(false);
  // const isMountedRef = useRef(false);

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
    let obj = {
      limit: pageSize,
    };

    if (params.pathname) {
      obj = {
        ...obj,
        showing: getCategory(params.pathname),
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

    return obj;
  };

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
    // console.log(movieList);
    setMovieList([...movieList, ...response.data]);
  };

  const onLoadMore = () => {
    const currentList = [...movieList].splice(0, pageSize * pageNo);
    if (currentList.length < 20) return;
    const params = {
      pathname: location.pathname,
      page: pageNo + 1,
      search,
    };
    setPageNo(params.page);
    getLoader(params);
  };

  useEffect(() => {
    // if (!isMountedRef.current) {
    getLoader({
      page: 1,
      pathname: location.pathname,
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

  return (
    <>
      <AlertModal
        visible={alertModal}
        modalTitle='알림'
        text='로그인 후 이용가능한 서비스입니다.'
        confirmText='확인'
        onClose={() => {
          setAlertModal(false);
        }}
        onConfirm={() => {
          setAlertModal(false);
        }}
      />
      <MovieContentNav
        filter={filter}
        setFilter={setFilter}
        dateOrder={dateOrder}
        setDateOrder={setDateOrder}
        alphabeticalOrder={alphabeticalOrder}
        setAlphabeticalOrder={setAlphabeticalOrder}
        totalCount={movieList.length}
        search={search}
        setSearch={setSearch}
      />
      <MovieList
        movieList={movieList}
        search={search}
        setSearch={setSearch}
        alertModal={alertModal}
        setAlertModal={setAlertModal}
        onLoadMore={onLoadMore}
      />
    </>
  );
}

export default MovieContent;
