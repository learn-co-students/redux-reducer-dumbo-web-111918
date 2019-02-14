export function manageFriends(state = initialState, action){

  let initialState = {
    friends: []

  }

  switch (action.type) {
    case 'ADD_FRIEND':
    return (
    {...state, friends: [...state.friends, action.friend]}
  )
    case 'REMOVE_FRIEND':
    return (
      {...state, friends: [...state.friends.slice(0), action.friend]}
    )
    default:
     return state;
  }
}
