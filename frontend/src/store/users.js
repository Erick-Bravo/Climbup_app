import { fetch } from './csrf.js';

const SET_ALL_USERS = 'users/setAllUsers';

//Actions creator that produces and object
const setUsers = (users) => ({
  type: SET_ALL_USERS,
  users: users,
});


//Another Action creator that produces a thunk function
export const fetchAllUsers = () => {
    return async(dispatch) => {
        //Where you interact with your server
        const response = await fetch("/api/users");
        dispatch(
            setUsers(response.data.users)
        );
    };
};


const initialState = [];

function reducer(state = initialState, action) {
      let newState;
      switch (action.type) {
        case SET_ALL_USERS:
          newState = action.users;
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
