import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactsList = ({ contacts }) => {

  const dispatch = useDispatch();

  const onDeleteContact = contactID => {
    dispatch(deleteContact(contactID));
  };



  return (
    <>
      <ul className={css.item}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <span>
              {name} {number}
            </span>
            <button
              className={css.item__btn}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};