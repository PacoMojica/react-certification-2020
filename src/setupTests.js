import '@testing-library/jest-dom/extend-expect';
import gapiClient from './utils/tests-utils/gapiClient';

window.scrollTo = (x, y) => {
  document.documentElement.scrollTop = y;
}

window.gapi = {
  load: (_, loadCallback) => loadCallback(),
  client: gapiClient,
}