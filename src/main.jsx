import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import TopNavbar from './components/TopNavbar.jsx';
import BottomNavbar from './components/BottomNavbar.jsx';
import LifestylePage from './components/Pages/LifestylePage.jsx';
import FeaturesPage from './components/Pages/FeaturesPage.jsx';
import PostLayoutPage from './components/Pages/PostLayoutPage.jsx';
import ContactPage from './components/Pages/ContactPage.jsx';
import JoinusPage from './components/Pages/JoinusPage.jsx';
import TryPage from './components/Pages/TryPage.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <BrowserRouter>
   <TopNavbar/>
   <BottomNavbar/>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Lifestyle" element={<LifestylePage/>} />
      <Route path="/Features" element={<FeaturesPage/>} />
      <Route path="/Post Layout" element={<PostLayoutPage/>} />
      <Route path="/Contact" element={<ContactPage/>} />
      <Route path="/Join-us" element={<JoinusPage/>} />
      <Route path="/try:id" element={<TryPage/>} />





    </Routes>
      
      <Footer/>
  </BrowserRouter>

  </StrictMode>,
)
