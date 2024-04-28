import '@src/main.js'
import '@src/main.scss'
import mainHTML from '@src/main.html?raw'

const iframeContent = document.getElementById('iframe-content')
iframeContent.insertAdjacentHTML('afterbegin', mainHTML)
