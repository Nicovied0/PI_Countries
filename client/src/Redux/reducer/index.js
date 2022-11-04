import { GET_COUNTRIES, GET_DETAILS, GET_ACTIVITIES, POST_ACTIVITIES, SEARCH_COUNTRIES } from '../../Const/Const'


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

    case SEARCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload
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

    case POST_ACTIVITIES:
      return {
        ...state
      }

    default:
      return state;
  }
}