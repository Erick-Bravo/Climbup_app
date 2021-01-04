import { fetch } from './csrf.js';

const SET_ALL_MEMBERS = 'members/setMembers';


const setAllMembers = (memberTables) => ({
    type: SET_ALL_MEMBERS,
    memberTables: memberTables,
})


export const fetchAllMemberTables = () => {
    return async(dispatch) => {
        const response = await fetch("/api/memberTables");
        dispatch(
            setAllMembers(response.data.memberTables)
        )
    }
}


const initialState = []

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_ALL_MEMBERS:
            newState = action.memberTables;
            return newState;
        default:
            return state
    }
}

export default reducer
