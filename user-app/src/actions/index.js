import axios from "axios";

export function setData(data) {
    return {
        type: "SET_DATA",
        data
    }
}

export function loadData() {
    return (dispatch) => {
        return axios.get("/bikes/").then((response) => {
            dispatch(setData(response.data.data));
        }).catch((err) => {
            throw err;
        })
    }
}