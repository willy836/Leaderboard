import './style.css';
import addScore from './modules/addScore';

const form = document.querySelector('.form');


form.addEventListener('submit', addScore)