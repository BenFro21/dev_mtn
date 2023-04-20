

console.log('connected')

const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')

const baseURL = 'http://127.0.0.1:4000';


function createCharacterCard(char) {
  let charCard = document.createElement('div')
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  charContainer.appendChild(charCard)
}

function clearCharacters() {
  charContainer.innerHTML = ``
}

let getAllChars = () => {
  axios.get(`${baseURL}/characters`)
  .then(res => {
    console.log(res.data)
    // the line below so you dont just adding data everytime you hit get all chars button
    clearCharacters()
    res.data.map(char => {
      createCharacterCard(char)
    })
  })
  .catch(err => console.log(err))
}

const getSingleChar = (e) => {
  axios.get(`${baseURL}/character/${e.target.id}`)
  .then(res => {
    clearCharacters()
    createCharacterCard(res.data)
  })
  .catch(err => console.log(err))
}

const getOldChar = (e) => {
  e.preventDefault()

  axios.get(`${baseURL}/character?age=${ageInput.value}`)
  .then(res => {
    clearCharacters()
    res.data.map(char => createCharacterCard(char))
  })
}

const addNewChar = (e) =>{
  e.preventDefault()
  let newLikes = newLikesText.value.split(',')

  const body = {
    firstName: newFirstInput.value,
    lastName: newLastInput.value,
    gender: newGenderDropDown.value,
    age: newAgeInput.value,
    likes: newLikes,
  }
  axios.post(`${baseURL}/character`, body)
  .then(res => {
    clearCharacters()
    res.data.map(char => createCharacterCard(char))
    
    console.log(res.data)
  })
  .catch(err => console.log(err))
}


for(let i=0; i < charBtns.length; i++){
  charBtns[i].addEventListener('click', getSingleChar)
}

getAllBtn.addEventListener('click', getAllChars)
ageForm.addEventListener('submit', getOldChar)
createForm.addEventListener('submit', addNewChar)