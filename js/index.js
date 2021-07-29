/*- Імітуємо наповнення інтернет магазину товарами :
Створити форму з наступними полями :
- назва товару
- кількість товару
- ціна товару
- картинка товару (посилання з інтернету)
Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар*/
const form = document.forms.form;
const name = form.name;
const number = form.number;
const price = form.price;
const img = form.img;
const save = document.getElementById('btn');
save.onclick = function (ev) {
    let storage = [];
    ev.preventDefault();
    const storageJSON = localStorage.getItem('goods');
    if (storageJSON) {
        storage = JSON.parse(storageJSON);
    }
    storage.push({
        id: Math.random(),
        name: name.value,
        number: number.value,
        price: price.value,
        img: img.value
    })
    localStorage.setItem('goods', JSON.stringify(storage));
}
