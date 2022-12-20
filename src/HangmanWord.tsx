type HangmanWordProps = {
    reveal: boolean
    wordToGuess: string,
    guessedLetters: string[]
}

export default function HangmanWord({wordToGuess,guessedLetters,reveal=false}: HangmanWordProps){
   console.log(wordToGuess);
  
    return <div style={{
        display: "flex",
        gap: "0.25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
    }}>
        {wordToGuess.split("").map((letter, index)=>(
            <span style={{
                borderBottom: ".1em solid black"
            }} key={index}>
              <span style={{
                visibility: guessedLetters.includes(letter)||reveal?"visible":"hidden",
                color: !guessedLetters.includes(letter) && reveal ? "red":"black"
            }}>{letter}</span>
            </span>
            
        )

        )}

    </div>
}