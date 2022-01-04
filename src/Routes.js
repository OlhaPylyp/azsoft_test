import { React, lazy } from 'react';

const ContactsList = lazy(() =>
  import('./Pages/Contactlist' /* webpackChunkName: "Contactlist" */),
);
const ContactDetails = lazy(() =>
  import('./Pages/ContactDetails' /* webpackChunkName: "ContactDetails" */),
);

const routes = [
  {
    path: '/',
    label: 'ContactsList',
    component: ContactsList,
    exact: true,
    isProtected: false,
  },
  {
    path: '/ContactDetails/',
    label: 'ContactDetails',
    component: ContactDetails,
    isProtected: true,
    // exact: true,
  },
];
export default routes;
