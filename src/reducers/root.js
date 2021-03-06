// @flow weak
import { routerReducer }                 from 'react-router-redux';
import { combineReducers }               from 'redux';
import { reducer as reduxFormReducer }   from 'redux-form';
import views                             from './views';
import userAuth                          from './userAuth';
import admin                             from './admin';
import category                          from './category';
import skill                             from './skill';
import error                             from './error';

export const reducers = {
    views,
    userAuth,
    admin,
    category,
    skill,
    error,
};

export default combineReducers({
    ...reducers,
    routing: routerReducer,
    form: reduxFormReducer,
});
