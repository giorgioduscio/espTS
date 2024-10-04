const url = 'https://list-89d05-default-rtdb.europe-west1.firebasedatabase.app/todos';
// TODO GET
export function getList(showFunction) {
    fetch(`${url}.json`)
        .then(r => r.json())
        .then(r => showFunction(r))
        .catch(e => console.log("catch:", e));
}
// TODO AGGIUNGI
export function postList(listEl) {
    fetch(`${url}.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(listEl)
    })
        .then(r => r.json())
        .then(r => {
        console.log('postList', listEl);
    });
}
// TODO MODIFICA
export function patchList(elemKey, listEl) {
    fetch(`${url}/${elemKey}.json`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(listEl)
    })
        .then(r => r.json())
        .then(r => {
        console.log('postList', elemKey, listEl);
    });
}
// TODO ELIMINA
export function deleteList(elemKey) {
    fetch(`${url}/${elemKey}.json`, { method: 'DELETE' })
        .then(r => r.json())
        .then(r => {
        console.log('postList', elemKey);
    });
}
