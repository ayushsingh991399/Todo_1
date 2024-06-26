import "./Navbar.css";
import { GiBookCover } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { authActions } from "../../Store";
const Navbar = ()=> {
  const isloggendIn = useSelector((state) => state.isloggendIn);
  const dispatch = useDispatch();
  const logout = () => {
    sessionStorage.clear("id")
    dispatch(authActions.logout());

  }
    return(
        <div>
           <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
               <Link class="navbar-brand" to="/"><GiBookCover/><b>Todo</b></Link>
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-2">
         <Link className="nav-link active" aria-current="page" to="/about">About us</Link>
        </li>
        <li className="nav-item mx-2">
         <Link className="nav-link active" aria-current="page" to="/todo">Todo</Link>
        </li>
        {!isloggendIn && <>
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
        {isloggendIn && <div className="d-flex ">
         <li className="nav-item mx-2">
         <Link className="nav-link active btn-nav  p-2" onclick = {logout} aria-current="page" to="#">logout</Link>
          
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