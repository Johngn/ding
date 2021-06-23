/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountriesPage from './components/CountriesPage';
import PhoneNumberPage from './components/PhoneNumberPage';
import OperatorsPage from './components/OperatorsPage';
import ProductsPage from './components/ProductsPage';
import NotFound from './components/404Page';
import Success from './components/Success';
import Confirm from './components/Confirm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

const App = () => {
  const dispatch = useDispatch();

  const { getData } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const getCountries = () => {
      getData();
    };

    getCountries();
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact component={CountriesPage} />
          <Route path="/phone-number" exact component={PhoneNumberPage} />
          <Route path="/operators" exact component={OperatorsPage} />
          <Route path="/products" exact component={ProductsPage} />
          <Route path="/success" exact component={Success} />
          <Route path="/confirm" exact component={Confirm} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
