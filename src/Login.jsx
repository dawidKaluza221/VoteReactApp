import React,{useState} from "react"
import { Link } from "react-router-dom";

export const Login = (props) => {
    const [email,setEmail] = useState('');
    const [pass ,setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className ="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="twojmail@gmial.com" id = "email" name = "email" required/>
                <label htmlFor= "password">Hasło</label>
                <input value = {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id = "password" name = "password" required/>
                <Link className="click-btn" type="button"> Zaloguj Byczqu</Link>
            </form>
            <Link className="link-btn" to="/Register"> Nie masz konta? zarejestruj sie tutaj</Link>
        </div>
    )

}