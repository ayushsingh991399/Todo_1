import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Headingsignup from "./Headingsignup";
import "./Signup.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
})
const [buttonDisabled, setButtonDisabled] =useState(false);
    const [loading, setLoading] = useState(false);
    const onSignup = async (e) => {
      e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post(`${window.location.origin}/api/v1/register`, user)
            toast.success("Signup successful");
            setTimeout(() => {
              navigate("/signin")
            }, 2000);
            setUser({email: "", password: "", username: ""});
            
            
            
        } catch (error) {
            toast.error("Email is already in use");
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

 
  return (
    <div className="signup">
      <div className="container">
        <ToastContainer />
        <div className="row">
          <div className="col-lg-8 coloum d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-3">
              <input
                type="email"
                name="email"
                className="p-2 my-3 input-signup"
                placeholder="enter your email address"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
              />
              <input
                type="Username"
                name="Username"
                className="p-2 my-3 input-signup"
                placeholder="enter your Username"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
              />
              <input
                type="password"
                name="password"
                className="p-2 my-3 input-signup"
                placeholder="enter your password"
                value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
              />
              <button className="btn-up p-2" onClick={onSignup}>
              {buttonDisabled ? "No signup" : "Signup"}
              </button>
            </div>
          </div>
          <div className="col-lg-4 coloum col-left d-lg-flex justify-content-center align-items-center d-none ">
            <Headingsignup first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
