//selcting html elements that already exist
let btn = document.querySelector('button')
let peeopleSection = document.querySelector('.people')

// callback function that is attached to the buttons event listenter
let buttonFunc = () => {
    // making a get request to the swapi api with a query peramater of Alderaan
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    // then handleing the data that is returned from the request 
    .then((res) =>{
        //looping over the results of that data inside the data object we are using the residents array to loop over
        for( let i = 0; i < res.data.results[0].residents.length; i++){
            // making another request to the residents url 
            axios.get(res.data.results[0].residents[i])
            .then(response => {
                //taking the data we get back from that response => creating a new h2 document => setting the text document of the new html element => appending the new element to the dom 
                let person = document.createElement('h2')
                person.textContent = response.data.name
                peeopleSection.appendChild(person)
            })
        }
    })
    .catch(err => console.log(err))
}

//handleing the click event on the button element
btn.addEventListener('click', buttonFunc)