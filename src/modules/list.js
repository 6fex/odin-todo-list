function createListDiv(name) {
    const listDiv = document.createElement("div");
    listDiv.textContent = name;

    return listDiv;
};

export { createListDiv };
