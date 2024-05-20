import "./Navbar.css";
import { GiBookCover } from "react-icons/gi";
const Navbar = ()=> {
    return(
        <div>
           <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><GiBookCover/><b>Todo</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="#">About us</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="#">Todo</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active btn-nav" aria-current="page" href="#">Signup</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active btn-nav" aria-current="page" href="#">signin</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active btn-nav" aria-current="page" href="#">logout</a>
        </li>  
      </ul>
        
      
    </div>
  </div>
</nav>

        </div>
    )
};

export default Navbar;