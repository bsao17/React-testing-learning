import React, {useState} from "react"


export default function Title (){
    const [title] = useState("ma boutique de drone");
    return(
        <div>
            <h1>{title}</h1>
            <img id="img" src="https://miro.medium.com/max/839/1*8IBBim-Fx_wQzN5va0UHqA.png" alt="test React picture"/>
            <form>
                <input type="text" placeholder="rechercher un drone" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}