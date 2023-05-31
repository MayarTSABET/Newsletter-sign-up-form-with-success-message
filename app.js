const form = document.querySelector('form');
const card_1 = document.querySelector('.container');
const card_2 = document.querySelector('.card');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    card_1.classList.add("hel");
    card_2.classList.remove("hel");
});