the height of Darth Vader
https://swapi.dev/api/people/4 .height of the obj that returns

the population of the planet Alderaan
https://swapi.dev/api/planets/2 .population off the obj that it returns

the name of the manufacturer of the Millennium Falcon
https://swapi.dev/api/starships/10 .manufacturer off the obj that it returns 
the name of the species that C-3PO belongs to (multiple URLs)
https://swapi.dev/api/people/2/
https://swapi.dev/api/species/2/
the title of each film that Obi-Wan Kenobi is in (multiple URLs)
https://swapi.dev/api/people/?search=obi-wan
      "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/"

use the search query (the how to on the search query is at the bottom of the Getting Started section of the documentation) to get the information about the Millennium Falcon, it’s a starship
https://swapi.dev/api/starships/?search=Millennium


The base URL of your requests is: https://practiceapi.devmountain.com/api (make sure to have the “s” in “https”)

Check if the POST request accept params, queries, and/or a body. Which one(s) and what information is it expecting to be sent?
### a json object with a key of text and some value 
What data type does the GET request return?
### an array of objects in json 
What would the URL look like for deleting the post with the id 555? (This post does not exist anymore, but the syntax is the same for existing posts, )
### https://practiceapi.devmountain.com/api/posts?id=555
List the possible response codes from the GET request at ‘/posts/filter’
### https://practiceapi.devmountain.com/api/posts/filter/?text=hey
Create a post whose text is your name, record the URL and body here:
### https://practiceapi.devmountain.com/api/posts
{
  "text": "Ben Broad"
}

What would the URL and body object be to update the post you just made to contain your faovrite color instead of your name?
https://practiceapi.devmountain.com/api/posts?id=1652
{
  "text": "my favorite color is Nantucket salmon"
}


What is the URL to get posts that contain the text “blue”?
### https://practiceapi.devmountain.com/api/posts/filter/?text=blue
Make a request to GET all the posts. What are the content type and charset of the response? (Hint: look on the Headers)
 ### content-type: application/json; charset=utf-8 
What would cause a PUT request to return a 409 status?
### Request was missing req.query.id or req.body.text
What happens if you try to send a query in the GET request URL? Why do you get that response?
same results because it his the home tab first?
