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

// Get offset top value
export function offsetTop($el) {
  var rect = $el.getBoundingClientRect(),
      scrollTop = window.pageYOffset || (document.body.scrollTop || document.documentElement.scrollTop)

  return rect.top + scrollTop
}

// Find parents of element by selector
export function parents( element, selector ) {
  let result = []

  do {
    element = element.parentElement
    if (element === null) break;

    if (element.matches(selector)) {
      result.push(element)
    }
  } while (true);

  return result;
}

export function insertAfter(element, refElement) {
  return refElement.parentNode.insertBefore(element, refElement.nextSibling);
}

// Typer effect
export function handleTyper(options = {}) {
  const defaults = {
    selector: '.typer'
  }
  const _options = {...defaults, ...options}

  const $selectors = document.querySelectorAll(_options.selector);

  $selectors.forEach($selector => {
    let words = $selector.getAttribute('data-words')
        words = words.split(',')
    let delay = $selector.getAttribute('data-delay')

    const _makeParts = (part, word, action, callback) => {
      if (action === 'add' || action === 'remove') {
        if (action === 'add') {
          part += word[part.length]
        }

        if (action === 'remove') {
          part = part.substr(0, part.length - 1)
        }

        $selector.innerHTML = part

        let _delay = delay;
        if (action === 'add' && part === word) {
          action = 'remove';
          _delay = 1500;
        }
        if (action === 'remove' && part === '') {
          action = 'end';
        }

        setTimeout(() => {
          _makeParts(part, word, action, callback)
        }, _delay)
      } else {
        callback();
      }
    }

    const _getWord = (_words) => {
      let word = ''
      if (!_words.length) {
        _words = words.slice(0);
      }

      word = _words[0]
      _makeParts('', word, 'add', () => {
        _words.splice(0, 1)

        _getWord(_words)
      });
    }

    let _words = words.slice(0);
    _getWord(_words)
  })
}

// Handle cursor Animation
export function handleCursor(options = {}) {
  const defaults = {
    selector: '.cursor'
  }
  const _options = {...defaults, ...options}

  const $selectors = document.querySelectorAll(_options.selector);

  $selectors.forEach($selector => {
    let cursordisplay = $selector.getAttribute('data-cursordisplay')

    $selector.innerHTML = cursordisplay

    setInterval(() => {
      $selector.classList.toggle('show-cursor')
    }, 500)
  })
}

// ScrollTo with animation
export function handleScrollTo(options = {}) {
  const defaults = {
    selector: '[data-toggle="scroll-to"]',
    duration: 400
  }
  const _options = {...defaults, ...options}

  const $selectors = document.querySelectorAll(_options.selector);

  const _scrollTo = (e) => {
    const selector = e.target.getAttribute('data-href') ? e.target.getAttribute('data-href') : e.target.getAttribute('href')
    if (!selector) return;

    const $target = document.querySelector(selector)
    if (!$target) return;

    e.preventDefault();

    const container = document.scrollingElement

    const _makeScrollTo = (element, to, duration) => {
      if (duration <= 0) return;

      let difference = to - element.scrollTop
      let perTick = difference / duration * 10

      setTimeout(function() {
          element.scrollTop = element.scrollTop + perTick

          if (element.scrollTop === to) return;

          _makeScrollTo(element, to, duration - 10)
      }, 10);
    }

    _makeScrollTo(container, offsetTop($target), _options.duration);
  }

  $selectors.forEach($selector => {
    $selector.addEventListener('click', _scrollTo, false)
  })

  _log('Init: handleScrollTo')
}

