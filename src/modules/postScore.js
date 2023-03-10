const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6doU8vQZxTk2EuYUh4xO/scores/';

const postScore = async (user, score) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: `${user}`,
      score: `${score}`,
    }),
  });
  const res = await response.json();
  return res;
};

export default postScore;
