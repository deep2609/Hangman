import { useCallback, useEffect, useState } from 'react'
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
function App() {
  const [guessWord,setGuessWord] = useState(()=>{
    return words[Math.floor(Math.random()*words.length)];
  });
  console.log(guessWord);

  const [guessLetters,setGuessLetters] = useState<string[]>([]);
  const incorrectGuesses = guessLetters.filter(
    letter=> !guessWord.includes(letter)
  )

  const isLoser = incorrectGuesses.length>=6;
  const isWinner = guessWord.split("").every(letter => guessLetters.includes(letter));


  const addGuessedLetter = useCallback(
    (letter:string) => {
    if(guessLetters.includes(letter) || isLoser || isWinner)return
    setGuessLetters(currentLetters => [...currentLetters,letter]);
  },[guessLetters,isLoser,isWinner])
  
  useEffect(()=>{
      const handler = (e: KeyboardEvent)=>{
        const key = e.key
        if(!key.match(/^[a-z]$/))return

        e.preventDefault()
        addGuessedLetter(key);
      }
      document.addEventListener("keypress",handler);
      return () =>{
        document.removeEventListener("keypress",handler);
      }
  },[guessLetters])

  return (
   <div style={{
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap:"2rem",
    margin: "0 auto",
    alignItems: "center"
   }}>
   <div style={{
    fontSize: "2rem",
    textAlign: "center"
   }}>
    {isLoser?"Loser":""}
    {isWinner?"Winner":""}
   </div>
   <HangmanDrawing numOfGuess={incorrectGuesses.length}/>
   <HangmanWord reveal={isLoser} wordToGuess={guessWord} guessedLetters={guessLetters}/>
   <div style={{
    alignSelf: "stretch"
   }}>
    <Keyboard 
    disabled = {isLoser || isWinner}
   activeLetters = {guessLetters.filter(letter => {
     return guessWord.includes(letter)
   }
  
   )}
   inactiveLetters = {incorrectGuesses}
   addGuessedLetter = {addGuessedLetter}
   /></div>
   
   </div>
  )
}

export default App
