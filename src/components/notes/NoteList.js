import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useRef,useState } from 'react';
import Fuse from 'fuse.js';

import NoteItem from './NoteItem';
import classes from './NoteList.module.css';

const NoteList = (props) => {
  const searchRef = useRef();
  const [notesResult, setNotesResult] = useState(props.notes.notes);

  // ### FUSE SEARCH ###
  const fuse = new Fuse(props.notes.notes, {
    keys: [
      'tags',
      'title'
    ]
  });

  const searchHandler = () =>{
    let characterResults;
    if(searchRef.current.value !== ''){
      const results = fuse.search(searchRef.current.value);
      characterResults = results.map(character => character.item);
    }else{
      characterResults = props.notes.notes
    }
    

    // notesResult = characterResults;
    setNotesResult(state => {return characterResults});
  }
  
  // ###

  const history = useHistory();

  const quoteHandler = (quoteId) =>{
    props.quoteHandler(quoteId)
  }
  
  const backToNotes = () =>{
    history.push('./notes')
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <input className={classes.searchInput} placeholder="Search Here..." ref={searchRef} onChange={searchHandler} />
      </div>
      <ul className={classes.list}>
        {notesResult.length > 0 && notesResult.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            text={note.title}
            quoteHandler={quoteHandler}
          />
        ))}

        {notesResult.length < 1 && <NoteItem
          key="null"
          id="null"
          author="-"
          text="No notes found"
          quoteHandler={backToNotes}
        />}
      </ul>
    </Fragment>
  );
};

export default NoteList;
