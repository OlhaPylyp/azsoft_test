import { React, lazy } from 'react';
// import styles from './App.css';
import { useAlert } from 'react-alert';
import { useState, useEffect } from 'react';
// import ContactsList from './Pages/ContactList/ContactsPage';
import ContactPage from './Pages/ContactPage';
import Section from './Components/Section/Section';

// import { Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import FieldsList from "./components/directionList/DirectionList";
// import routes from './Routes';

// const ContactsList = lazy(() =>
//   import(
//     './Pages/ContactList/ContactList' /* webpackChunkName: "Contactlist" */
//   ),
// );
// const ContactDetails = lazy(() =>
//   import(
//     './Pages/ContactDetails/ContactDetail' /* webpackChunkName: "ContactDetails" */
//   ),
// );
function App() {
  return (
    <div>
      {/* <Header /> */}
      <Section title="Contacts list">
        <ContactPage />
      </Section>

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

export default App;
