import { getScore } from "./getScore";

const addScoreToBoard = async ()=> {
    const scoresContainer = document.querySelector('.scores-container');
    scoresContainer.innerHTML = '';
    const userScores = await getScore();
    //console.log(userScores)
    userScores.sort((a,b)=> b.score - a.score);
    console.log(userScores)
    userScores.forEach((item)=> {
        //console.log(item.user)
        scoresContainer.innerHTML += `<p class="user-score">${item.user}: ${item.score}</p>`;
        //console.log(item.user, item.score)
    })
}

export { addScoreToBoard }