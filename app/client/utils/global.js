import {combineReducers,bindActionCreators,compose} from 'redux';
import {connect} from 'react-redux';
import request from './request';

window.combineReducers = combineReducers;
window.bindActionCreators = bindActionCreators;
window.compose = compose;
window.connect = connect;
window.request = request;