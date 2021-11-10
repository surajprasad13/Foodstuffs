import {combineReducers} from 'redux';

import themeReducer from './themeReducer';
import recipeReducer from './recipeReducer';
import foodReducer from './foodReducer';
//import firebaseReducer from './firebaseReducer';

export default combineReducers({
  theme: themeReducer,
  food: foodReducer,
  recipe: recipeReducer,
  //firebase: firebaseReducer,
});
