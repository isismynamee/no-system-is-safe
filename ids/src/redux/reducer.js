import * as actionType from './actionType'

const initialState = {
    user:{}
}

const User = (state = initialState, {type, payload}) => {
    switch(type){
        case actionType.POST:
            return{
                ...state,
                user:{
                    ...state.user,
                    ...state.update,
                    ...state.post,
                    ...state.get,
                    post: payload
                }
            }
        case actionType.GET:
            return{
                ...state,
                user:{
                    ...state.user,
                    ...state.update,
                    ...state.post,
                    ...state.get,
                    get: payload
                }
        }
        case actionType.UPDATE:
            return{
                ...state,
                user:{
                    ...state.user,
                    ...state.update,
                    ...state.post,
                    ...state.get,
                    update: payload
                }
        }
        case actionType.DELETE:
            return{
                ...state,
                user:{
                    ...state.user,
                    ...state.update,
                    ...state.post,
                    ...state.get,
                    delete: payload
                }
        }
        case actionType.RESET_USER:
            return initialState;
        default:
            return state
    }
}
export default User;