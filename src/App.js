import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Introduction from './front';
import Branches from './branch';
import AdminLogin from './admin';
import StudentLogin from './Student';
import ContactUs from './Contact';
import AboutUs from './About';

export default function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/branches" element={<Branches />} />
          <Introduction />
      </BrowserRouter>
    </div>
    </ >
  )
};


