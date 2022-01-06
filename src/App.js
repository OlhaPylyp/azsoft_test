import React from 'react';
import styles from './App.module.scss';
// import { useAlert } from 'react-alert';
// import { useState, useEffect } from 'react';
// import ContactsList from './Components/ContactList/ContactList';
import ContactPage from './Pages/ContactPage/ContactsPage';
import { Route, NavLink, Routes } from 'react-router-dom';
// import Section from './Components/Section/Section';

// import { Suspense } from 'react';

// import FieldsList from "./components/directionList/DirectionList";
import routes from './Routes';

// const ContactsList = lazy(() =>
//   import(
//     './Pages/ContactList/ContactList' /* webpackChunkName: "Contactlist" */
//   ),
// );
import ContactDetailPage from './Pages/ContactDetailsPage';
import ContactDetailItem from './Components/ContactDetailsItem';
import ContactItem from './Components/ContactItem/ContactItem';
function App() {
  return (
    <div className={`${styles.Wrapper} ${styles.container}`}>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/ContactDetailPage" element={<ContactDetailPage />} />

        <Route
          path="/ContactDetailPage/:contactId"
          element={<ContactDetailItem />}
        />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
