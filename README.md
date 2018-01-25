# vue-qrcodejs

the Vue 2.x component of [QRious.js](https://github.com/neocotic/qrious)

## Installation

``` bash
# npm
npm install vue-qriousjs

# yarn
yarn add vue-qriousjs

```


## Import
``` bash
// main.js
import vueQriousjs from 'vue-qriousjs' 
Vue.use(vueQriousjs)

```


## Usage

### In template
``` bash
<vueQriousjs :config="config"></vueQriousjs>

```

### Set config value
``` bash
data () {
    return {
        config:{
            background: 'green',
            backgroundAlpha: 0.8,
            foreground: 'blue',
            foregroundAlpha: 0.8,
            level: 'H',
            padding: 25,
            size: 500,
            value: 'https://github.com/slimcheng/vue-qriousjs'
        }
    }
}

```

For more details you should definitely check out [QRious.js](https://github.com/neocotic/qrious)