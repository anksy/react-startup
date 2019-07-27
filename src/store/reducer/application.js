let initialState = {
    "title": "React App"
}

export default function application(state=initialState, action){
    switch(action.type){
        case "hello-world":
            return {...state, "title": "Hello World"};
        default:
            return state;
    }
}