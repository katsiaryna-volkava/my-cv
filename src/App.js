import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import CV from './pages/CV';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header'; // Import the Header
import Footer from './components/Footer'; // Import the Footer
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                {/* Add Header */}
                <Header />

                {/* Main Content Area */}
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<AboutMe />} />
                        <Route path="/cv" element={<CV />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                {/* Add Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
