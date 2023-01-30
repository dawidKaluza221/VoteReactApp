import React,{ useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Homepage =()=>
{
    const [state,SetTitle] = useState([]);
    useEffect(()=>{
        axios.get("https://localhost:7092/api/Vote/GetAllPoll" ).then((resp)=>{
        const data = resp.data;//dalczego mam dwa razy console.log?
        //const Questions = data.pollName
        console.log(data)
        SetTitle([...data]);
             if(resp.status===200){
                //SetTitle({...data});
             }
        })
    },[]);
    return(
    <form className="auth-form-container">
        <h2>Witam Cię!</h2>
        <h2>Wybierz Ankietę, na którą chcesz oddać głos!</h2>
        <div className ="CreatePoll-form" >
            {
                state.map(post =>{
                     return <div key={post.iD_Poll}>
                     <Link type="button" className="click-btn-Title" to ={"/VoteSite/"+post.iD_Poll}>{post.pollName} </Link>
                     </div> 
                })
            }
            
            
        </div>
        <button className="click-btn" to=""> Zapisz</button>
    </form>
    )
};