import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useState, useEffect } from 'react';
// import ContactsList from './Pages/ContactList/ContactsPage';
import ContactList from '../../Components/ContactList/ContactList';

function ContactPage() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const storageContacts = localStorage.getItem('contacts');
    setContacts(JSON.parse(storageContacts));
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });
  const filterChange = ({ target }) => {
    setFilter(target.value);
  };
  const normalizedFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(contact => {
    contact.name.toLowerCase().includes(normalizedFilter);
  });
  // const handleAddContact = newContact => {
  //   const sameName = contacts.some(item => item.name === newContact.name);
  //   console.log('sameName', sameName);
  //   if (sameName) {
  //     alert.show(`Contact is already in contscts.`);
  //     return;
  //   }
  //   setContacts(prevState => [...prevState, newContact]);
  // };
  const handleDelete = id => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts([...newContactList]);
  };

  return (
    <div>
      <span>Find:</span>
      <input
        type="text"
        value={filter}
        name="filter"
        onChange={filterContacts}
      />
      {/* <Header /> */}
      {/* <Section title="Contacts list"> */}
      <ContactList contacts={filterContacts} onClick={handleDelete} />{' '}
      {/* </Section> */}
      {/* <Suspense fallback={<p>Is loading....</p>}>
        <Routes>
          <Route path="/" element={<ContactsList />} />
          <Route path="/ContactDetails/" element={<ContactDetails />}></Route>
          {/* {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={<element />} />
      //     ))} */}
      {/* //   </Routes> */}
      {/* </Suspense>  */}
      {/* <Footer name={fields} /> */}
      {/* //   <div className="App-header"> */}
      {/* <ContainerForHomepage> */}
      {/* <HomePage /> */}
      {/* </ContainerForHomepage> */}
    </div>
  );
}

export default ContactPage;
