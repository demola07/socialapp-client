import {
  SET_SCREAMS,
  LOADING_DATA,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  DELETE_SCREAM,
  POST_SCREAM
} from '../types';

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
      let index1 = state.screams.findIndex(scream => scream.screamId === payload);
      state.screams.splice(index1, 1);
      return {
        ...state
      };
    case POST_SCREAM:
      return {
        ...state,
        screams: [payload, ...state.screams]
      };
    default:
      return state;
  }
}
