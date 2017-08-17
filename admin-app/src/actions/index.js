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

export function addData(data) {
    return (dispatch) => {
        return axios.post(`/bikes/`, data).then((response) => {
            dispatch(loadData());
        }).catch((err) => {
            throw err;
        })
    }
}

export function updateData(id, data) {
    return (dispatch) => {
        return axios.put(`bikes/${id}`, data).then((response) => {
            dispatch(loadData());
        }).catch((err) => {
            throw err;
        })
    }
}

export function deleteData(id) {
    return (dispatch) => {
        return axios.delete(`/bikes/${id}`).then((response) => {
            dispatch(loadData());
        }).catch((err) => {
            throw err;
        })
    }
}