const params = new URLSearchParams(window.location.search)

if (params.has('compact')) {
  const link = document.createElement('link')

  link.rel = 'stylesheet'
  link.href = 'compact.css'

  document.head.insertAdjacentElement('beforeend', link)
}