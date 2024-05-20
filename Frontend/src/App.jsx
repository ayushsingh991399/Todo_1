
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Signup from './components/Signup/Signup';
function App() {

  return (
   <div>
    <Router>
       <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<About/>}></Route>
        </Routes>
    
    </Router>
    <Footer>
    </Footer>
   </div>
  )
}

export default App
