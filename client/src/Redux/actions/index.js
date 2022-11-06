import axios from 'axios';
import { GET_ACTIVITIES, GET_COUNTRIES, GET_DETAILS, POST_ACTIVITIES, SEARCH_COUNTRIES } from '../../Const/Const'


export function getCountries() {
    return async function (dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/countries')
            return dispatch({
                type: GET_COUNTRIES,
                payload: json.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function getDetails(id) {
    return async function (dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/countries/' + id)
            return dispatch({
                type: GET_DETAILS,
                payload: json.data
            });

        } catch {
            console.log('Error in Details Country')
        }
    }
}
export function getCountriesByName(search){
    return async function(dispatch){
        try{
            let json = await axios.get('http://localhost:3001/countries?name=' + search)
            return dispatch({
                type: SEARCH_COUNTRIES,
                payload: json.data
            })
        }catch{
            alert('The country was not found')
        }
    }

}

export function getActivities() {
    return async function (dispatch) {
        try {
            let json = await axios.get('http://localhost:3001/activities')
            return dispatch({
                type: GET_ACTIVITIES,
                payload: json.data
            });

        } catch {
            console.log('Error in get Activities')
        }
    }
}

export function postActivities(payload) {
    return async function (dispatch) {
        try {
            await axios.post('http://localhost:3001/activities/', payload)
            return dispatch({
                type: POST_ACTIVITIES,
            })

        } catch {
            console.log('Error in post activities')
        }
    }
}
