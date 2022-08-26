import { useCounter } from "./CounterContext"
import {useCounter} from './CounterContext'

export const CounterResult = () => {
    const state = useCounter();
    return <h3>{state}</h3>
}