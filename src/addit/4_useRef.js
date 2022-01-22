import { useState, useEffect, useRef } from "react";

function App() {
    
    // const [numState, setNumState] = useState(1)
    const [valueState, setValueState] = useState(1)
    const countRef = useRef(1)
    const inputRef = useRef(null)
    const prevRef = useRef('')


useEffect(()=>{
   
    //получим бесконечное выполнение, само прибавление вызывает рендер, 
    //  setNumState((prev)=>prev+1)

    // работает 'между' рендерами, само прибавление не вызывает рендер
    console.log("первый useRef(количество рендеров)",countRef.current++)

    console.log("третий useRef(предыдущее состояние)", prevRef.current)
    
    console.log("второй useRef (текущее состояние)", inputRef.current.value)
    
})

useEffect(()=>{
    prevRef.current = valueState
}, [valueState])


    return (
        <>


{/* 
привязали inputRef к инпуту 
изменяем стейт(для вызова useEffect)
*/}
<input ref={inputRef} type='text' onChange={e => setValueState(e.target.value)} value={valueState}/>
<button onClick={()=> {inputRef.current.focus()}}>фокус</button>
        </>
    )


}

export default App;
