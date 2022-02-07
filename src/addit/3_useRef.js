import { useState, useEffect, useRef } from "react";

function App() {

    const [textState, setTextState] = useState('')
    const focusRef = useRef("null")
    const prevTextRef = useRef('')


    useEffect(() => { prevTextRef.current = textState }, [textState])


    return (
        <>

            {/*изменяем стейт(для вызова useEffect)*/}
            <input ref={focusRef} type='text' value={textState} onChange={e => setTextState(e.target.value)} />
            {/*привязали focusRef к инпуту; */}
            <button onClick={() => { focusRef.current.focus() }}>фокус</button>
            {/* нельзя использовать useState так как он делает ре-рендер */}
            <h1>предыдущее состояние: {prevTextRef.current}</h1>
            {/* нельзя использовать useRef так как он назначается 'между' рендерами и в 'живом' режиме его не увидеть */}
            <h1>текущее состояние: {textState}</h1>

        </>
    )


}

export default App;
