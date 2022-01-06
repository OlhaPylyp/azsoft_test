import { lazy, React } from 'react';

const ContactsPage = lazy(() =>
  import(
    './Pages/ContactPage/ContactsPage' /* webpackChunkName: "Contactlist" */
  ),
);
const ContactDetailPage = lazy(() =>
  import('./Pages/ContactDetailsPage' /* webpackChunkName: "ContactDetails" */),
);

const routes = [
  {
    path: '/',
    label: 'ContactsPage',
    element: ContactsPage,
    isProtected: false,
  },
  {
    path: '/ContactDetailPage',
    label: ContactDetailPage,
    element: ContactDetailPage,
    isProtected: true,
    // exact: true,
  },
  {
    path: '/ContactDetailPage/:id',
    label: 'Contact Details',
    element: ContactDetailPage,
    isProtected: true,
  },
];

export default routes;
