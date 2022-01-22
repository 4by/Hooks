import React, { useState, useContext } from "react"


function App() {

  // createContext создает тег с контекстом контекст
  const ContextSetter = React.createContext()

  // useContext считывает контекст
 const GetContext = () => {
    return useContext(ContextSetter)
  }

  // Provider передает контекст, стейт хранит  состояние контекста
 const ContextLoader = ({ children }) => {

    const [alertState, setAlertState] = useState(false)
    const toggle = () => setAlertState(prev => !prev)

    return (
      <ContextSetter.Provider value={{
        visible: alertState,
        toggle
      }}>
        {children}
      </ContextSetter.Provider>
    )

  }

  //использует вышеуказанные возможности контекста
 const TagWithContext = () => {
    return (
      <>
        {(!GetContext().visible) ? (<p onClick={GetContext().toggle}>важное сообщение</p>) : false}
        <button onClick={GetContext().toggle}>Показать alert</button>
      </>
    )
  }


  return (
    // ContextLoader (фунция, возвращающая тег и принимающая обращение как тег) - помещает 
    // входящие теги в тег ContextSetter (с контекстом и стейтом, определяющем значения в нем)
    <ContextLoader>
      <TagWithContext />
    </ContextLoader>
  )


}

export default App;
