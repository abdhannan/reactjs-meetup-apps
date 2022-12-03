// Kita import usecontext dan context yang kita buat

import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
// Kita import juga list
import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = () => {
  // kita gunakan dulu dong context nya
  const favoriteCtx = useContext(FavoritesContext);

  // agar ketika tidak ada data ketika tidak ada item yang ditambahkan ke favorite, maka kita buat logic disini

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = (
      <p>
        You have no favorites yet, <a href='/'> Add some?</a>
      </p>
    );
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
      {/* kita gunakan meetulist dan passing data array kita dari context */}
    </section>
  );
};

export default FavoritesPage;
