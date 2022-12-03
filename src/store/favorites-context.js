// Import context, content adalah sama denga useState, tetapi jika useState hanya bisa digunakan di satu komponen,
// Context bisa digunakan di global/semua komponen yang akan diinginkan
// context berarti global variable sementara yang bisa diubah ubah
// kita gunakan useState juga untuk melakukan update context

import { createContext, useState } from 'react';

// buat context nya, kia bisa menggunakan type data apapun, disini gunakan object
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  itemIsFavorite: () => {},
});

// kita buat komponen untuk melakukan update data context, dan kita masukkan props untuk mengambil dan memberi data
// dan kita export agar komponen ini bisa dipakai komponen lain
export const FavoritesContextProvider = (props) => {
  // kita define dulu useState nya
  const [userFavorites, setUserFavorites] = useState([]);

  //   kita buat handle untuk menambah meetup ke favorites dan assign param
  const addFavoriteHandler = (favoriteMeetup) => {
    // lalu kita gunakan useState dan kita assign lagi param baru untuk mengambil state sebelumnya,
    // dan jalankan function untuk menambah favorite
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };

  //   Kita buat function untuk remove favorites
  const removeFavoriteHandler = (meetupId) => {
    // kita gunakan state lagi
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId); // false akan di remove
    });
  };

  // Kita buat satu function lagi untuk mengecek apakah meetup tersebut ada di favorites atau tidak
  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  //   Kita buat variable baru untuk nanti dilakukan update ke context kita di atas
  //   dan kita assign dataynya dari state di atas.
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    //   disini kita return contextnya itu sendiri
    // .Provider disini adalah hook otomatis dari reactjs
    <FavoritesContext.Provider value={context}>
      {/* kita gunakan props.children tujuannya supaya nanti komponen lain bisa menggunakan context ini */}
      {props.children}
    </FavoritesContext.Provider>
  );
};

// export context itu sendiri

export default FavoritesContext;
