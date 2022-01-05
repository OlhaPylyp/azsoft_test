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
import ContactDetailPage from './Pages/ContactDetailsPage/ContactDetailPage';
import ContactDetailItem from './Components/ContctdetailsItem';
function App() {
  return (
    <div className={`${styles.Wrapper} ${styles.container}`}>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/ContactDetailPage/" element={<ContactDetailPage />} />
        <Route path="/ContactDetailPage/:id " element={<ContactDetailItem />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      {/* </Suspense>  */}
      {/* <Footer name={fields} /> */}
      {/* //   <div className="App-header"> */}
      {/* <ContainerForHomepage> */}
      {/* <HomePage /> */}
      {/* </ContainerForHomepage> */}
    </div>
  );
}

export default App;
