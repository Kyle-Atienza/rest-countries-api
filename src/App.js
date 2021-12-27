import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Where in the World?</h1>
          </div>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:countryPath" element={<CountryDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
