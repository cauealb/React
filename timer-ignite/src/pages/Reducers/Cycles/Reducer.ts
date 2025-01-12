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

        case Action.StopCycleTaks: { 
            const findTaskStop = state.cycles.findIndex((item) => {
                return item.id === state.isActive
            })

            if(findTaskStop < 0){
                return state
            }

            return produce(state, draft => {
                draft.isActive = null
                draft.cycles[findTaskStop].stopDate = new Date()
            })
        }

        case Action.MarkFinishedCyclesTask:
            
            const findTaskStop = state.cycles.findIndex((item) => {
                return item.id === state.isActive
            })

            if(findTaskStop < 0) {
                return state
            }

            return produce(state, draft => {
                draft.isActive = null
                draft.cycles[findTaskStop].finishDate = new Date()
            })

        default: 
            return state
    }
}