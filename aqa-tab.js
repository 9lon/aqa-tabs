import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * `aqa-tab`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class AqaTab extends PolymerElement {
  static get template() {
    return html`
        <slot></slot>
`;
  }

  static get is() { return 'aqa-tab'; }

  static get properties() {
      return {
          label: {
              type: String,
              notify: true
          },
          name: {
              type: String,
              notify: true
          },
          count: {
              type: String,
              notify: true
          }
      }
  }
}

window.customElements.define(AqaTab.is, AqaTab);
