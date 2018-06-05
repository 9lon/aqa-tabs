import { PolymerElement } from '@polymer/polymer/polymer-element.js';
// import '@nylon/aqa-font/aqa-font.js';
import '@nylon/aqa-font/aqa-mitr-font.js';

import { html } from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * `aqa-tabs2`
 * 
 *
 * @customElement
 * @polymer 
 * @demo demo/index.html
 */
class AqaTabs extends PolymerElement {
  static get template() {
    return html`
    <style>

      :host {
        display: block;
      }
      :host > ::slotted(:not(slot):not(.nylon-selected)) {
        display: none !important;
      }

      .tab {
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        /* background-color: white;  */
        /* border-radius: 4px;   */
      }

      .tab div>button {
        font-family: MitrLight;
        background-color: transparent;
        border: none;
        float: left;
        outline: none;
        cursor: pointer;
        padding: 0.4rem 16px;
        transform: 0.3s;
        font-size: 1rem;
        color: #bbb;
      }

      div>button:hover {
        background-color: #F3F7F9;
      }

      div[selected]>button {
        background-color: white;
        color: #3E8EF7;
        border-bottom: 2px solid #3E8EF7;
      }
    </style>
    iiiiiiiiiiiiiiiiiiiiiiii
    <div class="tab">
      <template is="dom-repeat" items="[[items]]">
        <div selected$="[[_checkSeleted(item.name,selected,index)]]">
          <button class="tablinks font-MitrLight" on-click="tabsActive">[[item.label]] [[item.count]]</button>
        </div>
      </template>
    </div>

    <slot></slot>
`;
  }

  static get is() { return 'aqa-tabs'; }
  static get properties() {
    return {
      items: {
        type: Array,
        value: function () {
          return []
        }
      },
      selected:{
        type:String,
        notify:true
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    console.log(11111);
    
    for (let index = 0; index < this.children.length; index++) {
      console.log('g');
      
      let el = this.children[index]      
      el.index = index

      this.items.push({
        element: el,
        label: el.label || '',
        name: el.name   || ''
      })
      console.log('el',el);
      
      el.addEventListener('name-changed', () => {
        this.set(`items.${index}.name`, el.name || '')
        // this.items[index].name = el.name || ''
      })

      el.addEventListener('label-changed', () => {
        this.set(`items.${index}.label`, el.label || '')
        // this.items[index].label = el.label || ''
      })

      el.addEventListener('count-changed', () => {
        console.log('x')
        this.set(`items.${index}.count`, el.count || '')
        // this.items[index].count = el.count || ''
      })
      
      console.log(this.items);
      
    }
  }

  tabsActive(e) {
    this.selected = e.model.item.name;
  }

  _checkSeleted(name, selected, i) {
    
    var result = name == selected
    if(result){
      
      for (let index = 0; index < this.children.length; index++) {
        this.children[index].classList.remove("nylon-selected")
      }
      
      this.children[i].classList.add("nylon-selected");

    }

    return result
  }
}

window.customElements.define(AqaTabs.is, AqaTabs);
