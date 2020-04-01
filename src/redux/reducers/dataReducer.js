import {
  SET_SCREAMS,
  LOADING_DATA,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_SCREAM,
  SUBMIT_COMMENT
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
    case SET_SCREAM:
      return {
        ...state,
        scream: payload
      };
    case LIKE_SCREAM:
      let index = state.screams.findIndex(scream => scream.screamId === payload.screamId);
      state.screams[index] = payload;
      if (state.scream.screamId === payload.screamId) {
        state.scream.likeCount++;
        state.scream = { ...state.scream, payload };
      }
      return {
        ...state
      };

    case UNLIKE_SCREAM:
      let index2 = state.screams.findIndex(scream => scream.screamId === payload.screamId);
      state.screams[index2] = payload;

      if (state.scream.screamId === payload.screamId) {
        state.scream.likeCount--;

        state.scream = { ...state.scream, payload };
      }
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
    case SUBMIT_COMMENT:
      return {
        ...state,
        scream: {
          ...state.scream,
          comments: [payload, ...state.scream.comments],
          commentCount: state.scream.commentCount + 1
        }
      };
    default:
      return state;
  }
}
