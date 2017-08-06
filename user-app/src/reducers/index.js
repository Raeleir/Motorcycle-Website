let defaultState = {
    sports: [
        {
            make: "",
            model: "",
            msrp: 0,
            cc: 0,
            engine: ""
        }
    ]
};

const mainReducer = (state = defaultState, action) => {
    return action.type === "SET_DATA"
        ? { ...state, sports: action.data }
        : { ...state };
};

export default mainReducer;