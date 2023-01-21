import postScore from './postScore.js';

const name = document.querySelector('.name');
const score = document.querySelector('.score');

const addScore = (e) => {
  e.preventDefault();
  const nameValue = name.value;
  const scoreValue = score.value;
  if (name.value && score.value) {
    const userInput = {
      user: nameValue,
      score: scoreValue,
    };

    postScore(userInput.user, userInput.score);
    name.value = '';
    score.value = '';
  }
};

export default addScore;