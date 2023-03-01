import getJoke from '../api/getJoke';
import displayPunchline from '../utils/punchline';

const pageEvents = () => {
  const getJokeButton = document.querySelector('#getJoke');
  // const getPunchlineButton = document.querySelector('#getPunchline');
  const jokeDelivery = document.querySelector('#punchline');
  const jokeSetup = document.querySelector('#jokeSetup');
  let punchline = '';

  getJokeButton.addEventListener('click', () => {
    jokeDelivery.innerHTML = '';
    if (getJokeButton.innerHTML === 'GET PUNCHLINE') {
      console.warn('PL Button: ', punchline);
      displayPunchline(punchline);
    } else {
      getJoke().then((joke) => {
        jokeSetup.innerHTML = `<p>${joke.setup}</p>`;
        punchline = joke.delivery;
        console.warn(punchline);
        getJokeButton.innerHTML = 'GET PUNCHLINE';
      });
    }
  });
};

export default pageEvents;
