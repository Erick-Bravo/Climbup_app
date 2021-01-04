import { fetch } from './csrf.js';

const SET_ALL_GROUPS = 'groups/setGroups';
const SET_GROUP_MEMBERS = 'groups/setAllGroupMembers';

//Actions creator that produces and object
const setGroups = (groups) => ({
  type: SET_ALL_GROUPS,
  groups: groups,
});


//Another Action creator that produces a thunk function
export const fetchAllGroups = () => {
    return async(dispatch) => {
        //Where you interact with your server
        const response = await fetch("/api/groups");
        dispatch(
            setGroups(response.data.groups)
        );
    };
};

const setGroupMembers = (members) => ({
  type: SET_GROUP_MEMBERS,
  members: members,
})

export const fetchGroupMembers = (groupId) => {
  return async(dispatch) => {
    const response = await fetch(`/api/groups/${groupId}/members`);
    dispatch(
      setGroupMembers(response.data.members)
    )
  }
}




// const initialState = { user: null };
const initialState = [];


function reducer(state = initialState, action) {
      let newState;
      switch (action.type) {
        case SET_ALL_GROUPS:
          newState = action.groups;
          return newState;
        case SET_GROUP_MEMBERS:
          newState = action.members;
          return newState;
        default:
          return state;
      }

      // saying the same as this
    // if(action.type === SET_ALL_GROUPS) {
    //     return action.groups
    // }
    // return state
}

export default reducer;
