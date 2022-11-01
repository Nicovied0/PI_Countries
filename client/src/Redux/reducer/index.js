import { GET_COUNTRIES, GET_DETAILS, GET_ACTIVITIES } from '../../Const/Const'
// , SEARCH_COUNTRIES, POST_ACTIVITIES

const initialState = {
  countries: [],
  allCountries: [],
  details: [],
  activities: []
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
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      }

    default:
      return state;
  }
}