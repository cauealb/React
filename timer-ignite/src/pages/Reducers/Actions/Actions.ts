import { Action, Cycle } from "../Cycles/Reducer";

export function markCycleFinishedActions() {
    return {
        type: Action.MarkFinishedCyclesTask
    }
}

export function StopCycleTaksActions() {
    return {
        type: Action.StopCycleTaks
    }
}

export function CreateNewTaskCycleActions(newCycle: Cycle) {
    return {
        type: Action.CreateNewTaskCycle,
            payload: {
                newCycle,
        }
    }
}