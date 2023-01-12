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
        console.log(process.env.ASSIGNMENT_API);
        axios.get(`https://json-server-api-cz2f.onrender.com/videos`).then((resp)=>{
            console.log(resp.data);
            dispatch(getVideos(resp.data));
        }).catch(err => console.log(err));
    }
}

export const deleteVideo = (id) =>{
    return function(dispatch) {
        axios.delete(`https://json-server-api-cz2f.onrender.com/videos/${id}`).then((resp)=>{
            console.log(resp.data);
            dispatch(videoDeleted());
            dispatch(loadVideos());
        }).catch(err => console.log(err));
    }
}

export const addVideo = (video) =>{
    return function(dispatch) {
        axios.post(`https://json-server-api-cz2f.onrender.com/videos/`, video).then((resp)=>{
            console.log("resp", resp);
            dispatch(videoAdded());
            dispatch(loadVideos());
        }).catch(err => console.log(err));
    }
}

