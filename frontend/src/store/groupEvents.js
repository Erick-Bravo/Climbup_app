// import { fetch } from './csrf.js';

// const SET_GROUP_EVENTS = 'groupMembers/setGroupMembers';

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

// const initialState = [];

// function reducer(state = initialState, action) {
//   let newState;
//   switch (action.type) {
//     case SET_GROUP_EVENTS:
//       newState = action.groupEvents;
//       return newState;
//     default:
//       return state;
//   }
// }

// export default reducer;
