const initalState = {
    scale: 32,
}

function reducer (state=initalState, action) {
    switch(action.type) {
        case "SCALE_UP" : 
            return {...state, scale: state.scale + action.payload.num}
        case "SCALE_DOWN" : 
            return {...state, scale: state.scale - action.payload.num}
        default :
            return {...state}
    }
}

export default reducer;