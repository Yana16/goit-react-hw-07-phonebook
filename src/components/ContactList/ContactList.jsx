import React from 'react';
import styles from '../ContactList/contact-list.module.css';
import { useDispatch } from 'react-redux';
import { fetchDeleteContact } from '../../redux/contacts/contact-operations';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const onRemoveContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <ul className={styles.TaskList}>
      {contacts.map(contact => (
        <li className={styles.TaskList_item} key={contact.id}>
          {contact.name + ':' + contact.number}

          {
            <button
              className={styles.TaskList_button}
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
