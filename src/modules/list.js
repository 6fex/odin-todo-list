function createListDiv(name) {
    const listDiv = document.createElement("div");
    listDiv.textContent = name;

    return listDiv;
};

function activeList() {
    let list = "Today";

    function get() {
        return list;
    };

    function set(newList = "Today") {
        list = newList;
    };

    return { get, set }
};

export { createListDiv, activeList };
