import { useState, useEffect, useMemo } from "react";

function App() {

    const complexCompute = (num) => {
        let i = 0
        while (i < 1000000000) i++
        return num * 2
    }


    const [numState, setNumState] = useState(42)
    const [colorState, setColorState] = useState(false)
    
    //при любом рендере обьект styles создается заново и useEffect реагирует на это. 
    //c помощью useMemo сохраняем этот объект на след. рендер, если он вызван не изменением стейта colorState
    const styles = useMemo(()=>({ color: colorState ? 'red' : 'green' }), [colorState])
    // делаем так, что эта функция (вызывающаяся при каждом рендере)
    // вызывалась только в том случае, если сам рендер вызван изменением стейта numState
    const computed = useMemo(() => {
        return complexCompute(numState)
    }, [numState])
    
    
    useEffect(()=>{ console.log('styles changed')}, [styles])
    

    return (
        <>
            <h1 style={styles}>Computed prop: {computed}</h1>
            <button onClick={() => setNumState((prev) => prev + 1)}>+1</button>
            <button onClick={() => setNumState((prev) => prev - 1)}>-1</button>
            <button onClick={() => setColorState((prev) => !prev)}>change</button>
        </>
    )


}

export default App;
