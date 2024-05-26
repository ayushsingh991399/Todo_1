import Headingsignup from "./Headingsignup"; 
import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-domainom";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store";
const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9000/api/v1/login", Inputs)
      .then((res) =>{
        sessionStorage.setItem("id", res.data.others._id)
        dispatch(authActions.login(res.data.others._id));
              navigate("/Todo")
      });
  };
  return (
    <div className="signup">
    <div className="container">
        <div className="row"> 
        <div className="col-lg-4 coloum col-left d-flex justify-content-center align-items-center">
                <Headingsignup first="Sign" second="In"/>
            </div>
            <div className="col-lg-8 coloum d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column w-100 p-5">
                    <input 
                    type="email"
                    name= "email"
                    className="p-2 my-3 input-signup" 
                    placeholder="enter your email address"
                    value={Inputs.email}
                    onChange={change}
                    />
                    <input 
                    type="password" 
                    name="password" 
                    className="p-2 my-3 input-signup" 
                    placeholder="enter your password" 
                    value={Inputs.password}
                    onChange={change}
                    />
                    <button className="btn-up p-2" onClick={submit}> Sign In</button>
                </div>
                </div>
           
        </div>
    </div>
</div>
  )
}

export default Signin