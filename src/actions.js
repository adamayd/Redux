import C from './constants'

export function addDay(resort, date, powder=false, backcountry=false) {

  return {
    type: C.ADD_DAY,
    payload: {resort, date, powder, backcountry}
  }
}

export const removeDay = function(date) {
  
  return {
    type: C.REMOVE_DAY,
    payload: date
  }
}

export const setGoal = (goal) =>
  ({
    type: C.SET_GOAL,
    payload: goal 
  })

export const addError = (err) =>
  ({
    type: C.ADD_ERROR,
    payload: err
  })

export const clearError = (idx) =>
  ({
    type: C.CLEAR_ERROR,
    payload: idx
  })

export const changeSuggestions = (suggs) =>
  ({
    type: C.CHANGE_SUGGESTIONS,
    payload: suggs
  })

export const clearSuggestions = () =>
  ({
    type: C.CLEAR_SUGGESTIONS
  })

export const randomGoals = () => (dispatch, getState) => {

  if (!getState().resortNames.fetching) {
    dispatch({
      type: C.FETCH_RESORT_NAMES
    })
  
    setTimeout(() => {
      dispatch({
        type: C.CANCEL_FETCHING
      })
    }, 1500)
  }
}