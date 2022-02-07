import { useState } from "react";

function App() {
  //numState: state
  //setNumState: функция, изменяющая стейт
  // аргумент useState: начальное значение numState ()
  const [numState, setNumState] = useState(0)

  const incr1 = () => setNumState(numState + 1)

  const decr2 = () => {
    //лучше передавать коллбек в setNumState, поскольку тогда
    // можно будет вызвать команду несколько раз
    setNumState((prev) => prev - 1)
    setNumState((prev) => prev - 1)
  }




  const initObjState = () => ({ 'title': 'objState', 'date': Date.now() })

  const updTitle = () => setObjState(prev => ({ ...prev, date: Date.now() }))

  const [objState, setObjState] = useState(initObjState)

  // присваивание стейта каждый раз вызывает ре-рендер всего
  // поэтому при нажатии на кнопку будет вызвана эта команда
  console.log(numState)



  return (
    <>
      <h1>numState: {numState}</h1>
      <button onClick={incr1}>+1</button>
      <button onClick={decr2}>-2</button>

      <h1>{JSON.stringify(objState, null, 4)}</h1>
      <button onClick={updTitle}>refresh date</button>

    </>
  )


}

export default App;
