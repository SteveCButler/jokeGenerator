import clearJoke from '../utils/clearJoke';

const baseUrl = 'https://v2.jokeapi.dev/joke/';

const getJoke = () => new Promise((resolve, reject) => {
  clearJoke();
  fetch(`${baseUrl}Programming,Pun?blacklistFlags=religious,racist,sexist,explicit&type=twopart`, {
    method: 'GET'
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getJoke;
