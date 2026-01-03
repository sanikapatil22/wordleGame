"use client"
import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from "../Guess";
// import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// import WordInput from "../WordInput";
import GuessResult from "../GuessResult";
// import WonBanner from "../WonBanner";
// import SadBanner from "../SadBanner/SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function handleSubmitGuess(guess) {
    setGuesses([...guesses, guess]);
    
  }
  return (
    <>
    <GuessResult guesses={guesses} answer={answer} />
      <Guess handleSubmitGuess={handleSubmitGuess} />
    </>
  )
}

export default Game;
