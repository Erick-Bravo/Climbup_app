import { fetch } from './csrf.js';

const SET_ALL_EVENTS = 'events/setEvents';

//Actions creator that produces and object
const setEvents = (events) => ({
  type: SET_ALL_EVENTS,
  events: events,
});


//Another Action creator that produces a thunk function
export const fetchAllEvents = () => {
    return async(dispatch) => {
        //Where you interact with your server
        const response = await fetch("/api/events");
        dispatch(
            setEvents(response.data.events)
        );
    };
};


const initialState = [];

function reducer(state = initialState, action) {
      let newState;
      switch (action.type) {
        case SET_ALL_EVENTS:
          newState = action.events;
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
