import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DeliveryPurchase from './pages/DeliveryPurchase';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/delivery-purchase" element={<DeliveryPurchase />} />
            </Routes>
        </Router>
    );
};

export default App;