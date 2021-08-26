import classes from './NoteItem.module.css';
// import { Link } from 'react-router-dom';

const NoteItem = (props) => {
  const quoteHandler = () =>{
    props.quoteHandler(props.id)
  }

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        
      </figure>
      <button className='btn' onClick={quoteHandler}>
        View Note
      </button>
    </li>
  );
};

export default NoteItem;
