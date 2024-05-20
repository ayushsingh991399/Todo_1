import "./Signup.css"
const Signup = () => {
  return (
    <div className="signup">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 coloum d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column">
                        <input type="email"name= "email"className="p-2 my-3" placeholder="enter your email address"/>
                        <input type="Username" name="Username" className="p-2 my-3" placeholder="enter your Username"/>
                        <input type="password" name="password" className="p-2 my-3" placeholder="enter your password"/>
                        <button className="btn-up p-2"> SignUp</button>
                    </div>
                    </div>
                <div className="col-lg-4 coloum col-left d-flex justify-content-center align-items-center">
                    <h1 className="text-center sign-up-heading">Sign</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup