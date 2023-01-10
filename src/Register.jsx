import React,{useState} from "react"
import { Link } from "react-router-dom";
import axios from "axios";
export const Register = (props) => {
    const [message, setMessage] = useState("");
    const [state,setState] = useState({
        email:"",
        name:"",
        password:""
    });
    
    const handleChange = (e) =>{
        const value = e.target.value;
        setState({
        ...state,
        [e.target.name]:value});        
    };
    const handleSubmit  = (e) =>{
        e.preventDefault();
        const userData ={
            id: 0,
            name: state.name,
            email: state.email,
            password: state.password
        };
        axios.post("https://localhost:7092/api/Vote/CreateEditUser", userData).then((response) => {
        console.log(response.status);
        if(response.status===200){
            setMessage("User created successfully");
            window.location.replace('http://localhost:3000/Login');
        }
        console.log(response.data);
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

    return (
         <div className="auth-form-container">
            <h2>Register</h2>
            <form className ="register-form" onSubmit={handleSubmit} >
                <label htmlFor= "email">email</label>
                <input value = {state.email} onChange={handleChange} type="email" placeholder="twojmail@gmial.com" id = "email" name = "email" required/>
                <label htmlFor= "name">name</label>
                <input value = {state.name} onChange={handleChange} type="name" placeholder="Imie i Nazwisko" id = "name" name = "name" required />
                <label htmlFor= "password">Hasło</label>
                <input value = {state.password} onChange={handleChange} type="password" placeholder="**********" id = "password" name = "password" required/>
                <button type="submit" className="click-btn"> zarejestruj Byczqu</button>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
            <Link className="link-btn" to="/Login"> Masz już konto? zalloguj sie Byczqu</Link>
        </div>
    )

}