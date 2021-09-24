import React from 'react';
import ReactDOM from 'react-dom';
import Providers from './providers';

class WebComponent extends HTMLElement {
	constructor(App, StylesProvider, properties = {}) {
		super();
		this.App = App;
		this.StylesProvider = StylesProvider;
		this.properties = properties;
		this.styleSass = document.createElement('style');
		this.mountPoint = document.createElement('div');

		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.styleSass.textContent = this.StylesProvider;
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
};

export default WebComponent;