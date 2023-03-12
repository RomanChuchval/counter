

type ActionsType =
    ReturnType<typeof incrementAC >
    | ReturnType<typeof resetCounterToStartValueAC >
    | ReturnType<typeof setStartValueAC >

export type CounterStateType = {
    count: number

}

const initialState: CounterStateType = {
    count: 0
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch(action.type) {
        case INCREMENT:
            return state.count < action.payload.maxNum ? {...state, count: state.count += 1} : {...state}
        case RESET_COUNT_TO_START_VALUE:
            return {...state, count: action.payload.startNum}
        case SET_START_VALUE:
            return {...state, count: action.payload.startValue}
        default:
            return state
    }
}

const INCREMENT = 'INCREMENT'
const RESET_COUNT_TO_START_VALUE = 'RESET_COUNT_TO_START_VALUE'
const SET_START_VALUE = 'SET_START_VALUE'

export const incrementAC = (maxNum: number) => {
    return {
        type: INCREMENT,
        payload: {
            maxNum
        }
    } as const
}

export const resetCounterToStartValueAC = (startNum: number) => {
    return {
        type: RESET_COUNT_TO_START_VALUE,
        payload: {
            startNum
        }
    } as const
}

export const setStartValueAC = (startValue: number) => {
    return {
        type: SET_START_VALUE,
        payload: {
            startValue
        }
    } as const
}