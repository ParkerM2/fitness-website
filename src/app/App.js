import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';
import ROUTES from './routes';
import { LandingPage } from '../pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
  
      </Routes>
    </Router>
  );
}

export default App;
