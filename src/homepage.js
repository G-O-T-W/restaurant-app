import Banner from './banner.png';

export default function () {
    const content = document.querySelector("#content");
    const headline = document.createElement("h1");
    const descr = document.createElement("p");
    const banner = new Image();
    headline.textContent = "Sardha Sweets";
    descr.textContent = "SARDHA SWEETS is a indian sweets shop located in Kalimpong, West Bengal. The average rating of this place is 5.00 out of 5 stars based on 32 reviews. The street address of this place is Relli Rd, Kalimpong, West Bengal 734301, India."
    banner.src = Banner;

    content.replaceChildren(headline, banner, descr);
}