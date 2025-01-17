import { createContext, ReactNode, useState, useReducer, useEffect } from "react";
import { Cycle, cyclesReducer } from "../../pages/Reducers/Cycles/Reducer";
import { markCycleFinishedActions, StopCycleTaksActions, CreateNewTaskCycleActions } from "../../pages/Reducers/Actions/Actions";
import { differenceInSeconds } from "date-fns";

interface NewTaskCreate {
    task: string
    minute: number
}

interface CyclesContext {
    cycles: Cycle[]
    existCycle: Cycle | undefined
    isActive: number | null
    secondsComparesion: number
    markCycleFinished: () => void
    setChangingSeconds: (seconds: number) => void,
    StopCycle: () => void,
    SubmitfromServer: (data: NewTaskCreate) => void
}

export const CycleContext = createContext({} as CyclesContext)

interface ContextAPIProviderProps {
    children: ReactNode;
}

export function ContextAPIProvider({children}: ContextAPIProviderProps) {

    const [setCycles, dispatch] = useReducer(cyclesReducer, {
        cycles: [],
        isActive: null
    }, (inital) => {
        const cyclesJSON = localStorage.getItem('@ignite-timer:cycles-1.0.0')

        if(cyclesJSON) {
            return JSON.parse(cyclesJSON)
        }

        return inital
    }) 

    const { cycles, isActive } = setCycles

    useEffect(() => {
        const JSONCycles = JSON.stringify(cycles)
        localStorage.setItem('@ignite-timer:cycles-1.0.0', JSONCycles)
    }, [cycles])
    
    const existCycle = Array.isArray(cycles) ? cycles.find((idCycle) => idCycle.id === isActive) : undefined;
    
    const [secondsComparesion, setSecondsComparesion] = useState({
        if(existCycle) {
            return differenceInSeconds(new Date(), isActive.s)
        }
    })
    
    // const existCycle = cycles.find((idCycle) => idCycle.id === isActive)


    function markCycleFinished() {
        dispatch(markCycleFinishedActions())
    }

    function setChangingSeconds(seconds: number) {
        setSecondsComparesion(seconds) 
    }

    function SubmitfromServer(data: NewTaskCreate){
        const newCycle: Cycle = {
            id: new Date().getTime(),
            taskName: data.task,
            minute: data.minute,
            start: new Date(),
        }
        
        dispatch(CreateNewTaskCycleActions(newCycle))
        setChangingSeconds(0)
    }

    function StopCycle() {
        dispatch(StopCycleTaksActions())
    }

    return (
        <CycleContext.Provider 
            value={{
                cycles,
                existCycle, 
                isActive, 
                secondsComparesion, 
                markCycleFinished, 
                setChangingSeconds,
                StopCycle,
                SubmitfromServer
            }}>

            {children}
        </CycleContext.Provider>
    )
}