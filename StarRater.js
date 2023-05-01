class StarRater extends HTMLElement {
  constructor() {
    super()

    this.build()
    
  }
  build() {
    const shadow = this.attachShadow({mode: 'open'})

    shadow.appendChild(this.styles())
  }

  styles() {
    const style = document.createElement('style')
    style.textContent = `
      .star-rater {
        background-color: #f00;
      }
    `
    return style
  }
}

customElements.define('star-rater', StarRater)