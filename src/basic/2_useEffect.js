import { useState, useEffect } from "react";

const App = () => {


    const loadJson = (arg) => {
        fetch(`https://jsonplaceholder.typicode.com/${arg}/1`)
        .then(response => response.json())
        .then(json => setData(json))
    }
    
  
    // все эти стейты можно сделать одним стейтом через обьект
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    //вызывается, когда происходит какой-либо рендер 
    // связанный с элементом массива (стейт, обьект, фунция...)
    // пустой массив - только при загрузке компонента
    // без массива - при любом рендере
    useEffect(() => { loadJson(type); return () => {console.log("тут можно отписаться от стейта")} }, [type])
    
 

    return (
        <>
            <h1>Resouce: {type}</h1>
            <button onClick={() => setType('users')}>users</button>
            <button onClick={() => setType('todos')}>todos</button>
            <button onClick={() => setType('posts')}>posts</button>

            <pre>{JSON.stringify(data, null, 4)}</pre>
        </>
    )


}

export default App;
