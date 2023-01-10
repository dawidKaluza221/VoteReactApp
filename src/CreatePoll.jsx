import { iterate } from "localforage";
import React,{ useState } from "react";
import { Link } from "react-router-dom"; 
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import axios from "axios";

export const CreatePoll =()=>
{
    const [state,SetTitle] = useState({
        pollName: ""
    });
    const [ID_Poll,SetID_Poll] = useState({
        id_poll:''//nie wiem czy dobra zmienna
    });

    const handleAddTitle =(e)=>{
        const value = e.target.value;
        SetTitle({
        ...state,
        [e.target.name]:value   
        });
    };

    const handleSubmit =(e) =>{
        e.preventDefault();
        const userData ={
            iD_Poll: 0,
            iD_User: 2,
            pollName: state.pollName,
            protectionAction:0,
            protectionView:0,
        };
        axios.post("https://localhost:7092/api/Vote/CreateEditPoll", userData).then((response) => {
        //console.log(response.status);
        if(response.status===200){
            //console.log(response.data);
            SetID_Poll(response.data['iD_Poll']);
            console.log({ID_Poll})
            const userAnswer={
                iD_Question: 0,
                iD_Poll:ID_Poll,
                question:"No zoabczymy jak to dziala"
            };
            axios.post("https://localhost:7092/api/Vote/CreateQuestion",userAnswer ).then((res)=>{
                console.log(res.data);
            })
            //window.location.replace('http://localhost:3000');
        }
    }).catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
    };

    const [form, setForm] = useState([]);
    const handleAddForm = ()=>{
        const inputState = {
            Question:"",
            Answer:"",

           
        };
        setForm((prev) =>[...prev, inputState]);
    };
    const onChange =(index,event) =>{
        event.preventDefault();
        event .persist();
        setForm(prev =>{
            return prev.map((item,i)=>{
                if(i!==index){
                    return item;
                }
                return{
                    ...item,
                    [event.target.name]:event.target.value,

                };
            });
        });
    };

    const handleRemoveField=(e,index)=>{
        e.preventDefault();

        setForm((prev)=>prev.filter((item)=> item !== prev[index]));
    };
    return(
    <form className="auth-form-container"  onSubmit={handleSubmit} >
        <h2>Create a Poll</h2>
        {JSON.stringify(form)}
        <div className ="CreatePoll-form" >
            <label htmlFor= "text" ></label>
            <input type="text" className="inputPoll" id = "pollName" name = "pollName"  placeholder="pollName" value={state.pollName} onChange={handleAddTitle} required/>
        </div>
        <div className="CreatePoll-form" >
            {form.map((item,index)=>(
                <div className=" row" key = {`item-${index}`}>
                    <div className="col">
                        <input
                        type="text"
                        className="inputQuestion"
                        id = "Question"
                        name = "Question"
                        placeholder="Question"
                        value={item.Question}
                        onChange={(e)=>onChange(index,e)}
                        required
                        />  
                        <Link className="btn-waring" >
                            <AiIcons.AiOutlineClose onClick={(e)=>handleRemoveField(e,index)}/>
                        </Link>
                    </div>
                    <div className="col">
                        <input
                        type="text"
                        className="imputAnswer" 
                        id = "Answer"
                        name = "Answer"
                        placeholder="Answer"
                        value={item.Answer}
                        onChange={(e)=>onChange(index,e)}
                        required
                        />  
                    </div>
                    
                </div>
            ))}
            <button className="click-btn" onClick={handleAddForm}> Dodaj Pytanie</button>
            
        </div>
        <button  className="click-btn" to=""> Zapisz</button>
    </form>
    )
};