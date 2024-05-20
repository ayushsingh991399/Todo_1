import "./Navbar.css";
import { GiBookCover } from "react-icons/gi";
import { Link } from "react-router-dom";
const Navbar = ()=> {
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
        <li className="nav-item mx-2">
         <Link className="nav-link active btn-nav" aria-current="page" to="signup">Signup</Link>
        </li>
        <li className="nav-item mx-2">
         <Link className="nav-link active btn-nav" aria-current="page" to="signin">signin</Link>
        </li>
        <li className="nav-item mx-2">
         <Link className="nav-link active btn-nav" aria-current="page" to="#">logout</Link>
        </li>  
      </ul>
        
      
    </div>
  </div>
</nav>

        </div>
    )
};

export default Navbar;