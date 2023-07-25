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
            // 1 = store height of experience subtitle
            return {
                ...state,
                experienceHeight: action.experienceHeight
            }
        case 2:
            // 2 = store height of projects subtitle
            return {
                ...state,
                projectsHeight: action.projectsHeight
            }
        default:
            return state;
    }
}

export default reducers