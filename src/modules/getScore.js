const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6doU8vQZxTk2EuYUh4xO/scores/';

const getScore = async () => {
  const response = await fetch(url);
  const res = await response.json();
  return res.result;
};
export default getScore;