import { useContext } from "react";
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData";

function Score(){

    const {score,setAppState,setScore} = useContext(DataContext);

    function restartApp(){
        setAppState("menu");
        setScore(0);
    }
    return(
        <div className="score">
            <h1>Total Score</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>Try Again</button>
        </div>
    )
}

export default Score