import { CounterResult } from "./CounterResult"
import {CounterBtn} from './CounterBtn'

export const Counter = () => {
    return (
        <>
            <CounterResult/>
            <CounterBtn step={2} calcType='+'/>
            <CounterBtn step={2} calcType='-'/>
            <CounterBtn step={10} calcType='+'/>
            <CounterBtn step={10} calcType='+'/>
        </>
    )
}