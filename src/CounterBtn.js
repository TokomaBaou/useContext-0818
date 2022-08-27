import { useCounterDispatch } from "./CounterContext"

export const CounterBtn = ({calcType,step}) => {
    // const dispatch = 
    const dispatch = useCounterDispatch();
    const clickHandler = () => {
        dispatch({type:calcType,step})
    }
    return <button onClick={clickHandler}>{calcType}{step}</button>
}