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
    console.log("количество рендеров",countRef.current++)

    console.log("предыдущее состояние", prevRef.current)
    
    console.log("текущее состояние", inputRef.current.value)
    
})

useEffect(()=>{prevRef.current = valueState}, [valueState])


    return (
        <>


{/* 
привязали inputRef к инпуту 
изменяем стейт(для вызова useEffect)
*/}
<input ref={inputRef} type='text' onChange={e => setValueState(e.target.value)} value={valueState}/>
<button onClick={()=> {inputRef.current.focus()}}>фокус</button>
<h1>количество рендеров: {countRef.current++}</h1>
<h1>предыдущее состояние: {prevRef.current}</h1>
<h1>текущее состояние: {valueState}</h1>
        </>
    )


}

export default App;
