import { useState,useEffect } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from "./Update";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store";
import axios from "axios";
let id = sessionStorage.getItem("id");
let updatearray = [];
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
    const submit = async() => {
        if(Inputs.title === "" || Inputs.Description === ""){
            toast.error("Title and Description Cannot be empty");
        }else{
            if(id ){
               await axios.post("http://localhost:9000/api/v2/addtask", {
                    title: Inputs.title,
                    Description: Inputs.Description,
                    id: id
                }).then((res) => {
                    console.log(res);
                }); 
             
        setInputs({ title: "",Description: ""});
        toast.success("Your Task Is Added!");
            }
            else{
                setArray([...Array, Inputs]);
                setInputs({ title: "",Description: ""});
                toast.success("Your Task Is Added!");
                toast.error("Your Task Is Not Saved ! Plase SignUp");
            }

        }
        
    };
    const del =async(cardid) => {
        if(id){
            await axios.delete(`http://localhost:9000/api/v2/deletetask/${cardid}`,{data: {id: id}},).then((res) => {
        toast.success("your task is deleted");

       });
        }
        else{
            setArray(Array.filter((item) => item._id!== cardid));
            toast.error("Your Task Is Not Saved! Plase SignUp");
            toast.success("your task is deleted");
        }
       
    };
    const dis = (value) => {
        document.getElementById("todo-update").style.display=value;
    };
    const update = async(value) => {
        updatearray = Array[value];
    }
    useEffect(()=> {
        if(id){
             const fetch = async() => {
            await axios.get(`http://localhost:9000/api/v2/gettask/${id}`).then((res) => {

                setArray(res.data.list);
            });
        }; fetch();
        }
    },[submit]);
  return (
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
                name="Description" 
                value={Inputs.Description} 
                onChange={change} 
                id="textarea" 
                type="text" 
                className=" p-2 todo-input" 
                placeholder="Description" 
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
                                 Description={item.Description} 
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
             <Update display={dis} update = {updatearray}/>
        </div> 
    </div>
    </>
  );
};

export default Todo;