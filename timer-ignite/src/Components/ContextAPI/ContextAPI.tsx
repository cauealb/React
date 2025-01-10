import { createContext, ReactNode, useState, useReducer } from "react";

interface NewTaskCreate {
    task: string
    minute: number
}

interface Cycle {
    id: number,
    taskName: string,
    minute: number,
    start: Date,
    stopDate?: Date,
    finishDate?: Date
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

    const [cycles, dispatch] = useReducer((state: Cycle[], action: any) => {
        
        if(action.type === 'CreateNewTaskCycle') {
            return [ ...state, action.payload.newCycle]
        }

        return state
    }, [])

    const [isActive, setIsActive] = useState<number | null>(null)
    const [secondsComparesion, setSecondsComparesion] = useState(0)

    const existCycle = cycles.find((idCycle) => idCycle.id === isActive)

    function markCycleFinished() {
        dispatch({
            type: 'MarkFinishedCyclesTask',
            payload: {
                isActive
            }
        })

        // setCycles(
        //     cycles.map((item) => {
        //     if (item.id === isActive){
        //         return {...item, finishDate: new Date()}
        //     } else {
        //         return item
        //     }
        // }))

        // setIsActive(null)
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
            type: 'CreateNewTaskCycle',
            payload: {
                newCycle
            }
        })
        // setCycles((state) => [...state, newCycle]):
        setIsActive(newCycle.id)
        setChangingSeconds(0)
    }

    function StopCycle() {
        dispatch({
            type: 'StopCycleTaks',
            payload: {
                isActive
            }
        })

        // setCycles(
        //     cycles.map((item) => {
        //         if(item.id === isActive) {
        //             return { ...item, stopDate: new Date()}
        //         } else {
        //             return item
        //         }
        //     })
        // )
        // setIsActive(null)
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