import axios from 'axios';
import { GET_COUNTRIES } from '../../Const/Const'
// , GET_DETAIL, GET_ACTIVITIES, SEARCH_COUNTRIES, POST_ACTIVITIES 

export function getCountries() {
  return async function (dispatch) {
      try {
          var json = await axios.get('http://localhost:3001/countries')
          return dispatch({
              type: GET_COUNTRIES,
              payload: json.data
          });
      } catch (error) {
          console.log(error)
      }
  }
}