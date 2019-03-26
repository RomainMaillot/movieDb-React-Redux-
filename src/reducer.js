 const initialState = {
    loading: false,
    data: {},
    error: null
  };
  
  // export default function todosReducer(state = initialState, action) {
  //   switch (action.type) {
  //     case 'MOVIES_TITLE':
  //       return action.payload.data.title;
  //     case 'MOVIES_YEAR':
  //       return action.payload.data.release_date;
  //     case 'MOVIES_RATING':
  //       return action.payload.data.vote_average;
  //     default:
  //       return state;
  //   }
  // }

  export default function getMoviesInfoReducer(state = initialState, action) {
    switch (action.type) {
      case 'MOVIES':
        return {
          title: action.payload.data.title,
          date: action.payload.data.release_date,
          rate: action.payload.data.vote_average,
          coverLink: action.payload.data.poster_path
        }
      default:
        return state;
    }
  }