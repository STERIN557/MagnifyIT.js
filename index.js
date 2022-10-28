import {
  magnifyInitialize,
  removeBoundary,
  setMangifyProperties,
} from './dist/main.js';

magnifyInitialize({
  imageClassName: 'asali-image',
  lensClassName: 'lenskaclass',
  imagePreviewClassName: 'preview-dekho',
});

setMangifyProperties({
  lensBorderColor: 'brown',
  lensBorderSize: 5,
  lensColor: 'rgba(255,255,255,0.1)',
});
// removeBoundary(true);
