let giphyKey = "n0hYHEPnSMBxluEhcNLp6IaFOhiO4aOE"

document.querySelector('button').addEventListener('click',()=>{

  let userInput = document.getElementById('userInput').value

  fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}/`)
    .then(res => res.json())
    .then(response =>{
      // console.log(response.held_items)
      // console.log(response.base_experience)
      let pokeInput = response.base_experience



  fetch(`https://quote-garden.herokuapp.com/quotes/all`)
    .then(res => res.json())
    .then(response =>{
      // console.log(response)
      let pokeQuote = response.results[pokeInput].quoteText
      // console.log(pokeQuote)
      document.querySelector('p').innerHTML = pokeQuote

  fetch(`http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${giphyKey}`)

      .then(res => res.json())
      .then(response =>{
        // console.log(response)
        // console.log(response.data[0].images.original.url)
        let data = response.data[0]
        document.querySelector('img').src = data.images.original.url
})
})
})
})
