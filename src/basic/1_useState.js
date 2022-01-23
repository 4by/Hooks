import { useState } from "react";

function App() {

  const initNumState = () => {
    console.log('calculating initial state...')
    return Math.trunc(Math.random() * 20)
  }

  const incr1 = () => {
    setNumState(numState + 1)
  }
  const decr2 = () => {
    //лучше передавать коллбек в setNumState, поскольку тогда
    // можно будет вызвать команду несколько раз
    setNumState((prev) => prev - 1)
    setNumState((prev) => prev - 1)
  }

  //numState: state
  //setNumState: функция, изменяющая стейт
  // аргумент useState: начальное значение numState ()
  const [numState, setNumState] = useState(initNumState)




  
  const initObjState = () => {
    return {
      'title': 'objState',
      'date': Date.now()
    }
  }


  const updTitle = () => {
    setObjState((prev) => {
      return {
        ...prev,
        date: Date.now()
      }
    })
  }


  const [objState, setObjState] = useState(initObjState)

  //вызов setNumState каждый раз вызывает ре-рендер всего
  //поэтому при нажатии на кнопку будет вызвана эта команда
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
