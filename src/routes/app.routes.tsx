import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import List from '../pages/List';
import Dashboard from '../pages/Dashboard';

const AppRoutes: React.FC = () => (
    <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/list:type" element={<List />} />
                </Routes>
            </Layout>
    </BrowserRouter>        
);

export default AppRoutes;