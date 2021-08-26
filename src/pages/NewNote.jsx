import NoteForm from '../components/notes/NoteForm';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { noteActions } from '../store/notes';

const NewNote = () =>{
 	const history = useHistory();
	const dispatch = useDispatch();
	// const notes = useSelector(state => state.notes)
	
	const addQuoteHandler = quoteData => {
		
		dispatch(noteActions.addNote({
			id:Math.random(),
			title:quoteData.title,
			content:quoteData.content,
			tags:quoteData.tags
		}))

		history.push('./notes')
	}

	return (
		<NoteForm onAddQuote={addQuoteHandler} />
	)
}

export default NewNote;