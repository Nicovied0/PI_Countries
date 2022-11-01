import axios from 'axios';
import { GET_ACTIVITIES, GET_COUNTRIES, GET_DETAILS } from '../../Const/Const'
// SEARCH_COUNTRIES, POST_ACTIVITIES 

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

export function getActivitys() {
    return async function (dispatch) {
        try {
            let json = await axios('http://localhost:3001/activities')
            return dispatch({
                type: GET_ACTIVITIES,
                payload: json.data
            })

        } catch {
            alert('No activities found')
            console.log('Error in get Activitys')
        }
    }
}
