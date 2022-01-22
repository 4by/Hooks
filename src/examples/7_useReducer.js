import React, { useContext, useReducer } from "react"


function App() {

    // createContext создает тег с контекстом контекст
    const ContextSetter = React.createContext()

    // useContext считывает контекст
    const ContextGetter = () => {
        return useContext(ContextSetter)
    }

    // // Provider передает контекст, стейт хранит  состояние контекста
    const ContextLoader = ({ children }) => {

        
        const reducer = (state, action) => {
            switch (action.type) {
                case 'show': return { ...state, visible: true, text: action.text}
                case 'hide': return { ...state, visible: false }
                default: return state
            }
        }
        

        const [state, dispatch] = useReducer(reducer, {
            visible: true,
            text: ''
        })

        const show = text => dispatch({ type: 'show' })
        const hide = () => dispatch({ type: 'hide' })

        return (
            <ContextSetter.Provider value={{
                visible: state.visible,
                text: state.text,
                show, hide
            }}>
                {children}
            </ContextSetter.Provider>
        )

    }



    
    const TagWithContext = () => {
        return (
            <>
                {(ContextGetter().visible) ? (<p onClick={ContextGetter().hide}>важное сообщение</p>) : false}
                <button onClick={ContextGetter().show}>Показать alert</button>
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
