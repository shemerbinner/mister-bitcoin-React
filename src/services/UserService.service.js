import { storageService } from "./storageService.service"

export default {
    getLoggedinUser,
    signup
}

const USERS_KEY = 'users';
const LOGGEDIN_USER_KEY = 'loggedin user'
var gUsers = storageService.load(USERS_KEY) || [];

function getLoggedinUser() {

    var user = storageService.load(LOGGEDIN_USER_KEY)
    if (!user) {
        user = {
            name: 'Shemer Binner',
            coins: 300,
            isAdmin: true,
            moves: []
        }
        storageService.store(LOGGEDIN_USER_KEY, user)
    }
    return user
}

async function signup({ name }) {
    var user = gUsers.find(user => user.name === name)
    if (!user) {
        user = {
            name,
            coins: 100,
            moves: []
        }
        gUsers.push(user)
        storageService.store(USERS_KEY, gUsers)
    }
    storageService.store(LOGGEDIN_USER_KEY, user)
    return user
}