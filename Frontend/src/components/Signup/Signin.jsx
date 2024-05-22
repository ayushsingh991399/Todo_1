import Headingsignup from "./Headingsignup"; 
import "./Signup.css";


const Signin = () => {
  return (
    <div className="signup">
    <div className="container">
        <div className="row"> 
        <div className="col-lg-4 coloum col-left d-flex justify-content-center align-items-center">
                <Headingsignup first="Sign" second="In"/>
            </div>
            <div className="col-lg-8 coloum d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column w-100 p-5">
                    <input type="email"name= "email"className="p-2 my-3 input-signup" placeholder="enter your email address"/>
                    <input type="password" name="password" className="p-2 my-3 input-signup" placeholder="enter your password"/>
                    <button className="btn-up p-2"> Sign In</button>
                </div>
                </div>
           
        </div>
    </div>
</div>
  )
}

export default Signin