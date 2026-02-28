import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DemoPopup from './components/DemoPopup';
import Home from './pages/Home';
import VisionMission from './pages/VisionMission';
import AboutCollege from './pages/AboutCollege';
import AboutUniversity from './pages/AboutUniversity';
import VCMessageFull from './pages/VCMessageFull';
import Affiliations from './pages/Affiliations';
import Bodies from './pages/Bodies';
import Alumni from './pages/Alumni';
import QEC from './pages/QEC';
import StudentCorner from './pages/StudentCorner';
import ResearchHub from './pages/ResearchHub';
import Complaint from './pages/Complaint';
import Scholarships from './pages/Scholarships';
import Departments from './pages/Departments';
import About from './pages/About';
import DepartmentDetail from './pages/DepartmentDetail';
import NewsDetail from './pages/NewsDetail';
import EventDetail from './pages/EventDetail';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <DemoPopup />
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/vision-mission" element={<VisionMission />} />
            <Route path="/about/college" element={<AboutCollege />} />
            <Route path="/about/university" element={<AboutUniversity />} />
            <Route path="/about/vc-message" element={<VCMessageFull />} />
            <Route path="/about/affiliations" element={<Affiliations />} />
            <Route path="/about/bodies" element={<Bodies />} />
            <Route path="/about/alumni" element={<Alumni />} />
            <Route path="/qec" element={<QEC />} />
            <Route path="/student-corner" element={<StudentCorner />} />
            <Route path="/research" element={<ResearchHub />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments/:id" element={<DepartmentDetail />} />
            <Route path="/news/:title" element={<NewsDetail />} />
            <Route path="/events/:title" element={<EventDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
