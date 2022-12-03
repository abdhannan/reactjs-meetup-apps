import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
// useRef is a hook to get input form
import { useRef } from 'react';

const NewMeetupForm = (props) => {
  // define and useRef for all input
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  // function for submit handler when submit button clicked
  function submitHandler(event) {
    // ignore default action when loaded
    event.preventDefault();

    // Get value of input when submitted

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    // store data to an object
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    // show in console, in reality, submit to server using API
    // console.log(meetupData);

    // Send data to NewMeetup Komponen as props function
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' id='title' required ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' id='image' required ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' id='address' required ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
