import {createContext,useContext,useReducer} from 'react';

const CounterContext = createContext();
const CounterDispatchContext = createContext();


const CounterProvider = (props) => {
    const props = {children}
    
    const step = (prev,{type,step}) => {
        switch (type){
            case '+':
            return prev + step;
            case '-':
            return prev - step;
            default:
            throw new Error('error')
        }
    }
    
    const [state,dispatch] = useReducer(step,0);
    
    
    return (
        <CounterContext.Provider value={state}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </CounterContext.Provider>
    )
}

const useCounter = () => {
    return useContext(CounterContext);
}

const useCounterDispatch = () => {
    return useContext(CounterDispatchContext);
}

export {CounterProvider,useCounter,useCounterDispatch}