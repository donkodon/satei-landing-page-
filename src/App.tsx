import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DeliveryPurchase from './pages/DeliveryPurchase';
import VisitPurchase from './pages/VisitPurchase';
import CompanyInfo from './pages/CompanyInfo';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/delivery-purchase" element={<DeliveryPurchase />} />
                <Route path="/visit-purchase" element={<VisitPurchase />} />
                <Route path="/company" element={<CompanyInfo />} />
            </Routes>
        </Router>
    );
};

export default App;