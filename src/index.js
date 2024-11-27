import './style.css';
import {createMenu} from './menu.js';
// import {createContact} from './contact.js';
import {createHome} from './home.js';

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

menuBtn.addEventListener("click", () => {
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";
    contentContainer.appendChild(createMenu());
})

homeBtn.addEventListener("click", () => {
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";
    contentContainer.appendChild(createHome());
})