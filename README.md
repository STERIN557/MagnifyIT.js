# MagnifyIT.js

A simple small Javascript Library to create Magnification feature for your frontend, the size of this library is less than 14kb.
This current version works only with vanilla Js but you can try to find way to implement this feature for other frameworks by
by creating a different branch of this Repository.

# How to use it

```
npm install magnifyit

```

create a js file lets say index.js in your root folder make this file a module type when linking in the html file and then

```

import { MangnifyIt } from './node_modules/magnifyit/index.js';

const { magnifyInitialize, removeBoundary, setMangifyProperties } =
  MangnifyIt();


```

then for this functionality to work you need to initialize atleast this "magnifyInitialize" function so lets do it
before that you need to create three tag in you html file

for example

```
<div class="preview"></div>
<div class="lens"></div>
<img src="some image link" class="image"/>

```

here as you can see above that we have written three tags
i.e image, and two div and we have given its class names
you can choose the name for the class but you have to pass these
class name accurately to the below function in you js file

```
magnifyInitialize({
    imageClassName: 'image',
    imagePreviewClassName: 'preview',
    lensClassName: 'lens'
})

```

if you have done everything right and you are using this on vanilla js project
then you will see the magnification happening.

#Customise

also you can customise the style of the preview and lens color
you can add new styles using the your declared class names

other than that you can use "removeBoundary", "setMangifyProperties" these function to customise the look of the
lens and preview

example

```

setMangifyProperties({
  lensHeight: 4,
  lensWidth: 4,
  lensColor: 'rgba(255,255,255,0.2)',
  lensBorderColor: 'pink',
  lensBorderSize: 2,
  previewBorderColor: 'blue',
  previewBorderSize: 2,
})


```

also if you want that the magnification should stop after
the lens hits the border you can try "removeBoundary"

you just have to type

```
removeBoundary(true) // true => enable, false => disable

```

Please support this Repository, Thank you
