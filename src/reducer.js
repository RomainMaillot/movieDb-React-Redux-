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

// Create the reducer
export default function getMoviesInfoReducer(state = initialState, action) {
  switch (action.type) {
    case 'MOVIES':
      return {
        title: action.payload.data.title,
        date: action.payload.data.release_date,
        rate: action.payload.data.vote_average,
        coverLink: 'https://image.tmdb.org/t/p/original' + action.payload.data.poster_path,
        genres: action.payload.data.genres
      }
    case 'ERROR':
      return {
        title: 'No info',
        date: 'No info',
        rate: 'No info',
        coverLink: '#',
        genres: []
      }
    default:
      return state;
  }
}