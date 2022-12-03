import NewMeetupForm from '../components/meetups/NewMeetupForm';

// import useHistory from react router, useHistory adalah hook untuk mengambil history yg dilakukan
import { useHistory } from 'react-router-dom';

const NewMeetupPage = () => {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    // fetch data to firebase
    fetch(
      // API URL
      'https://react-getting-started-2561d-default-rtdb.firebaseio.com/meetups.json',
      // we can config for the method
      {
        // HTTP Method
        method: 'POST',
        // Content to push/put to database API
        body: JSON.stringify(meetupData),
        // Additional headers
        Headers: {
          'Content-Type': 'Application/json',
        },
      }
    ).then(() => {
      // Ketika selesai di proses, maka redirect user ke allmeetup
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
