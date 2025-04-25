import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';
import { useScrollToTop } from './hooks/useScrollToTop';
import logo from './assets/RM Logo.png'; 

const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useScrollToTop();
  return <>{children}</>;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop>
        <Helmet>
  <title>Rise Mars - Digital Marketing Agency</title>
  <link rel="icon" href={logo} type="image/png" />
  <meta name="description" content="Rise Mars - Fuelling Digital Growth Beyond Limits" />
</Helmet>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    </HelmetProvider>
  );
}

export default App;