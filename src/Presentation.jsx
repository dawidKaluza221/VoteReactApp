import React,{useState,useEffect} from "react"
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import { Chart as ChartJS,ArcElement,Tooltip,Legend,Title } from 'chart.js';
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement,Tooltip,Legend,Title)



export const Presentation =()=>
{
    const {IdAnswer} = useParams();
    const [CounterAnswer,SetCounterAnswer] = useState([]);
    const [Answer,SetAnswer] = useState([]);
    useEffect(()=>{
        const data = {
            IdAnswer: IdAnswer,
            idQuestion: 0,
            answer: "",
            counterAnswer: 0
        }
    const resp = axios.post("https://localhost:7092/api/Vote/VoteAnswer",data).then((resp)=>{
        const date = resp.data;
        if(resp.status===200){
            const GetAnswer=[];
            const GetCounter=[];
            for(var i of date)
            {
                GetAnswer.push(i.answer);
                GetCounter.push(i.counterAnswer);
                    
            }
            SetCounterAnswer(GetCounter);
            SetAnswer(GetAnswer);
        }
    })

    },[]);
    return(
        <React.Fragment>
            
            <div className="auth-form-container">
            <h2>Wynik ankiety</h2>
            
                    <Pie 
                    width={300}
                    height={200}
                    data ={{
                        labels: Answer,
                            
                        datasets:[
                        {
                            label:'# of Votes',
                            data:CounterAnswer,
                            backgroundColor:[
                                "#0074D9", "#FF4136"
                            ],
                            borderColor:[
                                "#0074D9", "#FF4136"
                            ],
                            borderWidth:1,
                            offset:[0,20,0,0,0,0]
                        },],
                    }}
                    options ={{
                        responsive:true,
                        plugins:{
                            title:{
                                text: 'Wyniki',
                            }
                        }
                    }}
                    ></Pie>

            </div>
            

        </React.Fragment>
    )
    
};