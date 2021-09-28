

let word = 'beginning'
let data 

const fetchWord = async () => {
    const wordData = await fetch(`https://random-word-api.herokuapp.com/word?number=1`)
    const res = await wordData.json()
    word = res;
    const info = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const des = await info.json()
    data = des
}

// const fetchInfo = async () => {

// }

//Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {

    if(msg.name === "fetchWord"){

        // fetch word
        fetchWord()
        // fetchInfo()
  
      //Send response
      response({ word: word, data: data });
  
    }
  
  });
  