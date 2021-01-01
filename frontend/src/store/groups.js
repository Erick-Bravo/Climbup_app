import { fetch } from './csrf.js';

const SET_ALL_GROUPS = 'groups/setGroups';

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


const initialState = { user: null };

function reducer(state = initialState, action) {
      let newState;
      switch (action.type) {
        case SET_ALL_GROUPS:
          newState = action.groups;
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
