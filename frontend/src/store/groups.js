import { fetch } from './csrf.js';

//create action type
//create action creater
//create action creator thunk
//create reducer


const SET_ALL_GROUPS = 'groups/setGroups';
const SET_GROUP_MEMBERS = 'groups/setGroupMembers';
const ADD_MEMBER = "AddMember"
// const SET_GROUP_EVENTS = 'groupEvents';





//Actions creator that produces and object
const setGroups = (groups) => ({
  type: SET_ALL_GROUPS,
  groups: groups,
});

//Group
//Another Action creator that produces a thunk function
export const fetchAllGroups = () => {
  return async (dispatch) => {
    //Where you interact with your server
    const response = await fetch("/api/groups");
    dispatch(
      setGroups(response.data.groups)
    );
  };
};





//GroupMembers
const setGroupMembers = (members) => ({
  type: SET_GROUP_MEMBERS,
  members: members,
})

export const fetchGroupMembers = (groupId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/groups/${groupId}/members`);
    dispatch(
      setGroupMembers(response.data.members)
    )
  }
}

const addGroupMemberAC = (payload) => {
  return {
    type: ADD_MEMBER,
    payload
  }
}

export const addGroupMember = (groupId, userId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/groups/${groupId}/join-group`, {

    method: "POST",
    header: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({groupId, userId})
  }
    )
    dispatch(
      addGroupMemberAC(response.data.member)
    )
  }
}






//GroupEvents

// const setGroupEvents = (groupEvents) => ({
//   type: SET_GROUP_EVENTS,
//   groupEvents
// })

// export const fetchGroupEvents = (groupId) => {
//   return async(dispatch) => {
//     const response = await fetch(`/api/groups/${groupId}/events`)
//     dispatch(
//       setGroupEvents(response.data.groupEvents)
//     )
//   }
// }



// const initialState = { user: null };
const initialState = [];


function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_ALL_GROUPS:
      newState = Object.assign({}, state)
      newState = action.groups;
      return newState;
    case SET_GROUP_MEMBERS:
      newState = Object.assign({}, state)
      newState = action.members;
      return newState;
    // case SET_GROUP_EVENTS:
    //   newState = Object.assign({}, state)
    //   newState = action.members;
    //   return newState;
    case ADD_MEMBER:
      newState = Object.assign({}, state)
      newState.Users.push(action.payload)
      return newState
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
