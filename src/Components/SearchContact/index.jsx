import styles from './SearchContact.module.scss';
import React from 'react';
import Icon from '../Icon';

const SearchContact = ({ filter, onClick, onChange }) => {
  return (
    <>
      <header className={styles.search_bar}>
        <form className={styles.searchForm}>
          <input
            className={styles.searchForm_input}
            type="text"
            value={filter}
            name="filter"
            onChange={onChange}
            autoComplete="off"
            placeholder="Search contact by surname..."
          />
          <Icon
            name="search"
            color="darkgray"
            size="20"
            className={styles.item_icon}
            // onClick={onClick}
          />
        </form>
      </header>
    </>
  );
};

export default SearchContact;