// SpyScroll Navigation
export function handleSpyNavScroll(options = {}) {
  const defaults = {
    selector: '[data-spy="nav-scroll"]',
    offset: 0,
    parent: window,
    target: ''
  }

  const $selectors = document.querySelectorAll(defaults.selector)

  $selectors.forEach($selector => {
    const attrs = {
      offset: $selector.getAttribute('data-offset') ? $selector.getAttribute('data-offset') : defaults.offset,
      parent: $selector.getAttribute('data-parent') ? $selector.getAttribute('data-parent') : defaults.parent,
      target: $selector.getAttribute('data-target') ? $selector.getAttribute('data-target') : defaults.target
    }

    options = {...options, ...attrs}
    const _options = {...defaults, ...options}

    if (!_options.target) return

    const $menu = document.querySelector(_options.target)
    const $parent = _options.parent === window ? window : document.querySelector(_options.parent)
    const $container = $parent === window ? document.documentElement : $parent

    let items = []
    const $menuItems = $menu.querySelectorAll('a')
    $menuItems.forEach($item => {
      items[items.length] = $item.getAttribute('data-href') ? $item.getAttribute('data-href') : $item.getAttribute('href')
    })

    if (!items.length) return;

    const _setActive = (item) => {
      let $item = document.querySelector(item)

      // Skip if element is not found
      if (!$item) return;

      const itemH = $item.offsetHeight
      const itemT = offsetTop($item)

      const scrollTop = $container === document.documentElement ? document.scrollingElement.scrollTop : $container.scrollTop;

      // Skip if element is not on screen
      if ((scrollTop - _options.offset) > (itemH + itemT)) return;

      let isActive = false
      if (($container.offsetHeight - $container.clientHeight - _options.offset) > scrollTop) {
        // Get position current element
        isActive = (itemT - scrollTop) < _options.offset;
      } else {
        isActive = true
      }

      if (isActive) {
        let $menuItem = $menu.querySelector('a[data-href="'+item+'"]') ? $menu.querySelector('a[data-href="'+item+'"]') : $menu.querySelector('a[href="'+item+'"]')

        // if state is changed
        if (!$menuItem.classList.contains('active')) {
          // clear active class
          $menuItems.forEach($_menuItem => {
            $_menuItem.classList.remove('active')
          })

          // add active class to current
          $menuItem.classList.add('active')
        }
      }
    }

    const _scrollEvent = (e) => {
      items.forEach(item => {
        _setActive(item)
      })
    }

    $parent.addEventListener('scroll', _scrollEvent, false)
  })

  _log('Init: handleSpyScroll')
}

// SpyScroll Item
export function handleSpyItemScroll(options = {}) {
  const defaults = {
    selector: '[data-spy="item-scroll"]',
    offset: 0,
    parent: window,
    item: '.card',
    callback: ''
  }

  const callbacks = {
    loadingProgress: ($item) => {
      const value = $item.getAttribute('data-value')
      const $bar = $item.querySelector('.progress-bar')

      $bar.style.width = value + '%'
    },
    loadingSkills: ($item) => {
      $item.classList.add('animated', 'pulse')
    }
  }


  const $selectors = document.querySelectorAll(defaults.selector)

  $selectors.forEach($selector => {
    const attrs = {
      offset: $selector.getAttribute('data-offset') ? $selector.getAttribute('data-offset') : defaults.offset,
      parent: $selector.getAttribute('data-parent') ? $selector.getAttribute('data-parent') : defaults.parent,
      item: $selector.getAttribute('data-item') ? $selector.getAttribute('data-item') : defaults.target,
      callback: $selector.getAttribute('data-callback') ? $selector.getAttribute('data-callback') : defaults.callback
    }

    options = {...options, ...attrs}
    const _options = {...defaults, ...options}

    const $parent = _options.parent === window ? window : document.querySelector(_options.parent)
    const $container = $parent === window ? document.documentElement : $parent
    const $items = $selector.querySelectorAll(_options.item)

    // $items.forEach($item => {
    //   const itemH = $item.offsetHeight
    //   const itemT = offsetTop($item)
    //
    //   console.log($item, itemT + itemH);
    // })

    const _scrollEvent = (e) => {
      const _applyCallback = $item => {
        // Skip if element is not found
        if (!$item) return;

        if ($item.getAttribute('data-is-animated')) return;

        const itemH = $item.offsetHeight
        const itemT = offsetTop($item)

        const scrollTop = $container === document.documentElement ? document.scrollingElement.scrollTop : $container.scrollTop;

        let difference = scrollTop + $container.clientHeight - _options.offset - (itemT + itemH)
        if (difference > 0) {
          if (_options.callback) {

            callbacks[_options.callback]($item)

            $item.setAttribute('data-is-animated', true)
          }
        }
      }

      if ($items.length > 1) {
        [...$items].forEach($item => {
          _applyCallback($item)
        })
      } else {
        _applyCallback($items)
      }
    }

    $parent.addEventListener('scroll', _scrollEvent, false)
  })

  _log('Init: handleSpyScroll')
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
