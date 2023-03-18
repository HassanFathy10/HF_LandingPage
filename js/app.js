/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//Variables 
const listOfItems = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const unOrderListId = document.getElementById("navbar__list");

listOfItems.forEach(function (section) {
    const list = document.createElement("li");
    const links = document.createElement("a");
    const IdElement = section.getAttribute("id");
    const textLink = section.getAttribute("data-nav");

    links.textContent = textLink;
    links.href = `#${IdElement}`;
    
// Scroll to anchor ID using scrollTO event
    
        links.addEventListener("click", function (event) {
        event.preventDefault();
            let currentId = event.target.attributes.href.value;
            
            let section = document.querySelector(currentId);
            
        section.scrollIntoView({
            behavior : "smooth",
        });
    });

// Add class 'active' to section when near top of viewport
    //here I use classlist to add  class
    links.classList.add("menu__link");

// then I add links to list
    list.appendChild(links)
// finally I add list to fragment
    fragment.appendChild(list)
    });

unOrderListId.appendChild(fragment);


/**
 * End Main Functions
 * Begin Events
 * 
*/
// I am using Element.getBoundingClientRect() instead of Intersection Observer
// Scroll to section on link click
// Set sections as active

// I add here active_link to highlight anchortag when i scroll to the section position
listOfLink = document.querySelectorAll("a.menu__link");
window.addEventListener("scroll", function (event) {
        listOfItems.forEach(function (section) {
            if (section.getBoundingClientRect().top >= -400 && section.getBoundingClientRect().top <= 250) {
                section.classList.add("your-active-class");
                // here we add active_link
                listOfLink.forEach(function (link) {
                    if (link.textContent === section.dataset.nav) { 
                        link.classList.add("active_link");
                    }
                    else {
                        link.classList.remove("active_link");
                    }
                });
        }
            else {
                section.classList.remove("your-active-class");
            }
        });

});

// Build menu 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("navbar__list");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".menu__link").forEach(link =>
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

// build click button
let btn = document.querySelector("button");
window.onscroll = function () {
    if (window.scrollY >= 300) {
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}
//**to cancel scrolling Horizontal I put her some orders to button */
btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
};
