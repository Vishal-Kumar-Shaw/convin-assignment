import {combineReducers} from 'redux';
import videosReducers from './reducer';

const rootReducer = combineReducers({
    videos: videosReducers
})


export default rootReducer;