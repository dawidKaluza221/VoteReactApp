import React from "react";
import { Link } from "react-router-dom"; 
export const CreatePoll =()=>
{
    return(
        <div className="auth-form-container">
        <h2>Create a Poll</h2>
        <form className ="CreatePoll-form" >
            <label htmlFor= "text">Title</label>
            <input className="inputPoll" type="text" placeholder="Title" id = "Title" name = "Title" required/>
            <label htmlFor= "Question">Question</label>
            <input className="imputQuestion" type="text" placeholder="Question" id = "Question" name = "Question" required />
            <label htmlFor= "Answer">Answer</label>
            <input className="imputAnswer" type="text" placeholder="Answer" id = "Answer" name = "Answer" required/>
            <button type="submit" className="click-btn" to="/Login"> Zapisz</button>
            
        </form>
    </div>
    )
};