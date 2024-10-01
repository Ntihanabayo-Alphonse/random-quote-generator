const quote = document.getElementById('quote')
const author = document.getElementById('author')
const btn = document.getElementById('btn')

// Choose any category from; 
// [love, happiness, birthday, faith, business, movies, funny, friendship, 
// beauty, computers, dating, health, forgiveness, age, education, knowledge]
const category = 'business'

const apiKey = 'AN1tp6GcdJUi/wGLIOXjXQ==lgbRZcrKbhbtTAPd'
const url = 'https://api.api-ninjas.com/v1/quotes?category=' + category;

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    },
}

async function getQuote(){
    const response = await fetch(url, options)
    const data = await response.json()

    quote.innerHTML = data[0].quote
    author.innerHTML = data[0].author
}

btn.addEventListener('click', getQuote);