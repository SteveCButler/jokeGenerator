const clearJoke = () => {
  const jokeDelivery = document.querySelector('#punchline');
  const jokeSetup = document.querySelector('#jokeSetup');
  jokeSetup.innerHTML = '';
  jokeDelivery.innerHTML = '';
};
export default clearJoke;
