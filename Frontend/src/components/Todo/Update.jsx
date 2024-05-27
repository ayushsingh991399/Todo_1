import { useEffect, useState } from "react";
import axios from "axios";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from 'react-toastify';

const Update = ({display,update}) => {
  useEffect(() =>{
    setInputs({title: update.title, description: update.description});
  },[update]);
 const[Inputs,setInputs] = useState({title:"", description: ""});
  const change = (e)=>{
    const {name,value} = e.target;
    setInputs({...Inputs,[name]:value});
  };
  const submit = async(e)=>{
    await axios.put(`http://localhost:9000/api/v2/updatetask/${update.id}`,Inputs).then((response)=> {toast.success("your task has been updated")});
    display("none");
  };
  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
        <h3>
            Update Your Task
        </h3>
        <input type="text"  className="todo-inputs my-4 w-100 p-2" name="title" value={Inputs.title} onChange={change} />
        <textarea className="todo-inputs w-100 p-3" name="description" value={Inputs.description} onChange={change}/>
        <div>
            <button className="btn btn-dark my-4"onClick={submit}>Update</button>
            <button className="btn btn-danger my-4 mx-3"onClick={() =>{
              display("none");
            }}>Close</button>
        </div>
       
    </div>
  )
}

export default Update;