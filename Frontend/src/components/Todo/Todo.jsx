import { useState,useEffect} from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from "./Update";
import axios from "axios";

import TodoLoader from "../loader/TodoLoader";
let id = sessionStorage.getItem("id");
let updatearray = [];
const Todo = () => {
    const[Inputs,setInputs] = useState({title:"" ,description:""});
    const [Array,setArray] = useState([]);
   
    
    const show = () => {
        document.getElementById("textarea").style.display = "block";
    };
    const change = (e) => {
       const { name,value} = e.target;
       setInputs({...Inputs,[name]:value});
    };
    const submit = async () => {
        if (Inputs.title === "" || Inputs.description === "") {
            toast.error("Title and description cannot be empty");
        } else {
            if (id) {
                try {
                    const response = await axios.post(`https://todo-app-atuq.onrender.com/api/v2/addtask`, {
                        title: Inputs.title,
                        description: Inputs.description,
                        id: id
                    });
                    toast.success("Task added successfully");
                    setInputs({ title: "", description: "" });
                } catch (error) {
                    console.error("Error adding task:", error);
                    toast.error("Failed to add task");
                }
            } else {
                setArray([...Array, Inputs]);
                setInputs({ title: "", description: "" });
                toast.success("Your task is added!");
                toast.error("Your task is not saved! Please sign up");
            }
        }
    };
    const del =async(cardid) => { 
        if(id){ 
            await axios.delete(`https://todo-app-atuq.onrender.com/api/v2/deletetask/${cardid}`,{data: {id: id}},).then(() => {toast.success("your task is deleted");})
             
        } else {
            Array.splice(cardid,"1")
            setArray([...Array]);
            toast.success("your task is deleted , Please SignUp");
        }
    };
    
    const dis = (value) => {
        document.getElementById("todo-update").style.display=value;
    };
    const update = async(value) => {
      updatearray = Array[value];  
    }
    const fetchTasks = async () => {
        try {
            const response = await axios.get(`https://todo-app-atuq.onrender.com/api/v2/gettask/${id}`);
            setArray(response.data.list);
        } catch (error) {
            toast.error("Failed to fetch tasks");
        }
    };
   useEffect(()=>{
 
    if(id){
       
        fetchTasks()
    }

   },[submit])
    

    
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const fakeDataFetch = () => {
        setTimeout(() => {
    
          setIsLoading(false);
        }, 2000);
      };
  
      fakeDataFetch();
    }, []);
  
    return isLoading ? (
      <TodoLoader />
    ) : (
    <>
    <div className="todo">
        <ToastContainer />
        <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
            <div className="d-flex flex-column todo-input-div w-100 p-1">
                <input 
                name="title"
                 value={Inputs.title}
                  onChange={change}
                   onClick={show}
                    type="text"
                     className="my-2 p-2 todo-input"
                      placeholder="Title"
                       />
                <textarea 
                name="description" 
                value={Inputs.description} 
                onChange={change} 
                id="textarea" 
                type="text" 
                className=" p-2 todo-input" 
                placeholder="description" 
                />
                
            </div>
            <div className="w-lg-50 w-100 d-flex justify-content-end my-3">
                <button onClick={submit} className="home-btn px-2 py-1">
                    Add Todo
                </button>
            </div>
        </div>
        <div className="todo-body">
            <div className="container-fluid">
                <div className="row">
                        {Array && Array.map((item, index) =>(
                            <div className="col-lg-3 col-11 mx-lg-5 mx-3 my-2 " key={index}>
                                <TodoCards
                                 title={item.title}
                                 description={item.description} 
                                 id={item._id} 
                                 delid={del}
                                 display={dis}
                                 updateId={index}
                                 toBeUpdate={update}
                                 />
                            </div>
                ))}
                </div>
                
            </div>

        </div>
    </div>
    <div className="Todo-update" id="todo-update">
        <div className="container update">
             <Update display={dis} update={updatearray}/>
        </div> 
    </div>
    </>
  );
};

export default Todo;