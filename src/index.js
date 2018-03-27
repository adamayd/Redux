import storeFactory from './store'
// import { 
//   addDay, 
//   removeDay, 
//   setGoal,
//   addError,
//   clearError,
//   changeSuggestions,
//   clearSuggestions } from './actions'
import { randomGoals } from './actions'

const store = storeFactory()

// store.dispatch(
//   addDay("Heavenly", "2016-12-22")
// )

// store.dispatch(
//   removeDay("2016-12-22")
// )

// store.dispatch(
//   setGoal(55)
// )

// store.dispatch(
//   addError("something went wrong")
// )

// store.dispatch(
//   clearError(0)
// )

// store.dispatch(
//   changeSuggestions(['One', 'Two', 'Three'])
// )

// store.dispatch(
//   clearSuggestions()
// )

store.dispatch(
  randomGoals()
)

// const initialState = (localStorage['redux-store']) ?
//   JSON.parse(localStorage['redux-store']) :
//   {}

// const saveState = () => {
//   const state = JSON.stringify(store.getState())
//   localStorage['redux-store'] = state
// }

// const store = storeFactory(initialState)

// store.subscribe(saveState)

// store.dispatch({
//   type: C.ADD_DAY,
//   payload: {
//     "resort": "Mt Shasta",
//     "date": "2016-10-28",
//     "powder": true,
//     "backcountry": true
//   }
// })
// store.dispatch({
//   type: C.ADD_DAY,
//   payload: {
//     "resort": "Squaw Valley",
//     "date": "2016-3-28",
//     "powder": true,
//     "backcountry": false
//   }
// })
// store.dispatch({
//   type: C.ADD_DAY,
//   payload: {
//     "resort": "Mt Shasta",
//     "date": "2016-1-28",
//     "powder": false,
//     "backcountry": true
//   }
// })