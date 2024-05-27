import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Headingsignup from "./Headingsignup";
import "./Signup.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const navigate = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    Username: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9000/api/v1/register", Inputs)
      .then((res) =>{
        if(res.data.message === "email is already in use"){
          toast.error("email is already in use"); 
          
        }else{
          toast.success("You Have Successfully Signed Up");
         navigate("/signin");
        };
        console.log(res);
        setInputs({
          email:"",
          Username:"",
          password:"",
        });
      });
  };
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
                onChange={change}
                value={Inputs.email}
              />
              <input
                type="Username"
                name="Username"
                className="p-2 my-3 input-signup"
                placeholder="enter your Username"
                onChange={change}
                value={Inputs.Username}
              />
              <input
                type="password"
                name="password"
                className="p-2 my-3 input-signup"
                placeholder="enter your password"
                onChange={change}
                value={Inputs.password}
              />
              <button className="btn-up p-2" onClick={submit}>
                SignUp
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
