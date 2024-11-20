import { useState } from "react"


const InputCreate = ( {urlApi} ) => {
    const [input, setInput] = useState("")

    const postTask = (e) => {
        e.preventDefault()

        if(input === "") {
            alert("Introduce una tarea primero")
            return
        }

        fetch(urlApi+"/create", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: input})
        })
        .then(res => res.json())
        .then(data => console.log(data))

        setInput()
    }

    return (
        <form onSubmit={(e) => postTask(e)}>
            <input 
                type="text"
                placeholder="Introduce la tarea"
                value={input}
                onChange={e => setInput(e.target.value)}     
            />
            <button type="submit">Agregar</button>
        </form>
    )
}

export default InputCreate