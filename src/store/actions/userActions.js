import userService from "../../services/UserService.service"

export function signup(name) {
    return async (dispatch) => {
        const user = await userService.signup(name)
        dispatch({ type: 'SET_LOGGEDIN_USER', user })
    }
}
export function getLoggedinUser() {
    return async (dispatch) => {
        const user = await userService.getLoggedinUser()
        dispatch({ type: 'SET_LOGGEDIN_USER', user })
    }
}