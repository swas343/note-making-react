import { useRef } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NoteForm.module.css';

const NoteForm = (props) => {
  const titleInputRef = useRef();
  const textInputRef = useRef();
  const tagsInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const enteredTags = tagsInputRef.current.value;
    // optional: Could validate here

    props.onAddQuote({ title: enteredTitle, content: enteredText, tags: enteredTags });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Note</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Tags (comma separated)</label>
          <textarea id='text' rows='1' ref={tagsInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Note</button>
        </div>
      </form>
    </Card>
  );
};

export default NoteForm;
