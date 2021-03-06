import { hmiElement } from 'jahmin';
import { html, LitElement } from 'jahmin';
import './labelledIcon';
export class pvrIcon extends LitElement {
    render() {
        return html `
        <style>
            :host{ 
                display:block;
            }
        </style>
        <svg viewBox="251.36 1.721 53.863 51.142" xmlns="http://www.w3.org/2000/svg">
            <g>
            <g>
                <polygon  points="278.2,37.2 253,22.6 253,51.7" style="stroke-miterlimit: 10;"></polygon>
                <polygon  points="278.8,37.2 304,51.7 304,22.6" style="stroke-miterlimit: 10;"></polygon>
            </g>
            <circle cx="278.8" cy="37.2" r="9.6" style="stroke-miterlimit: 10;"></circle>
            <rect x="266.8" y="3.2" class="st0" width="23.9" height="13.9" style="stroke-miterlimit: 10;"></rect>
            <rect x="271.8" y="3.2" class="st3" width="13.9" height="13.9" style="fill:none; stroke-miterlimit: 10;"></rect>
            <line x1="278.8" y1="27.6" x2="278.8" y2="10.1" style="stroke-miterlimit: 10;"></line>
            <line x1="271.8" y1="10.1" x2="285.7" y2="10.1" style="stroke-miterlimit: 10;"></line>
            </g>
        </svg>
        `;
    }
}
customElements.define("pvr-icon", pvrIcon);
export class pvdIcon extends LitElement {
    render() {
        return html `
        <style>
            :host{ 
                display:block;
            }
        </style>
        <svg viewBox="140.37 3.264 54.407 50.055" xmlns="http://www.w3.org/2000/svg" >
            <g>
            <g>
                <polygon  points="167.1,37.2 141.9,22.6 141.9,51.7" style="stroke-miterlimit: 10;"></polygon>
                <polygon  points="167.7,37.2 192.9,51.7 192.9,22.6" style="stroke-miterlimit: 10;"></polygon>
            </g>
            <circle  cx="167.7" cy="37.2" r="9.6" style="stroke-miterlimit: 10;"></circle>
            <line  x1="167.7" y1="27.6" x2="167.7" y2="12.3" style="stroke-miterlimit: 10;"></line>
            <path  d="M175.4,12.3c0-4.2-3.4-7.7-7.7-7.7S160,8,160,12.3H175.4z" style="stroke-miterlimit: 10;"></path>
            </g>
        </svg>
        `;
    }
}
customElements.define("pvd-icon", pvdIcon);
export class ValvePR extends hmiElement {
    constructor() {
        super();
        this.orientation = "N";
        this.onclick = this.toggleme.bind(this);
    }
    static get properties() {
        let x = super.properties;
        x.orientation = { type: String };
        return x;
    }
    render() {
        return html `
            <labeled-icon name="${this.name}"  engine="${this.engine}" system="${this.system}"
                       orientation="${this.orientation}">
                <slot slot="label">${this.name}</slot>
                <pvr-icon></pvr-icon>
            </labeled-icon>
        `;
    }
    toggleme(ev) {
        let toggle = this.value ? false : true;
        this.Write(toggle);
    }
}
customElements.define("valve-pr", ValvePR);
export class ValvePD extends hmiElement {
    constructor() {
        super();
        this.orientation = "N";
        this.labeltop = "0";
        this.labelleft = "0";
        this.onclick = this.toggleme.bind(this);
    }
    static get properties() {
        let x = super.properties;
        x.orientation = { type: String };
        x.labeltop = { type: String };
        x.labelleft = { type: String };
        return x;
    }
    render() {
        return html `
            <labeled-icon name="${this.name}"  engine="${this.engine}" system="${this.system}"
                       orientation="${this.orientation}" top="${this.labeltop}" left="${this.labelleft}">
                <slot slot="label">${this.name}</slot>
                <pvd-icon></pvd-icon>
            </labeled-icon>
        `;
    }
    toggleme(ev) {
        let toggle = this.value ? false : true;
        this.Write(toggle);
    }
}
customElements.define("valve-pd", ValvePD);
