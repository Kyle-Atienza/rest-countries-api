import './styles/styles.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header shadow-sm">
          <div className="container">
            <div className="row">
              <div className="col">
                <Link
                  to={"/"}>
                  <h1 className='my-4'>Where in the World?</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:countryPath" element={<CountryDetails />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
