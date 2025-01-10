import { createContext, ReactNode, useState, useReducer } from "react";
import { Cycle, cyclesReducer, Action } from "../../pages/Reducers/Reducer";

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
    }) 

    const { cycles, isActive } = setCycles

    const [secondsComparesion, setSecondsComparesion] = useState(0)

    const existCycle = cycles.find((idCycle) => idCycle.id === isActive)

    function markCycleFinished() {
        dispatch({
            type: Action.MarkFinishedCyclesTask,
            payload: {
                isActive
            }
        })
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
        
        dispatch({
            type: Action.CreateNewTaskCycle,
            payload: {
                newCycle,
                isActive
            }
        })
        setChangingSeconds(0)
    }

    function StopCycle() {
        dispatch({
            type: Action.StopCycleTaks,
            payload: {
                isActive
            }
        })
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