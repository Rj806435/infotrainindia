
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Components/Home.jsx'
import Home from './Components/Home.jsx';
import About from './Components/About.jsx'
import Header from './Common/Header.jsx';
import Footer from './Common/Footer.jsx';
import Blog from './Components/Blog.jsx';
import Contact from './Components/Contact.jsx';
import Design from './Components/Design.jsx';
import WebDevelopment from './Components/WebDevelopment.jsx';
import AppDevelopment from './Components/AppDevelopment.jsx';
import Client from './Components/Client.jsx'

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/ui-ux-design" element={<Design />} />
            <Route exact path="/web-development" element={<WebDevelopment/>} />
            <Route exact path="/app-development" element={<AppDevelopment />} /> 
            <Route exact path="/client" element={<Client />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contactUs" element={<Contact />} />
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
