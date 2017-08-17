const defaultState = {
    bikes: [
        {
            pic: "",
            make: "",
            model: "",
            msrp: 0,
            cc: 0,
            engine: "",
            link: "",
            category: ""
        }
    ]
};

const mainReducer = (state = defaultState, action) => {
    return action.type === "SET_DATA"
        ? { ...state, bikes: action.data }
        : { ...state };
};

export default mainReducer;