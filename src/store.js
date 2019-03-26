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
export function fetchOffers(actionName) {
  return function action(dispatch) {

    const request = axios({
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/105?api_key=14d9718ae3a62634e2344c0596986a14`,
      headers: []
    });
    
    return request.then(
      response => dispatch(createData(response.data, actionName)),
      err => dispatch(err)
    );
  }
}

const createData = (data, action) => ({
  type: action,
  payload: {
    data: data,
    title: data.original_title
  }
});

// Get infos
store.dispatch(
  fetchOffers('MOVIES')
).then(() => {
  console.log('Done!');
});

// Export store
export default store;