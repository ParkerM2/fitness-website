import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';
import ROUTES from './routes';
import { LandingPage, Login } from '../pages/index';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/more" element={<h1>hi</h1>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
