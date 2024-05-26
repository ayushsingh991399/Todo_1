
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Signup from './components/Signup/Signup';
import Signin from './components/Signup/Signin';
import Todo from './components/Todo/Todo';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { authActions } from "./Store";
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const id = sessionStorage.getItem("id")
    if(id){
      dispatch(authActions.login());
    }
  },[]);

  return (
   <div>
    <Router>
       <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/Todo" element={<Todo/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
        </Routes>
    
    </Router>
    <Footer>
    </Footer>
   </div>
  )
}

export default App
