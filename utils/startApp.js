import setupDOM from '../pages/setupDOM';
import pageEvents from '../events/pageEvents';

const startApp = () => {
  setupDOM();
  pageEvents();
};

export default startApp;
