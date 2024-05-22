import { useState } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";

const Todo = () => {
    const[Inputs,setInputs] = useState({title:"" ,Description:""});
    const [Array,setArray] = useState([]);
    const show = () => {
        document.getElementById("textarea").style.display = "block";
    };
    const change = (e) => {
       const { name,value} = e.target;
       setInputs({...Inputs,[name]:value});
    };
    const submit = () => {
        setArray([...Array, Inputs]);
        setInputs({ title: "",Description: ""});
    };
  return (
    <div className="todo">
        <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
            <div className="d-flex flex-column todo-input-div w-50 p-1">
                <input name="title" value={Inputs.title} onChange={change} onClick={show} type="text" className="my-2 p-2 todo-input" placeholder="Title" />
                <textarea name="Description" value={Inputs.Description} onChange={change} id="textarea" type="text" className=" p-2 todo-input" placeholder="Description" />
                
            </div>
            <div className="w-50 d-flex justify-content-end my-3">
                <button onClick={submit} className="home-btn px-2 py-1">
                    Add Todo
                </button>
            </div>
        </div>
        <div className="todo-body">
            <div className="container-fluid">
                <div className="row bg-primary">
                        {Array && Array.map((item, index) =>(
                            <div className="col-lg-3 bg-success mx-5 my-2">
                                <TodoCards/>
                            </div>
                ))}

                    
                </div>
                
            </div>

        </div>
    </div>
  );
};

export default Todo;