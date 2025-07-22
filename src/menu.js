export default function () {
    const content = document.querySelector("#content");
    
    const headline = document.createElement("h1");
    headline.textContent = "Menu";
    
    const snacksMenu = document.createElement("ul");
    snacksMenu.textContent = "Snacks"
    const samosa = document.createElement("li");
    samosa.textContent = "Samosa";
    const dalpuri = document.createElement("li");
    dalpuri.textContent = "Dalpuri";
    const kachori = document.createElement("li");
    kachori.textContent = "Kachori";
    const alooBhuja = document.createElement("li");
    alooBhuja.textContent = "Aloo Dum Bhuja";
    snacksMenu.append(samosa, dalpuri, kachori, alooBhuja);


    const dairyMenu = document.createElement("ul");
    dairyMenu.textContent = "Dairy Items";
    const milk = document.createElement("li");
    milk.textContent = "Milk";
    const butter = document.createElement("li");
    butter.textContent = "Butter";
    const paneer = document.createElement("li");
    paneer.textContent = "Paneer";
    dairyMenu.append(milk, butter, paneer);

    const sweetsMenu = document.createElement("ul");
    sweetsMenu.textContent = "Sweets"
    const rasdana = document.createElement("li");
    rasdana.textContent = "Rasdana";
    const kajuKatli = document.createElement("li");
    kajuKatli.textContent = "kajuKatli";
    const gulabJamun = document.createElement("li");
    gulabJamun.textContent = "Gulab Jamun";
    const jalebi = document.createElement("li");
    jalebi.textContent = "Jalebi";
    sweetsMenu.append(rasdana, kajuKatli, gulabJamun, jalebi);

    content.replaceChildren(headline, snacksMenu, dairyMenu, sweetsMenu);
}