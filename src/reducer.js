 const initialState = {
    loading: false,
    data: {},
    error: null
  };
  
  export default function todosReducer(state = initialState, action) {
    switch (action.type) {
      case 'MOVIES':
        return action.payload.data.overview
      case 'MOVIES_TITLE':
        return action.payload.data.title;
      default:
        return state;
    }
  }