// Show log message
export function _log(msg, type = 'info') {
  if (process.env.NODE_ENV === 'development') {
    switch (type) {
      case 'error': {
        console.error('[LOG ERROR]::' + msg)

        break
      }
      default: {
        console.info('[LOG]::' + msg)
      }
    }
  }
}

// Capitalize text
export function toCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Pan with animation
export function handlePan(options = {}) {
  const defaults = {
    selector: '[data-toggle="pan"]'
  }
  const _options = {...defaults, ...options}

  const $targets = document.querySelectorAll(_options.selector);

  $targets.forEach($target => {
    $target.addEventListener('mousemove', (e) => {
      const $pan = $target.querySelector('.pan')
      if (!$pan) return;

      const $panStyle = window.getComputedStyle($pan)

      const transformOrigin = ((e.pageX - $pan.offsetLeft) / parseFloat($panStyle.width)) * 100 + '% ' +
                              ((e.pageY - $pan.offsetTop) / parseFloat($panStyle.height)) * 100 +'%';

      $pan.style.transformOrigin = transformOrigin
    }, false)
  })
}

// ScrollTo with animation
export function handleScrollTo(options = {}) {
  const defaults = {
    selector: '[data-toggle="scroll-to"]',
    duration: 400
  }
  const _options = {...defaults, ...options}

  const $targets = document.querySelectorAll(_options.selector);

  $targets.forEach($target => {
    $target.addEventListener('click', (e) => {
      const selector = $target.getAttribute('data-href') ? $target.getAttribute('data-href') : $target.getAttribute('href')
      if (!selector) return;

      const target = document.querySelector(selector)
      if (!target) return;
      
      const container = document.documentElement

      const scrollTo = (element, to, duration) => {
        if (duration <= 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) return;
            scrollTo(element, to, duration - 10);
        }, 10);
      }

      scrollTo(container, target.offsetTop, _options.duration);

    }, false)
  })
}

// Get antispam link
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
export function getEmailLink() {
  const coded = "D8w6LE.6qhLFTr@p8Twn.FM8"
  const key = "mQ2SKuZ9nUF7e4JV1oOaxp3D8sziYhCRrjyftWk5XMbTB0lHcqGwvNIPLAEg6d"
  const shift = coded.length
  let link = ""
  for (let i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i)) === -1) {
      let ltr = coded.charAt(i)
      link += (ltr)
    }
    else {
      let ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
      link += (key.charAt(ltr))
    }
  }

  return link
}
