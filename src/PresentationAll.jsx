import React,{useState,useEffect} from "react"
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import { Chart as ChartJS,ArcElement,Tooltip,Legend,Title } from 'chart.js';
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement,Tooltip,Legend,Title)

export const PresentationAll =()=>
{
    const [COunterAnswer,SetCounterAnswer] = useState([]);
    const [COunterAnswer1,SetCounterAnswer1] = useState([]);
    const [COunterAnswer2,SetCounterAnswer2] = useState([]);
    const [ANswer,SetAnswer] = useState([]);
    const [ANswer1,SetAnswer1] = useState([]);
    const [ANswer2,SetAnswer2] = useState([]);
    const[Data,SetData] = useState([]);
    useEffect(()=>{
        axios.get("https://localhost:7092/api/Vote/GetAllAnswers").then((resp)=>{
            const date = resp.data;
            return date;
        }).then((date)=>{
            console.log("ress",date);
            SetData(date);
            const GetAnswer = [];
            const GetCounter = [];
            const GetAnswer1 = [];
            const GetCounter1 = [];
            const GetAnswer2 = [];
            const GetCounter2 = [];
            for(var i of date)
                {
                    if(i.idQuestion===1034)
                    {
                        GetAnswer.push(i.answer);
                        GetCounter.push(i.counterAnswer);
                    }
                    if(i.idQuestion===1035)
                    {
                        GetAnswer1.push(i.answer);
                        GetCounter1.push(i.counterAnswer);
                    }
                    if(i.idQuestion===1036)
                    {
                        GetAnswer2.push(i.answer);
                        GetCounter2.push(i.counterAnswer);
                    }
                    
                }
                SetCounterAnswer(GetCounter);
                SetAnswer(GetAnswer);
                SetCounterAnswer1(GetCounter1);
                SetAnswer1(GetAnswer1);
                SetCounterAnswer2(GetCounter2);
                SetAnswer2(GetAnswer2);

        })
    
    

    },[]);
    return(
        <React.Fragment>
            
            <div className="Cyrcle-form-container">
            <h2>Wyniki wszystkich ankiet</h2>
                    <Pie  
                    width={300}
                    height={200}
                    data ={{
                        labels: ANswer,
                        datasets:[
                        {
                            label:'# of Votes',
                            data:  COunterAnswer,
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
                                text: 'Czy Lewandowski i to najlepszy pilkarz polski?',
                                display: true,
                            }
                        }
                    }}
                    ></Pie>
                    <Pie  
                    width={300}
                    height={200}
                    data ={{
                        labels: ANswer1,
                        datasets:[
                        {
                            label:'# of Votes',
                            data:  COunterAnswer1,
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
                                text: 'Co lubisz jesc?',
                                display: true
                            }
                        }
                    }}
                    ></Pie>
                    <Pie  
                    width={300}
                    height={200}
                    data ={{
                        labels: ANswer2,
                        datasets:[
                        {
                            label:'# of Votes',
                            data:  COunterAnswer2,
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
                                text: 'Co wolisz?',
                                display: true,
                            }
                        }
                    }}
                    ></Pie>
            </div>
            
        
        </React.Fragment>
    )
};