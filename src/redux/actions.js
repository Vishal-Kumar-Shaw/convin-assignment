import * as types from './actionType';
import axios from 'axios';

const getVideos = (videos)=>({
    type: types.GET_VIDEOS,
    payload: videos,
});
       
const videoDeleted = () =>({
    type: types.DELETE_VIDEO

})

const videoAdded = () =>({
    type: types.ADD_VIDEO

})

export const loadVideos = () =>{
    return function(dispatch) {
        axios.get(`http://localhost:5000/videos`).then((resp)=>{
            console.log(resp.data);
            dispatch(getVideos(resp.data));
        }).catch(err => console.log(err));
    }
}

export const deleteVideo = (id) =>{
    return function(dispatch) {
        axios.delete(`http://localhost:5000/videos/${id}`).then((resp)=>{
            console.log(resp.data);
            dispatch(videoDeleted());
            dispatch(loadVideos());
        }).catch(err => console.log(err));
    }
}

export const addVideo = (video) =>{
    return function(dispatch) {
        axios.post(`http://localhost:5000/videos/`, video).then((resp)=>{
            console.log("resp", resp);
            dispatch(videoAdded());
            dispatch(loadVideos());
        }).catch(err => console.log(err));
    }
}

