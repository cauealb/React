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

interface StateProps {
    cycles: Cycle[]
    isActive: number | null
}

export function ContextAPIProvider({children}: ContextAPIProviderProps) {

    const [setCycles, dispatch] = useReducer((state: StateProps, action: any) => {

        switch(action.type) {
            case 'CreateNewTaskCycle':
                return {
                    ...state,
                    cycles: [...state.cycles, action.payload.newCycle],
                    isActive: action.payload.newCycle.id
                }

            case 'StopCycleTaks':
                return {
                    ...state,
                    cycles: state.cycles.map((item) => {
                        if(item.id === state.isActive) {
                            return {...item, stopDate: new Date()}
                        } else {
                            return item
                        }
                    }),
                    isActive: null
                }    
 
            case 'MarkFinishedCyclesTask':
                return {
                    ...state,
                    cycles: state.cycles.map((item) => {
                        if(item.id === state.isActive) {
                            return { ...item, finishDate: new Date()}
                        } else {
                            return item
                        }
                    }),
                    isActive: null
                }
            default: 
                return state
        }










        
        if(action.type === 'CreateNewTaskCycle') {
            return {
                ...state,
                cycles: [ ...state.cycles, action.payload.newCycle],
                isActive: action.payload.newCycle.id
            }
        }

        if(action.type === 'StopCycleTaks') {
            return {
                ...state,
                cycles: state.cycles.map((item) => {
                        if(item.id === state.isActive) {
                            return { ...item, stopDate: new Date()}
                        } else {
                            return item
                        }
                    }),
                isActive: null
            }
        }

        if (action.type === 'MarkFinishedCyclesTask') {
            return {
                ...state,
                cycles: state.cycles.map((item) => {
                    if(item.id === isActive) {
                        return { ...state, finishDate: new Date()}
                    }
                }),
                isActive: null
            }
        }

        return state
    }, {
        cycles: [],
        isActive: null
    })

    const { cycles, isActive } = setCycles

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
                newCycle,
                isActive
            }
        })
        // setCycles((state) => [...state, newCycle]):
        // setIsActive(newCycle.id)
        setChangingSeconds(0)
    }

    function StopCycle() {
        dispatch({
            type: 'StopCycleTaks',
            payload: {
                isActive
            }
        })
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