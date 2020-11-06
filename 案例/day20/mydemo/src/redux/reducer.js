var arr = [{
    name: "xixi",
    age: 10
}]

export function data(state = arr[0].age, action) {
    switch (action.type) {
        case "ADD":
            return state + action.data;
            break;
        case "DEL":
            return state - action.data;
            break;
        default:
            return state
            break;
    }
}