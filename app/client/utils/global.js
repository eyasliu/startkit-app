import {combineReducers, bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import Constant from 'react-constant';
import _ from 'lodash';
import request from './request';

window.combineReducers = combineReducers;
window.bindActionCreators = bindActionCreators;
window.compose = compose;
window.connect = connect;
window.request = request;
window.Constant = Constant;
window.Component = React.Component;
window._ = _;