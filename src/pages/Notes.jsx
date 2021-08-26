import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import NoteList from '../components/notes/NoteList';
import Note from './Note';

const Notes = () =>{
	const params = useParams();
	const history = useHistory();
	
	const [noteId, setNoteId] = useState(params.noteId);
	const notes = useSelector(state => state.notes);
	
	const setQuote = (noteId) =>{
		history.push('/notes/'+noteId)
		setNoteId(noteId)
	}


	return (
		<Fragment>
			<div className="all-quotes">
				<NoteList notes={notes} quoteHandler={setQuote}/>
			</div>

			<div className="quote-content">
				<Note noteId={noteId}/>		
			</div>
		</Fragment>
	)
}

export default Notes;