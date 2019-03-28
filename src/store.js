// Import deppedencies
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

// Create store
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// Function to fetch api
export function fetchOffers(actionName, key) {
  return function action(dispatch) {

    const request = axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${key}?api_key=14d9718ae3a62634e2344c0596986a14`,
      headers: []
    });
    
    return request.then(
      response => dispatch(createData(response.data, actionName)))
      .catch(err => dispatch(createError('ERROR')))
  }
}

// Functions to handle response or error
const createData = (data, action) => ({
  type: action,
  payload: {
    data: data
  }
});

const createError = (action) => ({
  type: action
})

// Get infos
store.dispatch(
  fetchOffers('MOVIES', 105)
).then(() => {
  console.log('Done!');
});

// Export store
export default store;