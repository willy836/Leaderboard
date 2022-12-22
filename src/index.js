import './style.css';
import addScore from './modules/addScore.js';
import addScoreToBoard from './modules/addToLeaderboard.js';

const form = document.querySelector('.form');

addScoreToBoard();
form.addEventListener('submit', addScore);

addScoreToBoard();

const refreshBtn = document.querySelector('.refresh-btn');
refreshBtn.addEventListener('click', addScoreToBoard);
