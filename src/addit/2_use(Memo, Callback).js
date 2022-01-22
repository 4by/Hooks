import { useState, useEffect, useCallback, useMemo } from "react";

function App() {

    const [numState, setNumState] = useState(0)
    const [colorState, setColorState] = useState(false)

    // useMemo пере-рендерит объект и функцию только в случае изменения вторых аргументов
    // поскольку функция не пере-рендерена она посчитается невызванной и вызовется снова
    const styles = useMemo(() => ({ color: colorState ? 'red' : 'green' }), [colorState])
    const isMemoRender = useMemo(
        () => {
            for (let i = 0; i < 1000000000; i++) i++
            return numState * 2
        },
        [numState]
    )
    // useCallback работает аналогично, но возвращает вызов, а не результат
    // понятно, что вызов с оператором расширения будет результат
    const isCallbackRender = useCallback(() => { return numState * 2 }, [numState])

    useEffect(() => { console.log('styles re-rendered') }, [styles])
    useEffect(() => { console.log('numState(through useMemo) re-rendered') }, [isMemoRender])
    useEffect(() => { console.log('numState(through useCallback) re-rendered') }, [isCallbackRender])


    return (
        <>
            <h1 style={styles}>Memo render: {isMemoRender}</h1>
            <h1 style={styles}>Callback render: {isCallbackRender()}</h1>
            <button onClick={() => setNumState((prev) => prev + 1)}>+1</button>
            <button onClick={() => setColorState((prev) => !prev)}>change</button>
        </>
    )


}

export default App;
