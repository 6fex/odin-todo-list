import { jsx } from "react/jsx-runtime";

export default function(){
    function push(key, item) {
        const array = JSON.parse(localStorage.getItem(key));
        array.push(item);
        localStorage.setItem(key, JSON.stringify(array));
    };

    return { push }
};
