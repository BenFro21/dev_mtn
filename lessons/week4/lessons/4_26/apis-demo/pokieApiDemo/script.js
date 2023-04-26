
let query = document.querySelector('input')
let submitBtn = document.querySelector('button')

const submitHandler = (e) => {
    e.preventDefault()
    let pokemon = query.value;

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => {
    let img = document.querySelector('img')
    img.src = res.data.sprites.front_default
    })
    .catch(err => console.log(err))
}

submitBtn.addEventListener('click', submitHandler)


