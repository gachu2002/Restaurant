import burger from './burger.jpg';
import pizza from './pizza.jpg';
import pasta from './pasta.jpg';
import salad from './salad.jpg';
import sushi from './sushi.jpg';
import steak from './steak.jpg';

class MenuItem {
    constructor(imageSrc, name, price) {
        this.imageSrc = imageSrc;
        this.name = name;
        this.price = price;
    }
}

const menuItems = [
    new MenuItem(burger, "Burger", 10),
    new MenuItem(pizza, "Pizza", 15),
    new MenuItem(pasta, "Pasta", 12),
    new MenuItem(salad, "Salad", 8),
    new MenuItem(sushi, "Sushi", 18),
    new MenuItem(steak, "Steak", 20),
];

const createMenuItemElement = function(item) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    const image = document.createElement("img");
    image.src = item.imageSrc;
    const name = document.createElement("h2");
    name.textContent = item.name;
    const price = document.createElement("p");
    price.textContent = `$${item.price}`;

    menuItem.appendChild(image);
    menuItem.appendChild(name);
    menuItem.appendChild(price);

    return menuItem;
}

const createMenuContainerElement = function() {
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menu");
    menuContainer.classList.add("disabled");
    return menuContainer;
}

const createMenu = function() {
    const menuContainer = createMenuContainerElement();
    menuItems.forEach(item => {
        const menuItem = createMenuItemElement(item);
        menuContainer.appendChild(menuItem);
    });
    return menuContainer;
}

const showMenu = function() {
    const menuContainer = document.querySelector("#menu");
    menuContainer.classList.remove("disabled");
}

const hideMenu = function() {
    const menuContainer = document.querySelector("#menu");
    menuContainer.classList.add("disabled");
}

export { createMenu, showMenu, hideMenu };
