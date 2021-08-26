import { NavLink } from 'react-router-dom';
import classes from './NoNotesFound.module.css';

const NoNotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>Select a note from the list!</p>
      
      <NavLink to="/new-note" activeClassName={classes.active}>Add New Note</NavLink>
    </div>
  );
};

export default NoNotesFound;
