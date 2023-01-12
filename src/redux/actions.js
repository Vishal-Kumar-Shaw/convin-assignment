import * as types from "./actionType";
import axios from "axios";

const getVideos = (videos) => ({
  type: types.GET_VIDEOS,
  payload: videos,
});

const videoDeleted = () => ({
  type: types.DELETE_VIDEO,
});

const videoAdded = () => ({
  type: types.ADD_VIDEO,
});

const videoUpdated = () => ({
  type: types.UPDATE_VIDEO,
});

const videoLoaded = (video) => ({
  type: types.LOAD_VIDEO,
  payload: video,
});

export const loadVideos = () => {
  return function (dispatch) {
    axios
      .get(process.env.REACT_APP_ASSIGNMENT_API)
      .then((resp) => {
        dispatch(getVideos(resp.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteVideo = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_ASSIGNMENT_API}/${id}`)
      .then(() => {
        dispatch(videoDeleted());
        dispatch(loadVideos());
      })
      .catch((err) => console.log(err));
  };
};

export const addVideo = (video) => {
  return function (dispatch) {
    axios
      .post(process.env.REACT_APP_ASSIGNMENT_API, video)
      .then(() => {
        dispatch(videoAdded());
        dispatch(loadVideos());
      })
      .catch((err) => console.log(err));
  };
};

export const updateVideo = ({ id, video }) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_ASSIGNMENT_API}/${id}`, video)
      .then(() => {
        dispatch(videoUpdated());
        dispatch(loadVideos());
      })
      .catch((err) => console.log(err));
  };
};

export const loadVideo = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_ASSIGNMENT_API}/${id}`)
      .then((resp) => {
        dispatch(videoLoaded(resp.data));
      })
      .catch((err) => console.log(err));
  };
};
