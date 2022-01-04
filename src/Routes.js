import { lazy, React } from 'react';

const ContactsList = lazy(() =>
  import(
    './Pages/ContactPage/ContactsPage' /* webpackChunkName: "Contactlist" */
  ),
);
const ContactDetails = lazy(() =>
  import(
    './Pages/ContactDetails/ContactDetail' /* webpackChunkName: "ContactDetails" */
  ),
);

const routes = [
  {
    path: '/',
    label: 'ContactsList',
    element: ContactsList,
    isProtected: false,
  },
  {
    path: '/ContactDetails/',
    label: ContactDetails,
    element: ContactDetails,
    isProtected: true,
    // exact: true,
  },
];
export default routes;
