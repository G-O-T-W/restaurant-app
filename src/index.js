// src/index.js
import './styles.css';
import load_homepage from './homepage.js';
import load_menu from './menu.js';
import load_contact from './contact-us.js';

load_homepage();

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact-us");

homeBtn.addEventListener("click", load_homepage);
menuBtn.addEventListener("click", load_menu);
contactBtn.addEventListener("click", load_contact);
