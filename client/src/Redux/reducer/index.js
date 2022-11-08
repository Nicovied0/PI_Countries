import { GET_COUNTRIES, GET_DETAILS, GET_ACTIVITIES, POST_ACTIVITIES, SEARCH_COUNTRIES, ORDER_BY_NAME, UPWARD, MAX_POPULATION, ORDER_BY_POPULATION, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITIES } from '../../Const/Const'


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

    case FILTER_BY_CONTINENT:
      const filtredByContinent = state.allCountries
      const continentFilteredBC = action.payload === 'All' ? filtredByContinent : filtredByContinent.filter(el => el.continent === action.payload)
      return {
        ...state,
        countries: continentFilteredBC
      }
    case FILTER_BY_ACTIVITIES:
      const filtredByActivities = state.allCountries
      const continentFilteredBA = filtredByActivities.filter((c) => { return c.activities.find((c) => { return c.name === action.payload; }); });

      if (action.payload === 'All') {
        return {
          ...state,
          countries: filtredByActivities
        }
      } else {
        return {
          ...state,
          countries: continentFilteredBA
        }
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