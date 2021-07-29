let listDiv = document.getElementById('listDiv');
let deleteAll = document.createElement('button');
deleteAll.innerText = 'Delete All';
listDiv.appendChild(deleteAll);
let storage = JSON.parse(localStorage.getItem('goods')) || [];
for (const storageElement of storage) {
    const elementDiv = document.createElement('div');
    const elemName = document.createElement('div');
    const elemNumber = document.createElement('div');
    const elemPrice = document.createElement('div');
    const elemImage = document.createElement('img');
    const deleteElem = document.createElement('button');
    elemImage.src = storageElement.img;
    elemName.innerText = `Назва товару: ${storageElement.name}`;
    elemNumber.innerText = `Кількість товару: ${storageElement.number}`;
    elemPrice.innerText = `Ціна товару: ${storageElement.price}`;
    deleteElem.innerText = 'Delete';
    elementDiv.append(elemName, elemNumber, elemPrice, elemImage, deleteElem);
    listDiv.appendChild(elementDiv);
    deleteElem.onclick = function () {
        deleteEl(storageElement.id)
    }
    const deleteEl = (id) => {
        storage = storage.filter((value) => value.id !== id)
        localStorage.setItem('goods', JSON.stringify(storage));
        elementDiv.innerHTML = '';
        if (!storage.length) {
            listDiv.innerText = 'list is empty'
        }
    }
}

deleteAll.onclick = function () {
    localStorage.clear();
    listDiv.innerText = 'list is empty'
}