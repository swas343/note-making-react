// import { Route, Link } from 'react-router-dom';
// import Comments from '../components/comments/Comments';
import NoNotesFound from '../components/notes/NoNotesFound';
import HighlightedNote from '../components/notes/HighlightedNote';
import { useSelector } from 'react-redux';

const Note = (props) =>{
	const note = useSelector(state => state.notes.notes).filter(note => note.id == props.noteId);
	
	if(note.length < 1){
		return <NoNotesFound />
		// return <HighlightedQuote text="Select a note" author="..." />
	}

	return (
		<section>
			<HighlightedNote text={note[0].content} />
		</section>
	)
}

export default Note;