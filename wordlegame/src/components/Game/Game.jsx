// "use client"
// import React from "react";

// import { sample } from "../../utils";
// import { WORDS } from "../../data";
// import GuessInput from "../GuessInput";
// import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// // import WordInput from "../WordInput";
// import GuessResult from "../GuessResult";
// import WonBanner from "../WonBanner";
// import LostBanner from "../LostBanner/LostBanner";

// // Pick a random word on every pageload.
// const answer = sample(WORDS);
// // To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

// function Game() {
//   //running/ won / lost
//   const [gameStatus, setGameStatus] = React.useState('running');
//   const [guesses, setGuesses] = React.useState([]);

//   function handleSubmitGuess(guess) {
   
//     const updated = [...guesses, guess];
//     setGuesses(updated);
//     if(guess.toUpperCase() === answer){
//       setGameStatus('won');
//     }
//     else if(updated.length>=NUM_OF_GUESSES_ALLOWED ){
//       setGameStatus('lost');
//     }
    
//   }
//   return (
//     <>
//     {gameStatus}
//     <GuessResult guesses={guesses} answer={answer} />
//       <GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
//       {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
//       {gameStatus === 'lost' && <LostBanner answer={answer} />} 
//     </>
//   )
// }

// export default Game;
"use client";
import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessResult from "../GuessResult";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

function Game() {
  // Create answer ONCE
  const [answer] = React.useState(() => sample(WORDS));

  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  console.info({ answer });

  function handleSubmitGuess(guess) {
    if (gameStatus !== "running") return;

    const updated = [...guesses, guess];
    setGuesses(updated);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (updated.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />

      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />

      {gameStatus === "won" && (
        <WonBanner numOfGuesses={guesses.length} />
      )}

      {gameStatus === "lost" && (
        <LostBanner answer={answer} />
      )}
    </>
  );
}

export default Game;
