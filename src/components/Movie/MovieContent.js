import { useState } from 'react';
import AlertModal from '../AlertModal/AlertModal';
import MovieContentNav from './MovieContentNav';
import MovieList from './MovieList';

function MovieContent() {
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [movieList] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  const [alertModal, setAlertModal] = useState(false);

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
          console.log(1);
        }}
      />

      <MovieContentNav
        filter={filter}
        setFilter={setFilter}
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
      />
    </>
  );
}

export default MovieContent;
