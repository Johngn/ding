import { BrowserRouter, Route } from 'react-router-dom';
import CountriesPage from './components/CountriesPage';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={CountriesPage} />
    </BrowserRouter>
  );
};

export default App;
