/* globals _hmt */
function appendScript(id) {
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://hm.baidu.com/hm.js?' + id
  document.body.appendChild(script)
}

function init(id) {
  if (!window._hmt) {
    window._hmt = []
    appendScript(id)
  }
}

function collect(url, id) {
  init(id)
  
  _hmt.push(['_trackPageview', url]);
}

export default function (router, id) {
  if (typeof router === 'function') {
    router(url => {
      collect(url, id)
    })
  } else {
    router.afterEach(to => {
      collect(to.fullPath, id)
    })
  }
}
