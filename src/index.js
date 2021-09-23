import React from 'react';
import ReactDOM from 'react-dom';
import Onboarding from './apps/onboarding';
import Providers from './shared/providers';
import onboardingStyles from './apps/onboarding/styles/app.scss';

const TAG_NAME = 'onboarding-web';

class WebComponent extends HTMLElement {
  constructor(App, appStyleSass, properties = {}) {
    super();

    this.App = App;
    this.appStyleSass = appStyleSass;
    this.properties = properties;
    this.styleSass = document.createElement('style');
    this.mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.styleSass.textContent = this.appStyleSass;
    this.shadowRoot.appendChild(this.styleSass);
    this.shadowRoot.appendChild(this.mountPoint);

    const App = this.App;

    ReactDOM.render(
      <Providers>
        <App {...this.properties} />
      </Providers>,
      this.mountPoint
    );
  }
}

class OnboardingComponent extends WebComponent {
  constructor() {
    super(Onboarding, onboardingStyles);
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, OnboardingComponent);
}