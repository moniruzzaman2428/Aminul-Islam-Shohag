// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import Layout from '../Layout/Layout';


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio />} />
        </Route>
      </Routes>
    </Router>
  );
}