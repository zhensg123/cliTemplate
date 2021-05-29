class Lazyload {
  constructor (option = {}) {
    this.target = option.target ? document.querySelector(option.target) : document
    this.scroll = option.scroll ? document.querySelector(option.scroll) : window
    this.offset = option.offset || 100

    this.init()
  }

  init () {
    const that = this
    this.destroy()
    this.loadImg()
    this.scroll.addEventListener('scroll', that.handleLoad, false)
  }

    getImgs = () => {
      const imgs = this.target.querySelectorAll('img[data-src]')
      return [].slice.call(imgs)
    };

    inView (element) {
      const pageYScroll = window.pageYOffset || document.documentElement.scrollTop
      const pageHeight = window.innerHeight || document.documentElement.clientHeight
      const eleRect = element.getBoundingClientRect()

      if (!eleRect.top && !eleRect.bottom) {
        return false
      }

      const wt = pageYScroll
      const wb = wt + pageHeight
      const et = wt + eleRect.top
      const eb = et + eleRect.height

      return eb >= wt - this.offset && et <= wb + this.offset
    }

    loadImg () {
      /* eslint-disable no-param-reassign */
      this.getImgs().forEach((img) => {
        img.style.opacity = 0.3
        img.style['-webkit-transition'] = 'opacity 0.5s ease-in'
        img.style.transition = 'opacity 0.5s ease-in'

        const imgSrc = img.getAttribute('data-src')
        if (imgSrc && this.inView(img)) {
          img.src = imgSrc
          img.removeAttribute('data-src')
          img.addEventListener('load', this.fadeOut)
        }
      })
      /* eslint-ensable no-param-reassign */
    }

    fadeOut = (event) => {
      const img = event.target
      img.removeEventListener('load', this.fadeOut)
      img.style.opacity = ''

      setTimeout(() => {
        img.style['-webkit-transition'] = ''
        img.style.transition = ''

        if (!img.getAttribute('style')) {
          img.removeAttribute('style')
        }
      }, 600)
    }

    handleLoad = () => {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => this.loadImg(), 10)
    }

    destroy () {
      const that = this
      clearTimeout(this.timer)
      this.scroll.removeEventListener('scroll', that.handleLoad, false)
    }
}

export default Lazyload
