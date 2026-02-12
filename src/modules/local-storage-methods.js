export default {
    push(key, item) {
        const array = JSON.parse(localStorage.getItem(key));
        array.push(item);
        localStorage.setItem(key, JSON.stringify(array));
    },
    createArray(key) {
        localStorage.setItem(key, JSON.stringify([]));
    },
    getArray(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    isUnique(key, item) {
        const array = JSON.parse(localStorage.getItem(key));
        let unique = true;
        array.forEach(obj => {
            if(obj.name === item) {
                unique = false;
            };
        });
        return unique;
    }
};
