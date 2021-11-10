import React from 'react';

import food from '../../api';

import {
  FOOD_JOKE,
  FETCH_SEARCH,
  LOADING,
  USER_VALUE,
  RANDOM_RECIPE,
  RECIPE_DETAIL,
} from './types';

const userValue = ({prop, value}) => {
  return {
    type: USER_VALUE,
    payload: {prop, value},
  };
};

const fetchJoke = () => async dispatch => {
  try {
    const response = await food.get('food/jokes/random');
    dispatch({type: FOOD_JOKE, payload: response.data.text});
  } catch (error) {
    throw error;
  }
};

const fetchRandomRecipe = () => async dispatch => {
  try {
    const response = await food.get('recipes/random?number=10');
    dispatch({type: RANDOM_RECIPE, payload: response.data.recipes});
  } catch (error) {
    throw error;
  }
};

const fetchRecipeDetail = id => async dispatch => {
  try {
    const response = await food.get(`recipes/${id}/information`);

    dispatch({type: RECIPE_DETAIL, payload: response.data});
  } catch (error) {
    throw error;
  }
};

const fetchSearch = text => async dispatch => {
  try {
    dispatch({type: LOADING});
    const response = await food.get('recipes/complexSearch', {
      params: {
        query: text,
      },
    });
    dispatch({type: FETCH_SEARCH, payload: response.data.results});
  } catch (e) {
    throw e;
  }
};

export {
  userValue,
  fetchJoke,
  fetchRandomRecipe,
  fetchRecipeDetail,
  fetchSearch,
};
