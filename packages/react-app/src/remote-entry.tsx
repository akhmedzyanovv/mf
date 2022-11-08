import ReactDOM from 'react-dom';
import App from './app/app';

class ReactMfe extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('react-element', ReactMfe);
