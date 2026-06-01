var scriptSrc = "https://plausible.io/js/pa-6_srOGVV9SLMWJ1ZpUAbG.js"

window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)},window.plausible.init=function(i){window.plausible.o=i||{}};var script=document.createElement("script");script.type="text/javascript",script.defer=!0,script.src=scriptSrc;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(script,r);

plausible.init({
  customProperties: {
    browser_language: navigator.language || navigator.userLanguage
  }
})

document.addEventListener('click', function(e) {
  var a = e.target.closest('a');
  if (!a) return;
  var href = a.getAttribute('href') || '';
  var button = null;
  if (href.indexOf('plausible.io/register') !== -1) {
    button = 'Start free trial';
  } else if (href.indexOf('plausible.io/plausible.io') !== -1) {
    button = 'View live demo';
  }
  if (button) {
    plausible('CTA Click', {props: {position: 'Inline', type: 'Docs', button: button}});
  }
});
