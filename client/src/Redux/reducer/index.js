import { RESET_PAGE, RESET_PAGE_POST, PAGE_BACK, RESET_COUNTRIES, GET_COUNTRIES, ORDER_BY_AREA, GET_DETAILS, CLEAR_DETAILS, GET_ACTIVITIES, POST_ACTIVITIES, SEARCH_COUNTRIES, ORDER_BY_NAME, UPWARD, MAX_POPULATION, ORDER_BY_POPULATION, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITIES, MAX_TO, MAX_AREA } from '../../Const/Const'


const initialState = {
  countries: [],
  allCountries: [],
  details: [],
  activities: [],
  pageBack: 1
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
      let countries = state.countries
      let allCountries = state.allCountries
      if (countries.length !== []) {
        return {
          ...state,
          countries: action.payload
        }
      } else {
        return {
          ...state,
          countries: allCountries
        }
      }



    case GET_DETAILS:
      return {
        ...state,
        details: action.payload
      }
    case CLEAR_DETAILS:
      return {
        ...state,
        details: []
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


    case ORDER_BY_AREA:
      let orderCountriesByArea = action.payload === MAX_AREA ? state.countries.sort((a, b) => {
        if (a.area < b.area) {
          return 1;
        }
        if (a.area > b.area) {
          return -1;
        }
        return 0;
      }) :
        state.countries.sort((a, b) => {

          if (a.area < b.area) {
            return -1;
          }
          if (a.area > b.area) {
            return 1;
          }
          return 0;
        })

      return {
        ...state,
        countries: orderCountriesByArea
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

    // 
    case MAX_TO:
      const filterMaxToM = state.allCountries
      const countriesFilterBTM = action.payload === MAX_TO ? filterMaxToM.filter((c) => { return c.population >= 100000 }) :
        filterMaxToM.filter((c) => { return c.population <= 100000 })
      return {
        ...state,
        countries: countriesFilterBTM
      }

    case RESET_COUNTRIES: {
      return {
        ...state,
        countries: []
      }
    }

    ////

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      }

    case POST_ACTIVITIES:
      return {
        ...state
      }


    case RESET_PAGE:
      return {
        ...state,
        countries: state.allCountries,
        pageBack: 1
      }

    case RESET_PAGE_POST:
      return {
        ...state,
        countries: []
      }

    case PAGE_BACK:
      return {
        ...state,
        pageBack: action.payload
      }


    default:
      return state;
  }
}