import classes from './HighlightedNote.module.css';
import { NavLink } from 'react-router-dom';

const HighlightedNote = (props) => {
  const regBrackets = /(\[\[.*?]\])/g;
  return (
    <figure className={classes.quote}>
      <p>
        {
          props.text.split(regBrackets).map( (item, index) => {
            // console.log(item)
            if(item.slice(0,2) === '[['){ 
              const strippedString = item.substring(2, item.length-2)
              return <NavLink key={`thought${index}`} to={`/thoughts/${strippedString.replaceAll(' ','_')}`}>{strippedString}</NavLink>
            }else{
              return item
            }
          })
        }
      </p>
    </figure>
  );
};

export default HighlightedNote;
// a.split(/(\[\[.*?]\])/g)