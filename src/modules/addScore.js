import { postScore } from "./postScore";
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/E5CkFPiR62Z5ynowbDgd/scores/';

const scoresContainer = document.querySelector('.scores-container');
const name = document.querySelector('.name');
const score = document.querySelector('.score');

const addScore = (e) => {
  e.preventDefault();
  const nameValue = name.value;
  const scoreValue = score.value;
  if (name.value && score.value) {
    const userInput = {
      user: nameValue,
      score: scoreValue
    }
    
    postScore(userInput.user, userInput.score);
    name.value = '';
    score.value = '';
    scoresContainer.classList.add('show-container');
  }
};

export default addScore;