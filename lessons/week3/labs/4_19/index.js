console.log('hello world')

let message = document.querySelector('#message')


let addMovie = (evt) => {
    evt.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    let ul = document.querySelector('ul')
    ul.appendChild(movie)
    inputField.value = ''
}
let deleteMovie = (evt) => {
    evt.target.parentNode.remove()
    console.log(evt.target.parentNode.textContent)
    message.textContent = `${evt.target.parentNode.textContent} DELETED!!! `
    revealMessage()
}
document.querySelector('form').addEventListener('submit', addMovie)


let crossOffMovie = (evt) => {
    evt.target.classList.toggle('checked')

    if(evt.target.classList.contains('checked')){
        message.textContent = `${evt.target.textContent} Watched `
    }else{
        message.textContent = `${evt.target.textContent} Added back!! `
    }
    revealMessage()
}

let revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(()=>{
        message.classList.add('hide')
    }, 1000)
}