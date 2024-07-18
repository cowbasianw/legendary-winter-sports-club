import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Programs from './components/Programs.jsx';
import Contact from './components/Contact.jsx';
import Announcement from './components/Announcement.jsx';
import backgroundImage from './assets/images/Background1.png'; // Adjust path as needed
import { LanguageProvider } from './context/LanguageContext.jsx';


function App() {
  return (

    <Router>
      <LanguageProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Announcement" element={<Announcement />} />
        </Routes>
        <Footer />
      </LanguageProvider>,
    </Router>

  );
}

export default App;