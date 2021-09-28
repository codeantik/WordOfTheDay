

// const fetcher = async () => {
//     const data = await fetch(`https://random-word-api.herokuapp.com/word?number=1`)
//     const res = await data.json()
//     return res
// }

//Send Message To Background
chrome.runtime.sendMessage({ name: "fetchWord" }, (response) => {
    
    // const data = fetcher()
    console.log(response)

    document.querySelector('h1').innerHTML = response.word
    document.querySelector('.description').innerHTML = response.data[0].meanings[0].definitions[0].definition
    document.querySelector('.example').innerHTML = response.data[0].meanings[0].definitions[0].example
  
});
  