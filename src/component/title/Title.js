import React, {useState} from "react"


export default function Title (){
    const [title] = useState("ma boutique de drone");
    return(
        <div id="title">
            <div id={"drone-title"}>{title}</div>
            <img id="img" src="image/dronePresentation.png" alt="test React picture" width={200} height={200}/>
            <form>
                <input type="text" placeholder="rechercher un drone" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}