import React, { useState, useEffect } from "react"

//куча кастомных хуков на usehooks.com


function useLogger(value) {
    useEffect(() => { console.log('Value changed: ', value) }, [value])
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const onChange = event => { setValue(event.target.value) }
    const clear = () => setValue('')

    return {
        bind: { value, onChange },
        clear
    }
}


function App() {

    //второй кастомный хук обернули хук стейта и вернули обьект с самим стейтом и методами над ним
    const input = useInput('')

    //первый кастомный хук просто обернули в фунцию другой хук
    useLogger(input.bind.value)



    return (
        <>
            <input type='text' {...input.bind} />
            <button onClick={() => input.clear()}>clear</button>
            <h1>{input.bind.value}</h1>
        </>
    )


}

export default App;
