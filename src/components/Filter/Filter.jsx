import React from 'react';
import styles from '../Filter/filter.module.css';

import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filter/filter-slice';

export default function Filter() {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(changeFilter(e));
  };

  return (
    <div className={styles.Filter}>
      Find contacts by name
      <input
        className={styles.FilterInput}
        type="text"
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}
