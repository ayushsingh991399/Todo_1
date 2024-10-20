import Headingsignup from "./Headingsignup"; 
import "./Signup.css";
import { useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store";
import { ToastContainer, toast } from "react-toastify";
const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
})
const [buttonDisabled, setButtonDisabled] =useState(false);
    const [loading, setLoading] = useState(false);
     const onSignin = async (e) => {
      e.preventDefault(); 
      try {
        setLoading(true);
        const response = await axios.post(`https://todo-app-atuq.onrender.com/api/v1/login`, user)
        .then((res) =>{
      const user =  sessionStorage.setItem("id", res.data.user._id)
        dispatch(authActions.login())
        navigate("/Todo")
        window.location.reload();
        
        })
        toast.success("You have successfully signed in!");
        setUser({email: "", password: ""});
      } catch (error) {
        console.error("Signup failed", error.message);
        toast.error(error.response?.data?.message || "An error occurred during sign-in.");
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      setButtonDisabled(!(user.email && user.password));
    }, [user]);
  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0) {
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
        <div className="col-lg-4 coloum col-left d-none d-lg-flex justify-content-center align-items-center">
                <Headingsignup first="Sign" second="In"/>
            </div>
            <div className="col-lg-8 coloum d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column w-100 p-3">
                    <input 
                    type="email"
                    name= "email"
                    className="p-2 my-3 input-signup" 
                    placeholder="enter your email address"
                    value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                    <input 
                    type="password" 
                    name="password" 
                    className="p-2 my-3 input-signup" 
                    placeholder="enter your password" 
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                    <button className="btn-up p-2" onClick={onSignin}>
              {buttonDisabled ? "No signin" : "Signin"}
              </button>
                </div>
                </div>
           
        </div>
    </div>
</div>
  )
}

export default Signin