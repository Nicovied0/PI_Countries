import { GET_COUNTRIES, GET_DETAILS } from '../../Const/Const'
// GET_DETAIL, GET_ACTIVITIES, SEARCH_COUNTRIES, POST_ACTIVITIES

const initialState = {
  countries: [],
  allCountries: [],
  details: []
}

export default function rootReducer(state = initialState, action) {

  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload
      }
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload
      }

    default:
      return state;
  }
}