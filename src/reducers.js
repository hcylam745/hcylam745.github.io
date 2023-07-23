const initState = {
    
}

const reducers = (state = initState, action) => {
    switch(action.type) {
        case 0:
            // 0 = cursor moved.
            return {
                ...state,
                xPos:action.x_pos,
                yPos:action.y_pos
            }
        case 1:
            // for page height calculations.
            return {
                ...state,
                height:action.height
            }
        default:
            return state;
    }
}

export default reducers