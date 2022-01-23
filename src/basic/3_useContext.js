import React, { useState, useContext, createContext } from "react"


function App() {

  // createContext создает тег с контекстом контекст
  const ContextSetter = createContext()

  // useContext считывает контекст
  const ContextGetter = () => {
    return useContext(ContextSetter)
  }

  // Provider передает контекст, стейт хранит состояние контекста
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
        {(!ContextGetter().visible) ? (<p onClick={ContextGetter().toggle}>важное сообщение</p>) : false}
        <button onClick={ContextGetter().toggle}>Показать alert</button>
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
