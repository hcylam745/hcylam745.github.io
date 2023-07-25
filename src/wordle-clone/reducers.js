const initState = {
    word0: ["","","","",""],
    word1: ["","","","",""],
    word2: ["","","","",""],
    word3: ["","","","",""],
    word4: ["","","","",""],
    input: "",
    wordpos: 0,
    pos: 0
}

const reducers = (state = initState, action) => {
    switch(action.type) {
        case 0: // 0 = change word0.
            return {
                ...state,
                word0:action.word,
            };
        case 1: // 1 = change word1.
        return {
            ...state,
            word1:action.word,
        };
        case 2: // 2 = change word2.
        return {
            ...state,
            word2:action.word,
        };
        case 3: // 3 = change word3.
        return {
            ...state,
            word3:action.word,
        };
        case 4: // 4 = change word4.
        return {
            ...state,
            word4:action.word,
        };
        case 5: // 5 = change current input.
        return { 
            ...state,
            input:action.input,
        };
        case 6: // 6 = change wordpos.
        return {
            ...state,
            wordpos: action.wordpos,
        };
        case 7: // 7 = change pos.
        return {
            ...state,
            pos: action.pos,
        };
        case 8: // 8 = change colour of positionchange tile in wordpos word.
        return {
            ...state,
            colour: action.colour,
            positionchange: action.positionchange,
        };
        case 9: // 9 = tell website whether to update colours now or not.
        return {
            ...state,
            update: action.update
        }
        default:
            return state;
    }
}

export default reducers