import * as actionType from './actionType'

export const getData = (payload) => async(dispatch) => {
    dispatch({
        type: actionType.GET,
        payload
    })
}

export const postData = (payload) => async(dispatch) => {
    dispatch({
        type: actionType.POST,
        payload
    })
}

export const updateData = (payload) => async(dispatch) => {
    dispatch({
        type: actionType.UPDATE,
        payload
    })
}

export const deleteData = (payload) => async(dispatch) => {
    dispatch({
        type: actionType.DELETE,
        payload
    })
}

export const resetUser = () => async(dispatch) => {
    dispatch({
        type: actionType.RESET_USER
    })
}