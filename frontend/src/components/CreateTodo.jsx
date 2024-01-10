import { useState } from "react"

export function CreateTodo()
{
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    return <div>
        <input id="title"style={{
            padding:10,
            margin:10
        }}type="text"placeholder="title" onChange={(e)=>
        {
            const value=e.target.value;
            setTitle(e.target.value);
        }}></input><br/>
        <input id="title"style={{
            padding:10,
            margin:10
        }} type="text" placeholder="description"onChange={(e)=>
            {
                const value=e.target.value;
                setDescription(e.target.value);
            }}></input><br/>
        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>
        {
            fetch("https://localhost:3008/todolist/todo",
            {
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "contentType":"application/json"
                }
            }).then(async function(res)
            {
                const json=await res.json();
                alert("Todo added");
            })
        }}>Add todo</button>
    </div>
}