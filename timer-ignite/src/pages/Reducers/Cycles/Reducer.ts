import { produce } from 'immer'

export interface Cycle {
    id: number,
    taskName: string,
    minute: number,
    start: Date,
    stopDate?: Date,
    finishDate?: Date
}

interface StateProps {
    cycles: Cycle[]
    isActive: number | null
}

export enum Action {
    CreateNewTaskCycle = 'CreateNewTaskCycle',
    StopCycleTaks = 'StopCycleTaks',
    MarkFinishedCyclesTask = 'MarkFinishedCyclesTask'
}

export function cyclesReducer(state: StateProps, action: any) {
    switch(action.type) {
        case Action.CreateNewTaskCycle:
            return produce(state, draft => {
                draft.cycles.push(action.payload.newCycle)
                draft.isActive = action.payload.newCycle.id
            })

        case Action.StopCycleTaks:
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

        case Action.MarkFinishedCyclesTask:
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
}