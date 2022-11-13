import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/app';

class ReactMfe extends HTMLElement {
  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    root.render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    )
  }
}

customElements.define('react-element', ReactMfe);
