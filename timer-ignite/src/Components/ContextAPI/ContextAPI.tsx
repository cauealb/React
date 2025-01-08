import { createContext, useState } from "react";

interface NewTaskCreate {
    task: string
    minute: number
}

interface CyclesContext {
    existCycle: Cycle | undefined
    isActive: number | null
    secondsComparesion: number
    markCycleFinished: () => void
    setChangingSeconds: (seconds: number) => void,
    StopCycle: () => void,
    SubmitfromServer: (data: NewTaskCreate) => void
}

export const CycleContext = createContext({} as CyclesContext)

interface Cycle {
    id: number,
    taskName: string,
    minute: number,
    start: Date,
    stopDate?: Date,
    finishDate?: Date
}

export function ContextAPIProvider() {
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [isActive, setIsActive] = useState<number | null>(null)
    const [secondsComparesion, setSecondsComparesion] = useState(0)

    const existCycle = cycles.find((idCycle) => idCycle.id === isActive)

    function markCycleFinished() {
        setCycles(
            cycles.map((item) => {
            if (item.id === isActive){
                return {...item, finishDate: new Date()}
            } else {
                return item
            }
        }))
    }

    function setChangingSeconds(seconds: number) {
        setSecondsComparesion(seconds) 
    }

    function SubmitfromServer(data: NewTaskCreate){
        const newCycle: Cycle = {
            id: new Date().getTime(),
            taskName: data.task,
            minute: data.minute,
            start: new Date()
        }
        
        setCycles((state) => [...state, newCycle])
        setIsActive(newCycle.id)
        setChangingSeconds(0)
        
        // reset()
    }

    function StopCycle() {
        cycles.map((item) => {
            if (item.id === isActive){
                return {...item, stopDate: new Date()}
            } else {
                return item
            }
        })
        setIsActive(null)
    }

    return (
        <CycleContext.Provider 
            value={{
                existCycle, 
                isActive, 
                secondsComparesion, 
                markCycleFinished, 
                setChangingSeconds,
                StopCycle,
                SubmitfromServer
            }}>

        </CycleContext.Provider>
    )
}