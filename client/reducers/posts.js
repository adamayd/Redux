// a reducer takes in two things

// 1. the action (info about what happened)

// 2. a copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('incrementing likes');
      console.log(state, action)
      const index = action.index;
      return [
        ...state.slice(0,index), //before the one we are updating
        {...state[index], likes: state[index].likes + 1},
        ...state.slice(index + 1), //after the one we are updating
      ]
    // return the updated state
    default:
      return state;
  }
  return state;
}

export default posts;