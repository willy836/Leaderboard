import './style.css';
import addScore from './modules/addScore.js';
import addScoreToBoard from './modules/addToLeaderboard.js';

const form = document.querySelector('.form');

addScoreToBoard();
form.addEventListener('submit', addScore);

addScoreToBoard();

const refreshBtn = document.querySelector('.refresh-btn');
refreshBtn.addEventListener('click', addScoreToBoard);

// const gameId = ()=> {
//     fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             name: "Wilson's game",
//         })
//     })
//     .then(res => res.json())
//     .then(myId => console.log(myId))
// }
// gameId();

// ID = 6doU8vQZxTk2EuYUh4xO