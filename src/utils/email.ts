// Email is assembled at runtime to avoid plain-text harvesting by scrapers.
const parts = ['info', '@', 'salvatoreviscuso', '.', 'dev']
export const email     = parts.join('')
export const emailHref = 'mailto:' + parts.join('')
