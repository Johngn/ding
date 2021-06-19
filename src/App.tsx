import { BrowserRouter, Route } from 'react-router-dom';
import CountriesPage from './components/CountriesPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" component={CountriesPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
