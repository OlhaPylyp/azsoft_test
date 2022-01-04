import React from 'react';
// import styles from './App.css';
// import Header from './Header/Header';
import { Suspense } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
// import FieldsList from "./components/directionList/DirectionList";

import routes from './Routes';
function App() {
  return (
    <div>
      {/* <Header /> */}
      <Suspense fallback={<p>Is loading....</p>}>
        <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route key={path} exact={exact} path={path} component={component} />
          ))}
        </Switch>
      </Suspense>
      {/* <Footer name={fields} /> */}
      {/* //   <div className="App-header"> */}
      {/* <ContainerForHomepage> */}

      {/* <HomePage /> */}
      {/* </ContainerForHomepage> */}
    </div>
  );
}

export default App;
