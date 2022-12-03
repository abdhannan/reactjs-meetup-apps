import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

// kita gunakan useContext dan import context yang kita buat
import { useContext } from 'react';

// import context kita
import FavoritesContext from '../../store/favorites-context';

const MeetupItem = (props) => {
  // sekarang kita gunakan function di dalam context dengan mengakses context itu sendiri.
  const favoritesCtx = useContext(FavoritesContext);

  // pertama kita cek dulu apakah meetup item sudah berada di dalam context dengan menggunakan method di contect
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  // kita buat function untuk mengubah/toggle button add favorite
  const toggleFavoriteStatusHandler = () => {
    // kita cek apakah item berada di favorite
    if (itemIsFavorite) {
      // jika item berada di favorite, maka jalankan function context remove
      favoritesCtx.removeFavorite(props.id);
    } else {
      // jika tidak ada di di favorite, maka tambahkan ke favorite dengan menjalankan context method di context kita
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from favorite' : 'Add to favorite'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
