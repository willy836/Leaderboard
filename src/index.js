import './style.css';
import addScore from './modules/addScore.js';

const form = document.querySelector('.form');

form.addEventListener('submit', addScore);