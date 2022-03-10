export const focusDirective = {
  mounted: (el) => {
    el.focus()
  },
}

export const rainbowDirective = {
  mounted(el) {
    el.style.color = _getRandomColor()
  },
}

export const customOnDirective = {
  mounted(el, binding) {
    const type = binding.arg
    const fn = binding.value
    el.addEventListener(type, fn)
  },
}

function _getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
