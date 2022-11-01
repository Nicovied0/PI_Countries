import { GET_COUNTRIES } from '../../Const/Const'
// GET_DETAIL, GET_ACTIVITIES, SEARCH_COUNTRIES, POST_ACTIVITIES

const initialState = {
  countries: [],
  allCountries: [],
}

export default function rootReducer(state = initialState, action) {

  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload
      }

    default:
      return state;
  }
}