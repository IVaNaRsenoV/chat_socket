import { MESSAGE, REMOVE_MESSAGE, STYLE_MESSAGE, ROOM } from './actions';

const initialValue = {
    messages: [], // Массив для номеров комнат и сообщений
    room: [], // Массив для комнат
    removedMessage: [], // Массив для номеров массива удалённых элементов
    style: ''
};

const REMOVED_POSITION_MESSAGE = 'REMOVED_POSITION_MESSAGE';

export const reducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case MESSAGE:
            return { ...state, messages: [...payload] };
        case REMOVE_MESSAGE:
            debugger;
            return { ...state, messages: [...state.messages.slice(0, payload), ...state.messages.slice(payload + 1)] };
        case STYLE_MESSAGE:
            return { ...state, style: payload }
        case ROOM:
            return { ...state, room: [...state.room, payload] };
        case REMOVED_POSITION_MESSAGE:
            return { ...state, removedMessage: [...payload] };
        default:
            return state;
    }
}