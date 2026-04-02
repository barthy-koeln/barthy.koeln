const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
})

export function formatDate (date: Date) {
  return formatter.format(date)
}