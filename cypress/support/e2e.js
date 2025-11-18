import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.config('hideXHR', true);
