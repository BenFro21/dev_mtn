const pizzas = document.querySelectorAll('.pizza-item')
const recomendForm = document.querySelector('form')
const pizzaName = document.querySelector('#pizza-name')
const pizzaPicture = document.querySelector('#pizza-picture')
let pizzaDisplay = document.querySelector('#pizza-display')
let pizzaArr = [...pizzas]

const pizzaAlert = (evt) => {

}

const formSubmit = (evt) => {
    evt.preventDefault()
    let newSection = document.createElement('section')
    newSection.classList.add('pizzaItem')
    newSection.setAttribute('value', pizzaName)
    let newPizzaImg = document.createElement('img')
    newPizzaImg.setAttribute('src', pizzaPicture)
    newSection.appendChild(newPizzaImg)
    let pizzaTitle = document.createElement('p')
    pizzaTitle.setAttribute('value', pizzaName)
    pizzaTitle.textContent = pizzaName
    newSection.appendChild(pizzaTitle)
    pizzaDisplay.appendChild(newSection).in

}

pizzaArr.map(el => el.addEventListener('click', pizzaAlert))