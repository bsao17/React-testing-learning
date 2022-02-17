import React, {useState} from "react"


export default function Title (){
    const [title] = useState("ma boutique de drone");
    return(
        <div>
            <h1>{title}</h1>
            <form>
                <input type="text" placeholder="rechercher un drone" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}