import PropTypes from 'prop-types';
import css from './ContactItem.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  position: 'center-top',
  });

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success(`Contact ${name} successfully deleted`)
  };
  
    return (
      <li className={css.list}>
        {name}: {number}
        <button onClick={handleDeleteContact} className={css.btn}>Delete</button>
      </li>
    );
  };
  
  ContactItem.propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  };
export default ContactItem;
