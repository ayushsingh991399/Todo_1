import { useState } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from "./Update";

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
        if(Inputs.title === "" || Inputs.Description === ""){
            toast.error("Title and Description Cannot be empty");
        }else{
            setArray([...Array, Inputs]);
        setInputs({ title: "",Description: ""});
        toast.success("Your Task Is Added!");
        toast.error("Your Task Is Not Saved ! Plase SignUp");
        }
        
    };
    const del = (id) => {
       
        Array.splice(id,"1");
        setArray([...Array]);
        toast.success("Your Task Is Deleted!");
    };
    const dis = (value) => {
        document.getElementById("todo-update").style.display=value.toLowerCase();
    };
  return (
    <>
    <div className="todo">
        <ToastContainer />
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
                <div className="row">
                        {Array && Array.map((item, index) =>(
                            <div className="col-lg-3 col-10 mx-5 my-2 " key={index}>
                                <TodoCards
                                 title={item.title} 
                                 Description={item.Description} 
                                 id={index} 
                                 delid={del}
                                 display={dis}
                                 />
                            </div>
                ))}
                </div>
                
            </div>

        </div>
    </div>
    <div className="Todo-update" id="todo-update">
        <div className="container update">
             <Update display={dis}/>
        </div> 
    </div>
    </>
  );
};

export default Todo;