const script = document.createElement('script')

script.defer = true
script.dataset.domain = 'plausible.io'
script.src = 'https://plausible.io/js/script.pageview-props.js'
script.setAttribute('event-browser_language', navigator.language || navigator.userLanguage)

document.getElementsByTagName('head')[0].appendChild(script)