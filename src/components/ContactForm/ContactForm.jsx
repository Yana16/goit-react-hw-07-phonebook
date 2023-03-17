import React, { useState } from 'react';
import styles from '../ContactForm/contact-form.module.css';

import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { fetchAddContact } from '../../redux/operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    dispatch(fetchAddContact(contact));
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={styles.TaskEditor} onSubmit={handleSubmit}>
      <label className={styles.TaskEditor_label}>
        Name
        <input
          className={styles.TaskEditor_input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className={styles.TaskEditor_label}>
        Number
        <input
          className={styles.TaskEditor_input}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>

      <button className={styles.TaskEditor_button} type="submit">
        Add contact
      </button>
    </form>
  );
}
