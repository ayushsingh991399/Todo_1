import "./Navbar.css";
import { GiBookCover } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { authActions } from "../../Store";
import DarkMode from "../Darkmode/Darkmode";
const Navbar = ()=> {
  const isLoggendIn = useSelector((state) => state.isLoggendIn);
  const dispatch = useDispatch();
  const logout = () => {
    sessionStorage.clear("id")
    dispatch(authActions.logout());
    window.location.reload();
  }
    return(
        <div>
           <nav className="navbar navbar-expand-lg ">
              <div className="container">
               <Link className="navbar-brand" to="/"><GiBookCover/><b>Todo</b></Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    <li className="nav-item mx-2" > 
     
        <DarkMode className="nav-link active " aria-current="page"></DarkMode>
     
       
       </li>
        <li className="nav-item mx-2">
         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-2">
         <Link className="nav-link active" aria-current="page" to="/about">About me</Link>
        </li>
        <li className="nav-item mx-2">
         <Link className="nav-link active" aria-current="page" to="/todo">Todo</Link>
        </li>
        {!isLoggendIn && <>
        <div className="d-flex my-lg-0 my-2"> 
          <li className="nav-item mx-2">
         <Link className="nav-link active btn-nav p-2" aria-current="page" to="signup">Signup</Link>
        </li>

        </div>
        
        <div className="d-flex my-lg-0 my-2"> 
          <li className="nav-item mx-2">
         <Link className="nav-link active btn-nav p-2" aria-current="page" to="signin">signin</Link>
        </li>

        </div>
       
        </>}
        {isLoggendIn && <div className="d-flex ">
         <li onClick = {logout} className="nav-item mx-2">
         <Link className="nav-link active btn-nav  p-2"  aria-current="page" to="#">logout</Link>
          
        </li> 
        </div>}
       
        
      </ul>
        
      
    </div>
  </div>
</nav>

        </div>
    )
};

export default Navbar;