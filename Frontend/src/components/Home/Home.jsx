import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {

  return (
    <div 
     className="home d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <h1 className="text-center">
          “One of the secrets of getting more done is to make a TO-DO List every day,<br/>
           keep it visible, and use it as a guide to action as you go through the day.”<br/> — Jean de La Fontaine
          </h1>
          <button className="home-btn p-2 "> <Link className="nav-link active" aria-current="page" to="/todo">Make Todo list</Link></button>
          </div>
    </div>
  )
}

export default Home;