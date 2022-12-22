const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/jJ3g3kLeGWLXKdZbJ77t/scores/';

const getScore = async ()=> {
const response = await fetch(url)
const res = await response.json()
return res.result;
//const data = data.result
    //.catch((error)=> error);
}
export { getScore }