const displayPunchline = (punchline) => {
  const getJokeButton = document.querySelector('#getJoke');
  const jokeDelivery = document.querySelector('#punchline');
  jokeDelivery.innerHTML = `<p>${punchline}<p>`;
  getJokeButton.innerHTML = 'GET JOKE';
};

export default displayPunchline;
