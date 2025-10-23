import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Events from './components/Events/Events'
import Title from './components/Title/Title'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Gallery from './pages/Gallery/Gallery'
import GalleryOverview from './pages/Gallery/GalleryOverview'
import Blog from './pages/Blog/Blog'
import Team from './pages/Team/Team'
import './index.css'
import Footer from './components/Footer/Footer'
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <Title subtitle='Next Events' title='Check out our upcoming events!'/>
        <Events/>
      </div>
    </div>
  )
}

const About_us = () => {
  return (
    <div className='container'>
      <About />
    </div>
  )
}

const Gallery_Overview_Page = () => {
  return (
    <div className='gallery-overview-container'>
      <GalleryOverview />
    </div>
  )
}

const Gallery_Page = () => {
  return (
    <Gallery />
  )
}

const Contact_us = () => {
  return (
    <div className='contact-container '>
      <Title subtitle='Contact Us' title='Get in Touch'/>
      <Contact />
    </div>
  )
}


const Blog_Page = () => {
  return (
    <div className='blog-page-container'>
      <Blog />
    </div>
  )
}

const Team_Page = () => {
  return (
    <div className='team-page-container'>
      <Team />
    </div>
  )
}



const App = () => {

  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <About_us />
            <Footer />
          </>
        } />
        <Route path="/team" element={
          <>
            <Navbar />
            <Team_Page />
            <Footer />
          </>
        } />
        <Route path="/gallery" element={
          <>
            <Navbar />
            <Gallery_Overview_Page />
            <Footer />
          </>
        } />
        <Route path="/gallery/:eventId" element={
          <>
            <Navbar />
            <Gallery_Page />
            <Footer />
          </>
        } />
        <Route path="/blog" element={
          <>
            <Navbar />
            <Blog_Page />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Navbar />
            <Contact_us />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
