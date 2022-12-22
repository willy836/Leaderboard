import './style.css';
import addScore from './modules/addScore.js';
import { addScoreToBoard } from './modules/addToLeaderboard';

const form = document.querySelector('.form');
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'

//get game id
// const getGameId = () => {
//     fetch(baseUrl+"games/", {
//       method: "POST",
//       body: JSON.stringify({
//         name: "Wilson's game",
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   };

  //Game ID E5CkFPiR62Z5ynowbDgd
  
//getGameId();
addScoreToBoard();
form.addEventListener('submit', addScore)

addScoreToBoard()


const refreshBtn = document.querySelector('.refresh-btn');
refreshBtn.addEventListener('click', addScoreToBoard)




