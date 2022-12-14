import {  fetchDriversError, fetchDriversPending, fetchDriversSuccess } from "../redux/actions/drivers.actions";

function fetchDrivers(query) {
    return function (dispatch) {
        dispatch(fetchDriversPending());
        fetch(`https://ergast.com/api/f1/drivers.json?limit=10&offset=${query}`)
            .then(res => res.json())
            .then(data => {
                dispatch(fetchDriversSuccess(data.MRData))
                return data;
            })
            .catch(error => {
                dispatch(fetchDriversError(error));
            })
    }

}

export default fetchDrivers;