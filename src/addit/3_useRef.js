import { useState, useEffect, useRef } from "react";

function App() {

    const [valueState, setValueState] = useState(1)
    const numRef = useRef(1)
    const textRef = useRef("null")
    const prevTextRef = useRef('')


    useEffect(() => { prevTextRef.current = valueState }, [valueState])


    return (
        <>

            {/* привязали textRef к инпуту; изменяем стейт(для вызова useEffect)*/}
            <input ref={textRef} type='text' value={valueState} onChange={e => setValueState(e.target.value)} />
            <button onClick={() => { textRef.current.focus() }}>фокус</button>
            {/* нельзя использовать useState так как он делает ре-рендер */}
            <h1>количество рендеров: {numRef.current++}</h1>
            <h1>предыдущее состояние: {prevTextRef.current}</h1>
            {/* нельзя использовать useRef так как он назначается 'между' рендерами и в 'живом' режиме его не увидеть */}
            <h1>текущее состояние: {valueState}</h1>

        </>
    )


}

export default App;
