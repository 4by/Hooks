import { useState, useEffect} from "react";

export const ItemList = ({ getItems }) => {
     
    //этот стейт внутри фунции - рендер, который он вызовет не пере-рендерит элементы во внешней области
    const [itemsState, setItemsState] = useState([])
    
    //сработает если колбек (generateItemsFromAPI) была изменена (перерендерена)
    //поскольку функция в отдельном файле-она не перерендерится и прошлое состояние запоминает
    useEffect(() => {
        console.log('render')
        setItemsState(getItems)
    }, [getItems])
    
    return (<ul> {itemsState.map(i => <li key={i} > {i} </li>)} </ul>)
}

export default ItemList