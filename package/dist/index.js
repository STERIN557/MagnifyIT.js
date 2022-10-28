class MagnifyIt {
  #imageId;
  #imagePreviewId;
  #imageClassName = 'mit-image';
  #imagePreviewClassName = 'mit-preview';
  #lensClassName = 'mit-lens';
  #lensId;
  #previewHeight = -0x4bf + -0xb * 0xe9 + 0xee0;
  #previewWidth = -0x1d9 + 0xfe4 + 0x9b * -0x17;
  #previewBorderColor = 'red';
  #previewTop = 'calc(100%\x20-\x20' + this.#previewHeight + 'rem)';
  #previewLeft = 'calc(100%\x20-\x20' + this.#previewWidth + 'rem)';
  #previewBorderSize = -0xe48 + 0x1 * -0x22f3 + 0x313d;
  #lensHeight = -0x7d4 * 0x2 + -0xe01 * -0x1 + 0x1 * 0x1ac + 0.7000000000000002;
  #lensWidth = -0xd * -0x245 + 0xabd + -0x2839 + 0.7000000000000002;
  #lensColor = 'rgba(255,\x200,\x200,\x200.186)';
  #lensBorderSize = -0x25dd + -0x230f * 0x1 + -0xe96 * -0x5;
  #lensBorderColor = 'orange';
  #imageDom;
  #previewDom;
  #lensDom;
  #hideItems = ![];
  #boundaryCheck = ![];
  constructor({
    imageClassName: _0x475838,
    imagePreviewClassName: _0x5b4bf7,
    lensClassName: _0x5acfd2,
  }) {
    const _0x4203ea = { JAQTF: '2|6|7|0|3|4|1|5' };
    const _0x5f07e6 = _0x4203ea['JAQTF']['split']('|');
    let _0x367ef3 = -0x1 * 0xf2d + -0x2b * 0x64 + -0x5 * -0x665;
    while (!![]) {
      switch (_0x5f07e6[_0x367ef3++]) {
        case '0':
          if (_0x475838) {
            this.#imageClassName = _0x475838;
          }
          continue;
        case '1':
          this.#zoomInit();
          continue;
        case '2':
          this.#imageId = this.#makeId(
            -0x73 * -0x1d + 0x1 * -0x14b + -0xbb7 * 0x1
          );
          continue;
        case '3':
          if (_0x5b4bf7) {
            this.#imagePreviewClassName = _0x5b4bf7;
          }
          continue;
        case '4':
          if (_0x5acfd2) {
            this.#lensClassName = _0x5acfd2;
          }
          continue;
        case '5':
          this.#addCss();
          continue;
        case '6':
          this.#imagePreviewId = this.#makeId(0xfa7 * -0x1 + 0xf37 + 0x75);
          continue;
        case '7':
          this.#lensId = this.#makeId(-0xc * -0x1d9 + 0x1803 + -0x2e28);
          continue;
      }
      break;
    }
  }
  ['removeBoundary'](_0x4b0081) {
    this.#boundaryCheck = _0x4b0081;
  }
  #addCss() {
    const _0xef7d0b = {
      njEDJ: 'style',
      EfhCQ: function (_0x396f57, _0xf8e05d) {
        return _0x396f57 === _0xf8e05d;
      },
      YSPLn: function (_0x1ee0ab, _0x16346e) {
        return _0x1ee0ab == _0x16346e;
      },
      RPqUS: function (_0x206c98, _0x4095db) {
        return _0x206c98 !== _0x4095db;
      },
    };
    let _0x28ce72 = document['querySelector'](_0xef7d0b['njEDJ']);
    let _0x56123c = null;
    if (
      _0xef7d0b['EfhCQ'](_0x28ce72, null) ||
      _0xef7d0b['YSPLn'](_0x28ce72, undefined)
    ) {
      _0x28ce72 = document['createElement']('style');
    } else {
      _0x56123c = _0x28ce72['innerHTML'];
    }
    _0x28ce72['innerHTML'] =
      '\x0a\x20\x20\x20\x20' +
      (_0xef7d0b['RPqUS'](_0x56123c, null) ? _0x56123c : '') +
      '\x0a\x20\x20\x20\x20.' +
      this.#imagePreviewClassName +
      '\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20height:\x2030rem;\x0a\x20\x20\x20\x20\x20\x20width:\x2030rem;\x0a\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20red;\x0a\x20\x20\x20\x20\x20\x20left:\x20calc(100%\x20-\x2030rem);\x0a\x20\x20\x20\x20\x20\x20top:\x20calc(100%\x20-\x2030rem);\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.' +
      this.#lensClassName +
      '\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20height:\x205.7rem;\x0a\x20\x20\x20\x20\x20\x20width:\x205.7rem;\x0a\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20red;\x0a\x20\x20\x20\x20\x20\x20background-color:\x20rgba(255,\x200,\x200,\x200.186);\x0a\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20';
    document['head']['appendChild'](_0x28ce72);
  }
  ['setMagnifyItProperty']({
    lensHeight: _0x186a9f,
    lensWidth: _0xacf24c,
    lensColor: _0x4db16a,
    previewBorderColor: _0x16bd91,
    previewCssRuleTop: _0x2d667f,
    previewCssRuleLeft: _0xa3ad7,
    previewBorderSize: _0x11bcd0,
    lensBorderSize: _0x529f06,
    lensBorderColor: _0x377e3a,
  }) {
    const _0x41a8ba = { anRhb: '5|1|8|0|6|2|3|4|7' };
    const _0x5b0f20 = _0x41a8ba['anRhb']['split']('|');
    let _0x42bed8 = 0x1 * -0x15b5 + 0x1af + -0x2 * -0xa03;
    while (!![]) {
      switch (_0x5b0f20[_0x42bed8++]) {
        case '0':
          if (_0x529f06) {
            this.#lensBorderSize = _0x529f06;
          }
          continue;
        case '1':
          if (_0xacf24c) {
            this.#lensWidth = _0xacf24c;
          }
          continue;
        case '2':
          if (_0x16bd91) {
            this.#previewBorderColor = _0x16bd91;
          }
          continue;
        case '3':
          if (_0x2d667f) {
            this.#previewTop = _0x2d667f;
          }
          continue;
        case '4':
          if (_0xa3ad7) {
            this.#previewLeft = _0xa3ad7;
          }
          continue;
        case '5':
          if (_0x186a9f) {
            this.#lensHeight = _0x186a9f;
          }
          continue;
        case '6':
          if (_0x377e3a) {
            this.#lensBorderColor = _0x377e3a;
          }
          continue;
        case '7':
          if (_0x11bcd0) {
            this.#previewBorderSize = _0x11bcd0;
          }
          continue;
        case '8':
          if (_0x4db16a) {
            this.#lensColor = _0x4db16a;
          }
          continue;
      }
      break;
    }
  }
  #makeId(_0x3cc3c5) {
    const _0x18e504 = {
      tmaqK: '2|0|4|1|3',
      szzaF: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      WfQvM: function (_0x360ac8, _0x2ccc58) {
        return _0x360ac8 < _0x2ccc58;
      },
      xvYKN: function (_0x477c5e, _0x163cd9) {
        return _0x477c5e * _0x163cd9;
      },
    };
    const _0x36d08e = _0x18e504['tmaqK']['split']('|');
    let _0x6d8ffc = 0x1cb1 + 0x1 * -0x123 + -0x1b8e;
    while (!![]) {
      switch (_0x36d08e[_0x6d8ffc++]) {
        case '0':
          var _0x170fee = _0x18e504['szzaF'];
          continue;
        case '1':
          for (
            var _0x5185cd = 0x140e + 0x1 * 0x189a + -0x2ca8;
            _0x18e504['WfQvM'](_0x5185cd, _0x3cc3c5);
            _0x5185cd++
          ) {
            _0xd7b268 += _0x170fee['charAt'](
              Math['floor'](_0x18e504['xvYKN'](Math['random'](), _0x2b8a1c))
            );
          }
          continue;
        case '2':
          var _0xd7b268 = '';
          continue;
        case '3':
          return _0xd7b268;
        case '4':
          var _0x2b8a1c = _0x170fee['length'];
          continue;
      }
      break;
    }
  }
  #zoomInit() {
    const _0x8094f = '6|3|5|0|1|2|4'['split']('|');
    let _0x353ff0 = 0x2f * 0x81 + -0x11b6 + -0x8b * 0xb;
    while (!![]) {
      switch (_0x8094f[_0x353ff0++]) {
        case '0':
          this.#imageDom['setAttribute']('id', this.#imageId);
          continue;
        case '1':
          this.#previewDom['setAttribute']('id', this.#imagePreviewId);
          continue;
        case '2':
          this.#lensDom['setAttribute']('id', this.#lensId);
          continue;
        case '3':
          this.#previewDom = document['querySelector'](
            '.' + this.#imagePreviewClassName
          );
          continue;
        case '4':
          this.#magnify();
          continue;
        case '5':
          this.#lensDom = document['querySelector']('.' + this.#lensClassName);
          continue;
        case '6':
          this.#imageDom = document['querySelector'](
            '.' + this.#imageClassName
          );
          continue;
      }
      break;
    }
  }
  #magnify() {
    const _0x102803 = { LZrtH: 'mousemove' };
    this.#lensDom['addEventListener'](_0x102803['LZrtH'], (_0x154868) =>
      this.#moveLens(_0x154868)
    );
    this.#imageDom['addEventListener'](_0x102803['LZrtH'], (_0x1d3c96) =>
      this.#moveLens(_0x1d3c96)
    );
  }
  #moveLens(_0x3aaafb) {
    const _0xa930a3 = {
      fUCjt: function (_0x429d40, _0x2a3dee) {
        return _0x429d40 - _0x2a3dee;
      },
      uZluq: function (_0x4a7d47, _0x304c6a) {
        return _0x4a7d47 - _0x304c6a;
      },
      BbCOC: function (_0x858282, _0x4dcb06) {
        return _0x858282 / _0x4dcb06;
      },
      RUyCc: function (_0x2eff60, _0x2f43c5) {
        return _0x2eff60 - _0x2f43c5;
      },
      BbiYp: function (_0x590e0b, _0x10e901) {
        return _0x590e0b - _0x10e901;
      },
      KyakI: function (_0x23ed5c, _0x18dfe2) {
        return _0x23ed5c / _0x18dfe2;
      },
      xAoJE: function (_0x3d1cf2, _0x1fc96f) {
        return _0x3d1cf2 / _0x1fc96f;
      },
      THSYb: function (_0x214c83, _0x43fa21) {
        return _0x214c83 === _0x43fa21;
      },
      gHswl: 'none',
      Icsbl: 'flex',
      TLFkn: function (_0x37db70, _0x50323e) {
        return _0x37db70 > _0x50323e;
      },
      rgHGj: function (_0xe9562e, _0x787822) {
        return _0xe9562e < _0x787822;
      },
      rKrvB: function (_0x4a7c4a, _0x1f43cb) {
        return _0x4a7c4a > _0x1f43cb;
      },
      PbnNU: function (_0x4d6727, _0x50f264) {
        return _0x4d6727 / _0x50f264;
      },
      rNSnU: 'src',
      RhsPx: function (_0x11894e, _0x112c2b) {
        return _0x11894e * _0x112c2b;
      },
      DiYKJ: function (_0x2923c3, _0x3a46ba) {
        return _0x2923c3 * _0x3a46ba;
      },
      qhXuZ: function (_0x27db1c, _0x12c479) {
        return _0x27db1c * _0x12c479;
      },
      vqpqH: function (_0x2115f1, _0x255fb5) {
        return _0x2115f1 * _0x255fb5;
      },
      fmDRM: 'no-repeat',
    };
    let _0x3c58aa, _0x3bb005, _0x4505a1, _0x5edf8c;
    const _0x37bef6 = this.#imageDom['getBoundingClientRect']();
    _0x3c58aa = _0xa930a3['fUCjt'](
      _0xa930a3['uZluq'](_0x3aaafb['pageX'], _0x37bef6['left']),
      _0xa930a3['BbCOC'](
        this.#lensDom['offsetWidth'],
        -0x1ecd + 0x13 * 0x3 + 0x1e96
      )
    );
    _0x3bb005 = _0xa930a3['RUyCc'](
      _0xa930a3['RUyCc'](_0x3aaafb['pageY'], _0x37bef6['top']),
      _0xa930a3['BbCOC'](
        this.#lensDom['offsetHeight'],
        -0x1df0 + 0x1779 + -0x679 * -0x1
      )
    );
    const _0x2149d9 = _0xa930a3['BbiYp'](
      _0x3aaafb['pageX'],
      _0xa930a3['KyakI'](
        this.#lensDom['offsetWidth'],
        0x57 * -0x17 + 0x13 * 0x97 + -0x362
      )
    );
    const _0x3bdd90 = _0xa930a3['uZluq'](
      _0x3aaafb['pageY'],
      _0xa930a3['xAoJE'](
        this.#lensDom['offsetHeight'],
        0xd37 + -0x1cb * 0x7 + -0xa8
      )
    );
    if (_0xa930a3['THSYb'](this.#hideItems, !![])) {
      this.#previewDom['style']['display'] = _0xa930a3['gHswl'];
      this.#lensDom['style']['display'] = _0xa930a3['gHswl'];
    } else {
      this.#previewDom['style']['display'] = _0xa930a3['Icsbl'];
      this.#lensDom['style']['display'] = 'flex';
    }
    this.#lensDom['style']['top'] = _0x3bdd90 + 'px';
    this.#lensDom['style']['left'] = _0x2149d9 + 'px';
    this.#lensDom['style']['height'] = this.#lensHeight + 'rem';
    this.#lensDom['style']['width'] = this.#lensWidth + 'rem';
    this.#lensDom['style']['backgroundColor'] = '' + this.#lensColor;
    this.#lensDom['style']['border'] =
      this.#lensBorderSize + 'px\x20solid\x20' + this.#lensBorderColor;
    this.#previewDom['style']['border'] =
      this.#previewBorderSize + 'px\x20solid\x20' + this.#previewBorderColor;
    this.#previewDom['style']['top'] = '' + this.#previewTop;
    this.#previewDom['style']['left'] = '' + this.#previewLeft;
    const _0x204473 = _0xa930a3['uZluq'](
      _0x37bef6['width'],
      this.#lensDom['offsetWidth']
    );
    const _0x294b8d = _0xa930a3['fUCjt'](
      _0x37bef6['height'],
      this.#lensDom['offsetHeight']
    );
    if (_0xa930a3['THSYb'](this.#boundaryCheck, !![])) {
      if (_0xa930a3['TLFkn'](_0x3c58aa, _0x204473)) {
        this.#previewDom['style']['display'] = _0xa930a3['gHswl'];
        this.#lensDom['style']['display'] = _0xa930a3['gHswl'];
      } else if (
        _0xa930a3['rgHGj'](_0x3c58aa, 0x43b * 0x3 + -0x1 * -0x1899 + -0x254a)
      ) {
        this.#previewDom['style']['display'] = _0xa930a3['gHswl'];
        this.#lensDom['style']['display'] = _0xa930a3['gHswl'];
      } else if (_0xa930a3['rKrvB'](_0x3bb005, _0x294b8d)) {
        this.#previewDom['style']['display'] = 'none';
        this.#lensDom['style']['display'] = _0xa930a3['gHswl'];
      } else if (
        _0xa930a3['rgHGj'](_0x3bb005, 0x1c8d + -0x141c + 0x1 * -0x871)
      ) {
        this.#previewDom['style']['display'] = _0xa930a3['gHswl'];
        this.#lensDom['style']['display'] = _0xa930a3['gHswl'];
      } else {
        this.#previewDom['style']['display'] = _0xa930a3['Icsbl'];
        this.#lensDom['style']['display'] = _0xa930a3['Icsbl'];
      }
    }
    _0x4505a1 = _0xa930a3['PbnNU'](
      this.#previewDom['offsetWidth'],
      this.#lensDom['offsetWidth']
    );
    _0x5edf8c =
      this.#previewDom['offsetHeight'] / this.#lensDom['offsetHeight'];
    const _0x325439 = this.#imageDom['getAttribute'](_0xa930a3['rNSnU']);
    this.#previewDom['style']['backgroundImage'] = 'url(' + _0x325439 + ')';
    this.#previewDom['style']['backgroundPosition'] =
      '-' +
      _0xa930a3['RhsPx'](_0x4505a1, _0x3c58aa) +
      'px\x20-' +
      _0xa930a3['DiYKJ'](_0x5edf8c, _0x3bb005) +
      'px';
    this.#previewDom['style']['backgroundSize'] =
      _0xa930a3['qhXuZ'](_0x37bef6['width'], _0x4505a1) +
      'px\x20' +
      _0xa930a3['vqpqH'](_0x37bef6['height'], _0x5edf8c) +
      'px\x20';
    this.#previewDom['style']['backgroundRepeat'] = _0xa930a3['fmDRM'];
  }
}
let magnifyObject = null;
export function magnifyInitialize({
  imageClassName: _0xbf8458,
  imagePreviewClassName: _0x28f2e6,
  lensClassName: _0x2f5cd4,
}) {
  const _0x2eafd8 = new MagnifyIt({
    imageClassName: _0xbf8458,
    imagePreviewClassName: _0x28f2e6,
    lensClassName: _0x2f5cd4,
  });
  magnifyObject = _0x2eafd8;
  return _0x2eafd8;
}
export function setMangifyProperties({
  lensHeight: _0x4a59a4,
  lensWidth: _0x213e27,
  lensColor: _0x4ed28e,
  lensBorderColor: _0x4278cb,
  lensBorderSize: _0x58644c,
  previewBorderColor: _0x2a5034,
  previewBorderSize: _0x44e5b1,
}) {
  const _0x42d5f9 = {
    pYiGK: function (_0x4d9533, _0x5b8a3b) {
      return _0x4d9533 === _0x5b8a3b;
    },
    mJJlc:
      'please\x20initialize\x20the\x20magnifyIt\x20class\x20by\x20calling\x20magnifyInitialize\x20first\x20',
  };
  if (_0x42d5f9['pYiGK'](magnifyObject, null)) {
    console['warn'](_0x42d5f9['mJJlc']);
  } else {
    magnifyObject['setMagnifyItProperty']({
      lensHeight: _0x4a59a4,
      lensWidth: _0x213e27,
      lensColor: _0x4ed28e,
      lensBorderColor: _0x4278cb,
      lensBorderSize: _0x58644c,
      previewBorderColor: _0x2a5034,
      previewBorderSize: _0x44e5b1,
    });
  }
}
export function removeBoundary(_0x138e0b) {
  const _0xa81d54 = {
    MjdpH: function (_0x3b4c23, _0x528fa3) {
      return _0x3b4c23 === _0x528fa3;
    },
    sKAeC:
      'please\x20initialize\x20the\x20magnifyIt\x20class\x20by\x20calling\x20magnifyInitialize\x20first\x20',
  };
  if (_0xa81d54['MjdpH'](magnifyObject, null)) {
    console['warn'](_0xa81d54['sKAeC']);
  } else {
    magnifyObject['removeBoundary'](_0x138e0b);
  }
}
