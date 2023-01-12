import * as types from "./actionType";

const initialState = {
  videos: [],
  video: {},
  loading: true,
};

const videosReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loading: false,
      };
    case types.DELETE_VIDEO:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_VIDEO:
      return {
        ...state,
        loading: false,
      };

    case types.UPDATE_VIDEO:
      return {
        ...state,
        loading: false,
      };

    case types.LOAD_VIDEO:
      return {
        ...state,
        video: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default videosReducers;
