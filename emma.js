
// https://codepen.io/shooft/pen/MWyQwrG
var AddToCartButtons = document.querySelectorAll("button.add_to_cart");

AddToCartButtons[0].addEventListener("click", updateShoppingCart);
AddToCartButtons[1].addEventListener("click", updateShoppingCart);
AddToCartButtons[2].addEventListener("click", updateShoppingCart);
AddToCartButtons[3].addEventListener("click", updateShoppingCart);

function updateShoppingCart() {
    let shoppingCartAmount = document.querySelector("span");

    let currentAmount = shoppingCartAmount.innerHTML;

    currentAmount = parseInt(currentAmount);

    let newAmount = currentAmount + 1;

    shoppingCartAmount.innerHTML = newAmount;
}



const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   
    burger.addEventListener('click',() => {
         // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animatie nav links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }       
        });
    //hamburger Animatie
    burger.classList.toggle('toggle');
    }); 
}

navSlide();

