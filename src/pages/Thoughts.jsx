import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Fuse from 'fuse.js';

const Thoughts = () =>{
	const params = useParams();
    const notes = useSelector(state => state.notes.notes);
    
    const searchQuery = params.thought.replace('_',' ');
    const fuseTag = new Fuse(notes, { keys: ['tags' ] });
    const fuseTitle = new Fuse(notes, { keys: ['title' ] });
    const fuseContent = new Fuse(notes, { keys: ['content' ] });
    
    
    const Tagresults = fuseTag.search(searchQuery).map(character => character.item);
    const Titleresults = fuseTitle.search(searchQuery).map(character => character.item);
    const Contentresults = fuseContent.search(searchQuery).map(character => character.item);

	return (
		<section>
			<h1>By Tags:</h1>
                <ul>
                    {Tagresults.map( item => {return <li key={Math.random()}><NavLink to={`/notes/${item.id}`}>{item.title}</NavLink></li>})}
                </ul>
            <h1>By Title:</h1>
                <ul>
                    {Titleresults.map( item => {return <li key={Math.random()}><NavLink to={`/notes/${item.id}`}>{item.title}</NavLink></li>})}
                </ul>
            <h1>By Content:</h1>
                <ul>
                    {Contentresults.map( item => {return <li key={Math.random()}><NavLink to={`/notes/${item.id}`}>{item.title}</NavLink></li>})}
                </ul>
		</section>
	)
}

export default Thoughts;
