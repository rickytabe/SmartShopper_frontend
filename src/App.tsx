import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro  from './Pages/Intro';
import ProductDetail from './Pages/ProductDetailedPage';
import RegisterVendor from './Pages/RegisterVendor';
import BuyerRegistrationForm from './Pages/RegisterBuyer';
import SelectionPage from './Pages/SelectionPage';
import LoginBuyer from './Pages/LoginBuyer';
import HomePage from './Pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/registerVendor" element={<RegisterVendor/>} />
        <Route path="/" element={<Intro />} />
        <Route path="/ProductDetails" element={<ProductDetail />} />
        <Route path="/registerBuyer" element={<BuyerRegistrationForm />} />
        <Route path="/select-role" element={<SelectionPage />} />
        <Route path="/login" element={<LoginBuyer />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
