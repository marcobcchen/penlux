import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import IntlContextProvider from '@/contexts/IntlContext';
import routes from './router';
import Wrapper from './components/Ｗrapper';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const name = '';
  // const lo = useLocation();
  // console.log(lo);

  return (
    <IntlContextProvider>
      <Wrapper>
        <Router>
          <Switch>
            {routes.map((route) => (
              <Route
                exact={route.exact}
                key={route.path}
                path={route.path}
                component={route.component}
                routes={route.routes}
              />
            ))}
          </Switch>
        </Router>
      </Wrapper>
      <Footer />
      <Header />
    </IntlContextProvider>
  );
};

export default App;
