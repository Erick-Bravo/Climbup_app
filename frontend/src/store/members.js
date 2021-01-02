import { fetch } from './csrf.js';

const SET_ALL_MEMBERS = 'users/setAllMembers';

//Actions creator that produces and object
const setMembers = (members) => ({
  type: SET_ALL_MEMBERS,
  members: members,
});


//Another Action creator that produces a thunk function
export const fetchAllMembers = () => {
    return async(dispatch) => {
        //Where you interact with your server
        const response = await fetch("/api/members");
        dispatch(
            setMembers(response.data.members)
        );
    };
};


const initialState = [];

function reducer(state = initialState, action) {
      let newState;
      switch (action.type) {
        case SET_ALL_MEMBERS:
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
