
const INITIAL_STATE = {
    contacts: null,
    filterBy: null
}

export function contactReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_CONTACTS':

            return {
                ...state,
                contacts: action.contacts
            };
        case 'REMOVE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.contactId)
            }
        case 'SET_FILTER_BY':

            return {
                ...state,
                filterBy: { ...action.filterBy }
            };

        default:
            return state;
    }
}