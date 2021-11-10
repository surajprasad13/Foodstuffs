import {
  FETCH_SEARCH,
  FOOD_JOKE,
  LOADING,
  RANDOM_RECIPE,
  RECIPE_DETAIL,
  USER_VALUE,
} from '../action/types';

const initial_state = {
  loading: false,
  searchtext: '',
  search: [],
  joke: '',
  random: [],
  detail: null,
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: true};
    case USER_VALUE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
        loading: false,
      };
    case FOOD_JOKE:
      return {
        ...state,
        joke: action.payload,
      };
    case RANDOM_RECIPE:
      return {...state, random: action.payload};
    case RECIPE_DETAIL:
      return {...state, detail: action.payload};
    case FETCH_SEARCH:
      return {...state, search: action.payload, loading: false};
    default:
      return state;
  }
};
