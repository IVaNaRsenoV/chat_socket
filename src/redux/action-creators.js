import { MESSAGE, ROOM, STYLE_MESSAGE } from "./actions"

export const messageActionCreator = (data) => {
    return { type: MESSAGE, payload: data }
}

export const roomActionCreator = (data) => {
    return { type: ROOM, payload: data }
}

export const styleMessageActionCreator = (data) => {
    return { type: STYLE_MESSAGE, payload: data };
}