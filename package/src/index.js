class MagnifyIt {
  #imageId;
  #imagePreviewId;
  #imageClassName = 'mit-image';
  #imagePreviewClassName = 'mit-preview';
  #lensClassName = 'mit-lens';
  #lensId;
  #previewHeight = 30;
  #previewWidth = 30;
  #previewBorderColor = 'red';
  #previewTop = `calc(100% - ${this.#previewHeight}rem)`;
  #previewLeft = `calc(100% - ${this.#previewWidth}rem)`;
  #previewBorderSize = 2;
  #lensHeight = 5.7;
  #lensWidth = 5.7;
  #lensColor = 'rgba(255, 0, 0, 0.186)';
  #lensBorderSize = 2;
  #lensBorderColor = 'orange';

  #imageDom;
  #previewDom;
  #lensDom;

  #hideItems = false;

  #boundaryCheck = false;

  constructor({ imageClassName, imagePreviewClassName, lensClassName }) {
    this.#imageId = this.#makeId(5);
    this.#imagePreviewId = this.#makeId(5);
    this.#lensId = this.#makeId(7);
    if (imageClassName) {
      this.#imageClassName = imageClassName;
    }
    if (imagePreviewClassName) {
      this.#imagePreviewClassName = imagePreviewClassName;
    }
    if (lensClassName) {
      this.#lensClassName = lensClassName;
    }
    this.#zoomInit();
    this.#addCss();
  }

  removeBoundary(boundaryCheck) {
    this.#boundaryCheck = boundaryCheck;
  }

  #addCss() {
    let style = document.querySelector('style');
    let alreadyExisting = null;
    if (style === null || style == undefined) {
      style = document.createElement('style');
    } else {
      alreadyExisting = style.innerHTML;
    }

    style.innerHTML = `
    ${alreadyExisting !== null ? alreadyExisting : ''}
    .${this.#imagePreviewClassName} {
      display: none;
      position: absolute;
      height: 30rem;
      width: 30rem;
      border: 2px solid red;
      left: calc(100% - 30rem);
      top: calc(100% - 30rem);
    }
    .${this.#lensClassName} {
      display: none;
      position: absolute;
      height: 5.7rem;
      width: 5.7rem;
      border: 2px solid red;
      background-color: rgba(255, 0, 0, 0.186);
      left: 0;
      top: 0;
    }
    `;
    document.head.appendChild(style);
  }

  setMagnifyItProperty({
    lensHeight,
    lensWidth,
    lensColor,
    previewBorderColor,
    previewCssRuleTop,
    previewCssRuleLeft,
    previewBorderSize,
    lensBorderSize,
    lensBorderColor,
  }) {
    if (lensHeight) {
      this.#lensHeight = lensHeight;
    }
    if (lensWidth) {
      this.#lensWidth = lensWidth;
    }
    if (lensColor) {
      this.#lensColor = lensColor;
    }
    if (lensBorderSize) {
      this.#lensBorderSize = lensBorderSize;
    }

    if (lensBorderColor) {
      this.#lensBorderColor = lensBorderColor;
    }

    if (previewBorderColor) {
      this.#previewBorderColor = previewBorderColor;
    }
    if (previewCssRuleTop) {
      this.#previewTop = previewCssRuleTop;
    }
    if (previewCssRuleLeft) {
      this.#previewLeft = previewCssRuleLeft;
    }
    if (previewBorderSize) {
      this.#previewBorderSize = previewBorderSize;
    }
  }

  #makeId(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  #zoomInit() {
    this.#imageDom = document.querySelector(`.${this.#imageClassName}`);
    this.#previewDom = document.querySelector(
      `.${this.#imagePreviewClassName}`
    );
    this.#lensDom = document.querySelector(`.${this.#lensClassName}`);

    this.#imageDom.setAttribute('id', this.#imageId);
    this.#previewDom.setAttribute('id', this.#imagePreviewId);
    this.#lensDom.setAttribute('id', this.#lensId);

    this.#magnify();
  }

  #magnify() {
    this.#lensDom.addEventListener('mousemove', (e) => this.#moveLens(e));
    this.#imageDom.addEventListener('mousemove', (e) => this.#moveLens(e));
  }

  #moveLens(e) {
    let x, y, cx, cy;

    const image_rect = this.#imageDom.getBoundingClientRect();
    // console.log(image_rect);
    x = e.pageX - image_rect.left - this.#lensDom.offsetWidth / 2;
    y = e.pageY - image_rect.top - this.#lensDom.offsetHeight / 2;

    const lenX = e.pageX - this.#lensDom.offsetWidth / 2;
    const lenY = e.pageY - this.#lensDom.offsetHeight / 2;

    if (this.#hideItems === true) {
      this.#previewDom.style.display = 'none';
      this.#lensDom.style.display = 'none';
    } else {
      this.#previewDom.style.display = 'flex';
      this.#lensDom.style.display = 'flex';
    }

    this.#lensDom.style.top = `${lenY}px`;
    this.#lensDom.style.left = `${lenX}px`;
    this.#lensDom.style.height = `${this.#lensHeight}rem`;
    this.#lensDom.style.width = `${this.#lensWidth}rem`;
    this.#lensDom.style.backgroundColor = `${this.#lensColor}`;

    this.#lensDom.style.border = `${this.#lensBorderSize}px solid ${
      this.#lensBorderColor
    }`;

    this.#previewDom.style.border = `${this.#previewBorderSize}px solid ${
      this.#previewBorderColor
    }`;
    this.#previewDom.style.top = `${this.#previewTop}`;
    this.#previewDom.style.left = `${this.#previewLeft}`;

    const max_xpos = image_rect.width - this.#lensDom.offsetWidth;
    const max_ypos = image_rect.height - this.#lensDom.offsetHeight;

    if (this.#boundaryCheck === true) {
      if (x > max_xpos) {
        this.#previewDom.style.display = 'none';
        this.#lensDom.style.display = 'none';
      } else if (x < 0) {
        this.#previewDom.style.display = 'none';
        this.#lensDom.style.display = 'none';
      } else if (y > max_ypos) {
        this.#previewDom.style.display = 'none';
        this.#lensDom.style.display = 'none';
      } else if (y < 0) {
        this.#previewDom.style.display = 'none';
        this.#lensDom.style.display = 'none';
      } else {
        this.#previewDom.style.display = 'flex';
        this.#lensDom.style.display = 'flex';
      }
    }

    //calculate the magnified image and lens aspect ratio

    cx = this.#previewDom.offsetWidth / this.#lensDom.offsetWidth;
    cy = this.#previewDom.offsetHeight / this.#lensDom.offsetHeight;
    const imgSrc = this.#imageDom.getAttribute('src');

    this.#previewDom.style.backgroundImage = `url(${imgSrc})`;
    this.#previewDom.style.backgroundPosition = `-${cx * x}px -${cy * y}px`;
    this.#previewDom.style.backgroundSize = `${image_rect.width * cx}px ${
      image_rect.height * cy
    }px `;
    this.#previewDom.style.backgroundRepeat = 'no-repeat';
  }
}

let magnifyObject = null;

export function magnifyInitialize({
  imageClassName,
  imagePreviewClassName,
  lensClassName,
}) {
  const magnifyIT = new MagnifyIt({
    imageClassName: imageClassName,
    imagePreviewClassName: imagePreviewClassName,
    lensClassName: lensClassName,
  });
  magnifyObject = magnifyIT;
  return magnifyIT;
}

export function setMangifyProperties({
  lensHeight,
  lensWidth,
  lensColor,
  lensBorderColor,
  lensBorderSize,
  previewBorderColor,
  previewBorderSize,
}) {
  if (magnifyObject === null) {
    console.warn(
      'please initialize the magnifyIt class by calling magnifyInitialize first '
    );
  } else {
    magnifyObject.setMagnifyItProperty({
      lensHeight,
      lensWidth,
      lensColor,
      lensBorderColor,
      lensBorderSize,
      previewBorderColor,
      previewBorderSize,
    });
  }
}

export function removeBoundary(allow) {
  if (magnifyObject === null) {
    console.warn(
      'please initialize the magnifyIt class by calling magnifyInitialize first '
    );
  } else {
    magnifyObject.removeBoundary(allow);
  }
}
