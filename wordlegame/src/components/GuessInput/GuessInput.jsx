"use client"
import React from 'react';

function GuessInput({gameStatus, handleSubmitGuess}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    
    if (tentativeGuess.length !== 5) {
      alert('Guess must be 5 letters long 🔥');
      return;
    }
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }
    
  return (
    <>
    <form onSubmit={handleSubmit} className='guess-input-wrapper' >
      <label htmlFor='guess-input'>Enter guess: </label>
      <input 
      required 
      disabled = {gameStatus !== 'running'}
      maxLength={5} minLength={5}
      value={tentativeGuess}
      onChange={(event)=> setTentativeGuess(event.target.value.toUpperCase()) } 
      id='guess-input' 
      type='text' 
      />
    </form>
    <p>{tentativeGuess}</p>
    </>
  )
}

export default GuessInput;
