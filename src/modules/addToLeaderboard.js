import getScore from './getScore.js';

const addScoreToBoard = async () => {
  const scoresContainer = document.querySelector('.scores-container');
  scoresContainer.innerHTML = '';
  const userScores = await getScore();

  userScores.sort((a, b) => b.score - a.score);

  userScores.forEach((item) => {
    scoresContainer.innerHTML += `<p class="user-score">${item.user}: ${item.score}</p>`;
  });
};

export default addScoreToBoard;