import { useState, useCallback } from "react";
 import ItemList from "./5.2_itemList";

function App() {

    const [colorState, setColorState] = useState(false)
    const [numState, setNumState] = useState(1)

    const styles = { color: colorState ? 'red' : 'green' }

    // закрывает функцию от перерендера, если рендер вызван изменением стейта numState
    const generateItemsFromAPI = useCallback(() => {
        return new Array(numState).fill('').map((_, i) => `element: ${i + 1}`)
    }, [numState])

    return (
        <>
            <h1 style={styles}>Number of elements: {numState}</h1>
            <button onClick={() => setNumState((prev) => prev + 1)}>+1</button>
            <button onClick={() => setColorState((prev) => !prev)}>change</button>

            <ItemList getItems={generateItemsFromAPI} />

        </>
    )


}

export default App;
