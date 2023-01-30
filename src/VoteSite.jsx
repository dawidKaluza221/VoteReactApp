import React,{useState,useEffect} from "react"
import axios from "axios";
import { Link,useParams } from "react-router-dom";

export const VoteSite =()=>
{
    const {ID_Poll} = useParams();
    const [state,SetTitle] = useState([]);
    const [question,SetQuestion] = useState([]);
    const [answer,SetAnswer] = useState([]);
    useEffect(()=>{
        axios.get("https://localhost:7092/api/Vote/GetPoll/"+ID_Poll ).then((resp)=>{
                const data = resp.data;//dalczego mam dwa razy console.log?
                SetTitle(data)
                console.log(data);
                //const Questions = data.pollName
                if(resp.status===200){
                        axios.get("https://localhost:7092/api/Vote/GetQuestion/"+ID_Poll ).then((resp1)=>{
                        const data1 = resp1.data;//dalczego mam dwa razy console.log?
                        SetQuestion(data1);
                            if(resp1.status===200){
                                axios.get("https://localhost:7092/api/Vote/GetAnswer/"+data1[0]['iD_Question']).then((resp1)=>{
                                const data2 = resp1.data;//dalczego mam dwa razy console.log?
                                //const Questions = data.pollName
                                SetAnswer([...data2]);
                                    if(resp1.status===200){
                                    
                                    }
                                });
                            }
                        });
                    }
            });
    },[]);

    return(
        <form className="auth-form-container">
        <h2> Tytuł ankiety to {state.pollName}</h2>
        <h2>Wybierz odpowiedź na następujące pytanie!{question.question}</h2>
        {
                question.map(post =>{
                     return <div key={post.question}>
                     <h2>{post.question} </h2>
                     </div> 
                })
            }
        <div className ="CreatePoll-form"> 
               {
                    answer.map(post =>{
                        return <div key={post.idAnswer}>
                        <Link className="click-btn-Title" to={"/Presentation/"+post.idAnswer}> {post.answer} </Link>

                        </div> 
                    })
                }
        </div>
    </form>
    )
    
};