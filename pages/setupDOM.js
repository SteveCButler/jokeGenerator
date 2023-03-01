import renderToDOM from '../utils/renderToDom';

const setupDOM = () => {
  const domString = `
  <div class="container">
    <header>
    <i class="fa fa-chevron-left" style="font-size:48px;color:teal"></i><h1>Joke Generator</h1><i class="fa fa-chevron-right" style="font-size:48px;color:teal"></i>
    </header>
  
  <div id="jokeSetup"></div>
  <div id="punchline"></div>
  <div class="buttons">
    <button id="getJoke">GET A JOKE</button>
  </div>
  </div>
  `;

  renderToDOM('#app', domString);
};

export default setupDOM;
