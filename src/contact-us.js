export default function (){
    const content = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";

    const email = document.createElement('p')
    email.textContent = "Email :\txyz@gmail.com";

    const phone = document.createElement('p');
    phone.textContent = "Phone Number :\t+91 1234567890";

    const addr = document.createElement('p');
    addr.textContent = "Address :\tAddressLine1, AddressLine2, City, State, Country, Pin Code";

    content.replaceChildren(headline, email, phone, addr);
}