export function itemize(mainArray, itemCommand) {
    return mainArray.map(itemCommand).join('');
}
export function mapper(obj) {
    let newObject = obj;
    return Object.keys(newObject).map(key => {
        newObject[key]['key'] = key;
        return newObject[key];
    });
}
