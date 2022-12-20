const scoresContainer = document.querySelector('.scores-container');
const name = document.querySelector('.name');
const score = document.querySelector('.score');

const addScore = (e)=> {
    e.preventDefault();
    const nameValue = name.value;
    const scoreValue = score.value;
    if(name.value && score.value){
        const p = document.createElement('p');
        p.className = 'user-score';
        p.innerHTML = `${nameValue}: ${scoreValue}`;
        name.value = '';
        score.value = '';
        scoresContainer.appendChild(p);
        scoresContainer.classList.add('show-container')
    }
}

export default addScore