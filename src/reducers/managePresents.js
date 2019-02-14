export function managePresents(state = initialState, action){

  let initialState = {
    numberOfPresents: 0
  }

  switch (action.type) {
    case "INCREASE":
      return (
      {...state, numberOfPresents: state.numberOfPresents + 1}
    )
    default:
      return state;
  }

}
