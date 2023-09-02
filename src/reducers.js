const initState = {
    word0: ["","","","",""],
    word1: ["","","","",""],
    word2: ["","","","",""],
    word3: ["","","","",""],
    word4: ["","","","",""],
    input: "",
    wordpos: 0,
    pos: 0,
    focusProj: null,
    focusExper: null,
    letter: null,
    whiteletterpos: 0,
    whitewordpos: 0,
    badWords: [],
    yellowWords: [],
    greenWords: [],
    positionchange:0,
    newletter: null,
    failedGuess: false,
    failedGame: false,
    wonGame: false
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
        case 9: // 9 = change letter of positionchange tile in wordpos word.
            return {
                ...state,
                letter: action.letter,
                positionchange: action.positionchange
            };
        case 10: // 10 = position of white box.
            return {
                ...state,
                whiteletterpos: action.whiteletterpos,
                whitewordpos: action.whitewordpos
            };
        case 11: // 11 = add letter to bad_words
            let badWords = state.badWords;
            if (!badWords.includes(action.badWords)) {
                badWords.push(action.badWords);
            }
            return {
                ...state,
                badWords: badWords
            }
        case 12: // 12 = add letter to yellow_words
            let yellowWords = state.yellowWords;
            if (!yellowWords.includes(action.yellowWords)) {
                yellowWords.push(action.yellowWords);
            }
            return {
                ...state,
                yellowWords: yellowWords
            }
        case 13: // 13 = add letter to green_words
            let greenWords = state.greenWords;
            if (!greenWords.includes(action.greenWords)) {
                greenWords.push(action.greenWords);
            }
            return {
                ...state,
                greenWords: greenWords
            }
        case 14:
            // 14 = cursor moved.
            return {
                ...state,
                xPos:action.x_pos,
                yPos:action.y_pos
            };
        case 15:
            // 15 = store height of experience subtitle
            return {
                ...state,
                experienceHeight: action.experienceHeight
            };
        case 16:
            // 16 = store height of projects subtitle
            return {
                ...state,
                projectsHeight: action.projectsHeight
            };
        case 17:
            // 17 = store height of home subtitle
            return {
                ...state,
                homeHeight: action.homeHeight
            };
        case 18:
            return {
                ...state,
                focusProj: action.focusProj
            };
        case 19:
            return {
                ...state,
                focusExper: action.focusExper
            };
        case 20:
            return {
                ...state,
                newletter: action.newletter
            };
        case 21:
            return {
                ...state,
                failedGuess: action.failedGuess
            };
        case 22:
            return {
                ...state,
                failedGame: action.failedGame
            };
        case 23:
            return {
                ...state,
                wonGame: action.wonGame
            };
        default:
            return state;
    }
}

export default reducers