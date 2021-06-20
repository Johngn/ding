import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountriesPage from './components/CountriesPage';
import PhoneNumberPage from './components/PhoneNumberPage';
import OperatorsPage from './components/OperatorsPage';
import ProductsPage from './components/ProductsPage';
import Error from './components/404Page';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact component={CountriesPage} />
          <Route path="/phone-number" exact component={PhoneNumberPage} />
          <Route path="/operators" exact component={OperatorsPage} />
          <Route path="/products" exact component={ProductsPage} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
