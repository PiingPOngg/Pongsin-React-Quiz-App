import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData"

function Quiz(){

    const [current,setCurrent] = useState(0);
    const [selectChoice,setSelectChoice] = useState("");
    const {score,setScore,setAppState} = useContext(DataContext);

    useEffect(()=>{
        checkAnswer()
        // eslint-disable-next-line
    },[selectChoice]);

    function checkAnswer(){
        if(selectChoice !== ""){
            if(selectChoice === QuestionsData[current].answer){
                setScore(score+1);
                nextQuestion();
            }
            else{
                console.log("wrong");
                nextQuestion();
            }
        }
    }
    function nextQuestion(){
        setCurrent(current+1);
        if(current === QuestionsData.length - 1){
            setAppState("score");
        }
        else{
            setCurrent(current+1);
        }
        setSelectChoice("");
    }
    return(
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectChoice("A") }>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectChoice("B")}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectChoice("C")}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectChoice("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz