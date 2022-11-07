import { GET_COUNTRIES, GET_DETAILS, GET_ACTIVITIES, POST_ACTIVITIES, SEARCH_COUNTRIES, ORDER_BY_NAME, UPWARD, MAX_POPULATION, ORDER_BY_POPULATION } from '../../Const/Const'


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

    case ORDER_BY_NAME: {
      let orderByName = action.payload === UPWARD ? state.countries.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }) :
        state.countries.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        })
      return {
        ...state,
        countries: orderByName
      }
    }

    case ORDER_BY_POPULATION:
      let orderCountriesByPopulation = action.payload === MAX_POPULATION ? state.countries.sort((a, b) => {
        if (a.population < b.population) {
          return 1; 
        }
        if (a.population > b.population) {
          return -1;
        }
        return 0;
      }) :
        state.countries.sort((a, b) => {

          if (a.population < b.population) {
            return -1;
          }
          if (a.population > b.population) {
            return 1;
          }
          return 0;
        })

      return {
        ...state,
        countries: orderCountriesByPopulation
      }

    case POST_ACTIVITIES:
      return {
        ...state
      }

    default:
      return state;
  }
}