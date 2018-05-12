import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import {LitElement, html} from '@polymer/lit-element';

class MyElement extends LitElement {

	static get properties() { return { mood: String }}

	_render({mood}) {
		return html`<style> .mood { color: green; } </style>
			Web Components are <span class="mood">${mood}</span>!`;
	}

}

customElements.define('my-element', MyElement);
