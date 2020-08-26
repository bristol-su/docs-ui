'use strict'

module.exports = (name) => {
  return ['playground', 'portal', 'control-frontend'].includes(name) || name === 'api-client-php'
}
