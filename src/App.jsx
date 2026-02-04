import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { GraduationCap } from 'lucide-react';

// Lazy load pages for better initial load performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Academics = lazy(() => import('./pages/Academics'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Admissions = lazy(() => import('./pages/Admissions'));

// Simple loading spinner component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-50">
    <div className="flex flex-col items-center gap-4">
      <GraduationCap className="w-12 h-12 text-primary" />
      <p className="text-slate-500 font-medium">Loading School Portal...</p>
    </div>
  </div>
);


function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="academics" element={<Academics />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="admissions" element={<Admissions />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
