var scriptSrc = "https://plausible.io/js/pa-6_srOGVV9SLMWJ1ZpUAbG.js"

window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)},window.plausible.init=function(i){window.plausible.o=i||{}};var script=document.createElement("script");script.type="text/javascript",script.defer=!0,script.src=scriptSrc;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(script,r);

plausible.init({
  customProperties: {
    browser_language: navigator.language || navigator.userLanguage,
    logged_in: document.cookie.includes('logged_in=true')
  }
})

// One delegated handler also covers Markdown links and client-side navigation.
if (!window.plausibleDocsCtaTracking) {
  window.plausibleDocsCtaTracking = true;
  document.addEventListener('click', function(e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var url;
    try { url = new URL(a.getAttribute('href'), window.location.href); }
    catch (_) { return; }
    if (url.origin !== 'https://plausible.io') return;
    var path = url.pathname.replace(/\/$/, '') || '/';
    var button;
    if (path === '/register') button = 'Start free trial';
    else if (path === '/plausible.io') button = 'View live demo';
    else if (path === '/' && url.hash === '#pricing') button = 'See pricing';
    else if (path === '/contact') button = 'Contact us';
    else return;
    var props = {
      position: a.getAttribute('data-cta-position') || 'Inline',
      type: 'Docs',
      button: button
    };
    var platform = a.getAttribute('data-cta-platform');
    if (platform) props.platform = platform;
    window.plausible && window.plausible('CTA Click', {props: props});
  });
}
