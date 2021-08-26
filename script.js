'use strict';

class DomElement {
    constructor(selector, height, width, bg, fontSize) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    }
    newElem() {
        let element;
        if (this.selector[0] === '.') {
            element = document.createElement('div');
            element.className = this.selector.slice(1);
        }
        if (this.selector[0] === '#') {
            element = document.createElement('p');
            element.id = this.selector.slice(1);
        }
        element.style.cssText = `height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;`;
        return element;
    }
}


let elemDom = new DomElement('.block', 300, 300, 'red', 24);

document.body.appendChild(elemDom.newElem());
