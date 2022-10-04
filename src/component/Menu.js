import { useContext } from "react"
import { DataContext } from "../App"

function Menu(){
    const {setAppState} = useContext(DataContext);
    return(
        <div className="menu">
            <h1>Basic Quiz</h1>
            <button onClick={()=>setAppState("quiz")}>Start Quiz</button>
        </div>
    )
}

export default Menu;