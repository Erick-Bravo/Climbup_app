import { fetch } from './csrf.js';

const SET_GROUP_MEMBERS = 'groupMembers/setGroupMembers';

const setGroupMembers = (groupMembers) => ({
  type: SET_GROUP_MEMBERS,
  groupMembers
})


export const fetchGroupMembers = (groupId) => {
  return async(dispatch) => {
    const response = await fetch(`/api/groups/${groupId}/members`)
    dispatch(
      setGroupMembers(response.data.groupMembers)
    )
  }
}

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_GROUP_MEMBERS:
      newState = action.groupMembers;
      return newState;
    default:
      return state;
  }
}

export default reducer;
