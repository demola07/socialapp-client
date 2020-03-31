import { SET_SCREAMS, LOADING_DATA, LIKE_SCREAM, UNLIKE_SCREAM, DELETE_SCREAM } from '../types';

const initialState = {
  screams: [],
  scream: {},
  loading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_SCREAMS:
      return {
        ...state,
        screams: payload,
        loading: false
      };
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      let index = state.screams.findIndex(scream => scream.screamId === payload.screamId);
      state.screams[index] = payload;
      return {
        ...state
      };
    case DELETE_SCREAM:
      let indexX = state.screams.findIndex(scream => scream.screamId === payload);
      state.screams.splice(indexX, 1);
      return {
        ...state
      };

    default:
      return state;
  }
}
