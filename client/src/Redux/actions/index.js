import axios from 'axios';
import { GET_COUNTRIES, GET_DETAIL, GET_ACTIVITIES, SEARCH_COUNTRIES, POST_ACTIVITIES } from '../../Const/Const'

export function getCountries() {
  return async function (dispatch) {
    try {
      let json = await axios('http://localhost:3001/countries/')
      return dispatch({
        type: GET_COUNTRIES,
        payload: json.data
      })
    } catch {
      console.log('Error en get countries')

    }
  }
}