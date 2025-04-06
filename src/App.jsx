import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
// Other pages will be imported here as you build them
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ChefProfile from './components/ChefProfile';
import Chefs from './components/Chefs';
import BecomeChef from './components/BecomeChef';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

        {/* Add other routes as you build more pages */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/chef/:id" element={<ChefProfile />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/become-chef" element={<BecomeChef />} />
        
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;