// usestate and useEffect
import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const AllMeetupsPage = () => {
  // usestate untuk data apakah sudah di dapat atau belum dari API
  // loading selalu true
  const [isLoading, setIsLoading] = useState(true);

  // kita gunakan useState lagi untuk datanya, dan assign ke useState sebagai array data (empty)
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect adalah hook react untuk menentukan kapan sebuah code akan dieksekusi
  // useEffect memiliki 2 parameter, pertama function, kedua adalah array data yg menentukan kapan akan dieksekusi
  useEffect(() => {
    /**
     * Set loading ke true, karna useEfect akan mendeteksi jika ada perubahan
     * maka ketika nanti loading sudah false yg artinya data sudah ada
     * maka ini tidak akan dieksekusi lagi
     */
    setIsLoading(true);

    // function to get data from API
    fetch(
      'https://react-getting-started-2561d-default-rtdb.firebaseio.com/meetups.json'
      // what happen when data fetched?
    )
      .then((response) => {
        // we return as a json
        return response.json();
        // what happen when data get
      })
      .then((data) => {
        // karna database kita tidak berbentuk array, tapi object dan nested dengan uniq key id dan memiliki key
        // maka kita extract dulu
        const meetups = [];

        // kita loop untuk mengambil key nya
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          // lalu kita push datanya
          meetups.push(meetup);
        }

        // ubah loading ke false, artinya data sudah ada
        setIsLoading(false);
        // dan ubah loadedMeetups ke data da assign ke meetupList komponen
        setLoadedMeetups(meetups);
      });
  }, []);

  // kita lakukan pengecekan dulu, apakah data sudah ada atau belum, jika masih loading
  if (isLoading) {
    return (
      <section>
        <p>Loading.....</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetup</h1>
      <div>
        <MeetupList meetups={loadedMeetups} />
      </div>
    </section>
  );
};

export default AllMeetupsPage;
